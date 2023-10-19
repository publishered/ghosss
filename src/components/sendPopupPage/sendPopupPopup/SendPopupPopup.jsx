import Button from '@/components/UI/Button/Button'
import Modal from '@/components/UI/modal/Modal'
import NotifyContainer from '@/components/UI/notifyContainer/NotifyContainer'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import editPopup from '../../../../services/popups/editPopup'
import styles from './SendPopupPopup.module.css'
import SendPopupPopupImageUpload from './sendPopupPopupImageUpload/SendPopupPopupImageUpload'
import SendPopupPopupInputs from './sendPopupPopupInputs/SendPopupPopupInputs'
import SendPopupPopupPreview from './sendPopupPopupPreview/SendPopupPopupPreview'
import SendPopupPopupTimes from './sendPopupPopupTimes/SendPopupPopupTimes'

const SendPopupPopup = ({isModalOpen, setIsModalOpen, pushSettings, setPushSettings, setPopupsList, resetPushSettings}) => {

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

   const submitFormHandler = async e => {
      e.preventDefault()

      let isError = false

      if (!pushSettings.link.length) {
         toast.error('Link can not be empty!')
         isError = true
      }

      if (!pushSettings.closeButtonColor.length) {
         toast.error('Close Button Color can not be empty!')
         isError = true
      }

      if (!pushSettings.position) {
         toast.error('Position can not be empty!')
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

      if (!pushSettings.showingFrom) {
         toast.error('Showing From can not be empty!')
         isError = true
      }

      if (!pushSettings.showingTo) {
         toast.error('Showing To can not be empty!')
         isError = true
      }

      if (!pushSettings.banner && !pushSettings.banner_preview) {
         toast.error('Banner can not be empty!')
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
      formData.append("buttonColor", pushSettings.closeButtonColor)
      formData.append("closeButton", pushSettings.showCloseButtonSec)
      formData.append("timeAppearance", pushSettings.timeAppearance)
      formData.append("darkening", pushSettings.backgroundDarkening)
      formData.append("position", pushSettings.position)
      formData.append("device", pushSettings.device)
      formData.append("countryCode", JSON.stringify(pushSettings.countryCode))

      formData.append("dateFrom", pushSettings.showingFrom.getTime() / 1000)
      formData.append("dateTo", pushSettings.showingTo.getTime() / 1000)

      if (pushSettings.banner) {
         formData.append("banner", pushSettings.banner)
      }

      const cookie = new Cookies()

      formData.append("auth_token", cookie.get('auth_token'))

      const newPopup = await editPopup(formData)

      if (newPopup?.id) {
         setPopupsList(prevState => [...prevState.filter(popup => +popup.id !== +newPopup.id), newPopup])
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
            <SendPopupPopupInputs
               pushSettings={pushSettings}
               setSettings={setSettings}
               addCountryCode={addCountryCode}
               removeCountryCode={removeCountryCode}
            />
            <SendPopupPopupTimes
               pushSettings={pushSettings}
               setSettings={setSettings}
            />
         </div>
         <div className={styles.right}>
            <SendPopupPopupImageUpload 
               setSettings={setSettings}
            />
            <SendPopupPopupPreview 
               pushSettings={pushSettings}
            />
            <Button 
               className={styles.button}
               onClick={submitFormHandler}
            >
               Make Pop-up
            </Button>
         </div>
      </form>
      <NotifyContainer />
   </Modal>
}

export default SendPopupPopup