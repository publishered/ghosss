import Button from '@/components/UI/Button/Button'
import Modal from '@/components/UI/modal/Modal'
import NotifyContainer from '@/components/UI/notifyContainer/NotifyContainer'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import editPush from '../../../../services/pushes/editPush'
import styles from './SendNotificationPopup.module.css'
import SendNotificationPopupImageUpload from './sendNotificationPopupImageUpload/SendNotificationPopupImageUpload'
import SendNotificationPopupInputs from './sendNotificationPopupInputs/SendNotificationPopupInputs'
import SendNotificationPopupPreview from './sendNotificationPopupPreview/SendNotificationPopupPreview'
import SendNotificationPopupTimes from './sendNotificationPopupTimes/SendNotificationPopupTimes'

function addHoursAndMinutesToTimestamp(timestamp, hoursToAdd, minutesToAdd) {
   // Создаем объект Date на основе временной метки
   var date = new Date(timestamp * 1000); // Умножаем на 1000, так как timestamp обычно в секундах
 
   // Добавляем часы и минуты
   // date.setHours(date.getHours() + hoursToAdd);
   // date.setMinutes(date.getMinutes() + minutesToAdd);

   date.setHours(hoursToAdd);
   date.setMinutes(minutesToAdd);
 
   // Получаем новую временную метку
   var newTimestamp = Math.floor(date.getTime() / 1000); // Делим на 1000, чтобы получить метку в секундах
 
   return newTimestamp;
}

const SendNotificationPopup = ({isModalOpen, setIsModalOpen, pushSettings, setPushSettings, setPushesList, resetPushSettings}) => {

   const setSettings = (settingName, value) => {
      setPushSettings(prevState => {
         const newState = {...prevState}
         newState[settingName] = value
         return newState
      })
   } 

   const addCountryCode = newCountryCode => {
      setSettings('countryCode', [...pushSettings.countryCode, newCountryCode])
   }

   const removeCountryCode = removeCountryCode => {
      setSettings('countryCode', [...pushSettings.countryCode.filter(countryCode => countryCode !== removeCountryCode)])
   }

   useEffect(() => {
      const splitted = pushSettings.mailingToTime.str.split(':')

      if (splitted[0]?.length === 2 && splitted[1]?.length === 2) {
         setSettings("mailingToTime", {...pushSettings.mailingToTime, hour: +splitted[0], minute: +splitted[1]})
      } else {
         setSettings("mailingToTime", {...pushSettings.mailingToTime, hour: 0, minute: 0})
      }
   }, [pushSettings.mailingToTime.str])

   useEffect(() => {
      const splitted = pushSettings.mailingFromTime.str.split(':')

      if (splitted[0]?.length === 2 && splitted[1]?.length === 2) {
         setSettings("mailingFromTime", {...pushSettings.mailingFromTime, hour: +splitted[0], minute: +splitted[1]})
      } else {
         setSettings("mailingFromTime", {...pushSettings.mailingFromTime, hour: 0, minute: 0})
      }
   }, [pushSettings.mailingFromTime.str])

   const submitFormHandler = async e => {
      e.preventDefault()

      let isError = false

      if (!pushSettings.link.length) {
         toast.error('Link can not be empty!')
         isError = true
      }

      if (!pushSettings.title.length) {
         toast.error('Title can not be empty!')
         isError = true
      }

      if (!pushSettings.text.length) {
         toast.error('Text can not be empty!')
         isError = true
      }

      if (!pushSettings.threadId) {
         toast.error('Thread can not be empty!')
         isError = true
      }

      if (!pushSettings.device) {
         toast.error('Device can not be empty!')
         isError = true
      }

      if (!pushSettings.countryCode.length) {
         toast.error('Countries can not be empty!')
         isError = true
      }

      if (!pushSettings.mailingFrom) {
         toast.error('Mailing From can not be empty!')
         isError = true
      }

      if (pushSettings.mailingFromTime.hour === null || pushSettings.mailingFromTime.minute  === null) {
         toast.error('Mailing From Time can not be empty!')
         isError = true
      }

      if (!pushSettings.mailingTo) {
         toast.error('Mailing To can not be empty!')
         isError = true
      }

      if (pushSettings.mailingToTime.hour === null || pushSettings.mailingToTime.minute === null) {
         toast.error('Mailing To Time can not be empty!')
         isError = true
      }

      if (!pushSettings.interval) {
         toast.error('Interval can not be empty!')
         isError = true
      }

      if (!pushSettings.icon && !pushSettings.icon_preview) {
         toast.error('Icon can not be empty!')
         isError = true
      }

      if (pushSettings.title.length > 70) {
         toast.error('Max length of text is 70')
         isError = true
      }

      if (pushSettings.text.length > 140) {
         toast.error('Max length of text is 70')
         isError = true
      }

      if (isError) {
         return
      }

      const formData = new FormData()

      if (pushSettings.id) {
         formData.append("id", pushSettings.id)
      }
      
      formData.append("link", pushSettings.link)
      formData.append("title", pushSettings.title)
      formData.append("text", pushSettings.text)
      formData.append("threadId", pushSettings.threadId)
      formData.append("device", pushSettings.device)
      formData.append("countryCode", JSON.stringify(pushSettings.countryCode))

      formData.append("interval", pushSettings.interval)

      if (pushSettings.icon) {
         formData.append("icon", pushSettings.icon)
      }

      if (pushSettings.banner) {
         formData.append("banner", pushSettings.banner)
      }

      formData.append("mailingFrom", addHoursAndMinutesToTimestamp(
         pushSettings.mailingFrom.getTime() / 1000, 
         pushSettings.mailingFromTime.hour, 
         pushSettings.mailingFromTime.minute
      ))

      formData.append("mailingTo", addHoursAndMinutesToTimestamp(
         pushSettings.mailingTo.getTime() / 1000, 
         pushSettings.mailingToTime.hour, 
         pushSettings.mailingToTime.minute
      ))


      const cookie = new Cookies()

      formData.append("auth_token", cookie.get('auth_token'))

      const newPush = await editPush(formData)

      if (newPush?.id) {
         setPushesList(prevState => [...prevState.filter(push => +push.id !== +newPush.id), newPush])
         setIsModalOpen(false)
         resetPushSettings()
      }
   }

   return <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
   >
      <form className={styles.popup}>
         <div className={styles.left}>
            <SendNotificationPopupInputs
               pushSettings={pushSettings}
               setSettings={setSettings}
               addCountryCode={addCountryCode}
               removeCountryCode={removeCountryCode}
            />
            <SendNotificationPopupTimes
               pushSettings={pushSettings}
               setSettings={setSettings}
            />
         </div>
         <div className={styles.right}>
            <SendNotificationPopupImageUpload 
               setSettings={setSettings}
            />
            <SendNotificationPopupPreview 
               pushSettings={pushSettings}
            />
            <Button 
               className={styles.button}
               onClick={submitFormHandler}
            >
               Make Notification
            </Button>
         </div>
      </form>
      <NotifyContainer />
   </Modal>
}

export default SendNotificationPopup