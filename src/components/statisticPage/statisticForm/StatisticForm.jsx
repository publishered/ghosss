import styles from './StatisticForm.module.css'
import DateSort from './dateSort/DateSort'
import DropdownNotifications from './dropdownNotifications/DropdownNotifications'
import DropdownSort from './dropdownSort/DropdownSort'
import DropdownThread from './dropdownThread/DropdownThread'

const StatisticForm = ({threadId, setThreadId, sortType, setSortType, fromDate, setFromDate, toDate, setToDate, pushId, setPushId}) => {
   return <form className={styles.form}> 
      <DropdownSort 
         sortType={sortType}
         setSortType={setSortType}
      />
      {sortType === 'landing'?
         <DropdownThread
            threadId={threadId}
            setThreadId={setThreadId}
         />
      : ''}
      {sortType === 'message'?
         <DropdownNotifications
            pushId={pushId}
            setPushId={setPushId}
         />
      : ''}
      {sortType === 'total' ? <span></span> : ''}
      <DateSort 
         fromDate={fromDate}
         setFromDate={setFromDate}

         toDate={toDate}
         setToDate={setToDate}
      />
      {/* <Button
         className={styles.form__btn}
      >
         Submit
      </Button> */}
   </form>
}

export default StatisticForm