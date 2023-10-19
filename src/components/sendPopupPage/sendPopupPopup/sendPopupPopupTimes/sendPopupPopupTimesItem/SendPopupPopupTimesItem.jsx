import DateSortItem from '@/components/statisticPage/statisticForm/dateSort/dateSortItem/DateSortItem'
import styles from './SendPopupPopupTimesItem.module.css'

const SendPopupPopupTimesItem = ({label, setSettingsTime, dateHandler, date, minDate = null}) => {

   return <div className={styles.times__item}>
      <DateSortItem
         label={label}
         date={date}
         setDate={dateHandler}
         minDate={minDate}
      />
      {/* <Input 
         className={styles.times__hours}
         placeholder="Enter Time"
         onInput={setSettingsTime}
      /> */}
   </div>
}

export default SendPopupPopupTimesItem