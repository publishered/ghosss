import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/input/Input'
import Modal from '@/components/UI/modal/Modal'
import NotifyContainer from '@/components/UI/notifyContainer/NotifyContainer'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import editThread from '../../../../services/threads/editThread'
import styles from './ThreadsPopup.module.css'
import ThreadsPopupUploadZip from './threadsPopupUploadZip/ThreadsPopupUploadZip'


const ThreadsPopup = ({isModalOpen, setIsModalOpen, setThreadList, pushSettings, setPushSettings, resetPushSettings}) => {


   console.log(pushSettings)

   const setSettings = (settingName, value) => {
      setPushSettings(prevState => {
         const newState = {...prevState}
         newState[settingName] = value
         return newState
      })
   } 


   const submitFormHandler = async e => {
      e.preventDefault()

      let isError = false

      if (!pushSettings.name.length) {
         toast.error('Name can not be empty!')
         isError = true
      }

      if (!pushSettings.zipArchive && !pushSettings.thread_id) {
         toast.error('Zip file can not be empty!')
         isError = true
      }


      if (isError) {
         return
      }

      const cookie = new Cookies()

      const formData = new FormData()

      console.log(pushSettings.zipArchive)
      
      formData.append("name", pushSettings.name)
      formData.append("archive", pushSettings.zipArchive)
      formData.append("auth_token", cookie.get('auth_token'))

      if (pushSettings.thread_id) {
         formData.append("thread_id", pushSettings.thread_id)
      }

      const response = await editThread(formData)

      if (response?.thread_id) {
         setThreadList(prevState => [...prevState.filter(item => item.thread_id !== response.thread_id), response])
         setIsModalOpen(false)
         resetPushSettings()
      }

   }

   return <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
   >
      <form className={styles.popup}>
         <Input
            value={pushSettings.name}
            onInput={e => setSettings("name", e.target.value)}

            className={styles.input}
            placeholder="Thread Name"
         />
         <ThreadsPopupUploadZip
            src="/img/icons/upload_icon.svg"
            alt="upload file"
            text="Upload Zip Archive"
            setSettings={setSettings}
         />
         <Button 
            className={styles.button}
            onClick={submitFormHandler}
         >
            Add Thread
         </Button>
      </form>
      <NotifyContainer />
   </Modal>
}

export default ThreadsPopup