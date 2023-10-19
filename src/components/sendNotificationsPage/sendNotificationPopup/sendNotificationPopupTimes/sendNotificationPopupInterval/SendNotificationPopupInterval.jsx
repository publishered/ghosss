import Input from '@/components/UI/input/Input'
import styles from './SendNotificationPopupInterval.module.css'

const SendNotificationPopupInterval = ({setSettings, pushSettings, value = ''}) => {
   return <div className={styles.interval}>
      <span className={styles.interval__label}>
         Distribution interval in hours
      </span>
      <Input 
         className={styles.interval__input}
         placeholder="Enter Time"
         onInput={(e) => setSettings("interval", e.target.value)}
         value={value}
      />
   </div>
}

export default SendNotificationPopupInterval