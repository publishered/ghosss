import Button from '@/components/UI/Button/Button'
import styles from './SendPopupPopupBtn.module.css'

const SendPopupPopupBtn = ({setIsModalOpen, resetPushSettings}) => {
   return <Button 
      className={styles.button}
      onClick={() => {
         resetPushSettings()
         setIsModalOpen(prevState => !prevState)
      }}
   >
      Make Pop-up
   </Button>
}

export default SendPopupPopupBtn