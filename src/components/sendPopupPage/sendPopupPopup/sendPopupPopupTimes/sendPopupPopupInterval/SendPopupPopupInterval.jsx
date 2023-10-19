import Input from '@/components/UI/input/Input'
import styles from './SendPopupPopupInterval.module.css'

const SendPopupPopupInterval = ({setSettings, pushSettings}) => {
   return <div className={styles.interval}>
      <span className={styles.interval__label}>
         Distribution interval in hours
      </span>
      <Input 
         className={styles.interval__input}
         placeholder="Enter Time"
         onInput={(e) => setSettings("interval", {...pushSettings.interval, str: e.target.value})}
      />
   </div>
}

export default SendPopupPopupInterval