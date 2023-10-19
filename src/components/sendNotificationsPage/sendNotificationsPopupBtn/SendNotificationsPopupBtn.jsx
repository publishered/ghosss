import Button from '@/components/UI/Button/Button'
import styles from './SendNotificationsPopupBtn.module.css'

const SendNotificationsPopupBtn = ({setIsModalOpen, resetPushSettings}) => {
   return <Button 
      className={styles.button}
      onClick={() => {
         setIsModalOpen(prevState => !prevState)
         resetPushSettings()
      }}
   >
      Make Notification
   </Button>
}

export default SendNotificationsPopupBtn