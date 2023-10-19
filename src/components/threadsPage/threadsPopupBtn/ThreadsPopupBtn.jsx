import Button from '@/components/UI/Button/Button'
import styles from './ThreadsPopupBtn.module.css'

const ThreadsPopupBtn = ({setIsModalOpen, resetPushSettings}) => {
   return <Button 
      className={styles.button}
      onClick={() => {
            setIsModalOpen(prevState => !prevState)
            resetPushSettings()
         }
      }
   >
      Add Thread
   </Button>
}

export default ThreadsPopupBtn