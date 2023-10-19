import Input from '@/components/UI/input/Input'
import DateSortItem from '@/components/statisticPage/statisticForm/dateSort/dateSortItem/DateSortItem'
import styles from './SendNotificationPopupTimesItem.module.css'

const SendNotificationPopupTimesItem = ({label, setSettingsTime, dateHandler, date, minDate = null, value = ''}) => {

   return <div className={styles.times__item}>
      <DateSortItem
         label={label}
         date={date}
         setDate={dateHandler}
         minDate={minDate}
      />
      <Input 
         className={styles.times__hours}
         placeholder="Enter Time"
         onInput={setSettingsTime}
         value={value}
      />
   </div>
}

export default SendNotificationPopupTimesItem