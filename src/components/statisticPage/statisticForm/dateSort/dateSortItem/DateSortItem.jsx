import Calendar from 'react-calendar';
import styles from './DateSortItem.module.css';

import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const formatWeekday = date => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][date.getDay()]

const DateSortItem = ({maxDate, minDate, date, setDate, label, bottom = false}) => {

   const [isOpenCalendar, setIsOpenCalendar] = useState(false)

   const [isClient, setIsClient] = useState(false)
 
   useEffect(() => {
      setIsClient(true)
   }, [])

   const calendarChangeHandler = (date) => {
      setDate(date)
      setIsOpenCalendar(false)
   }

   let dateDay = null
   let dateMonth = null

   if (date) {
      dateDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      dateMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
   }

   return <div className={styles.date__item}>
      <span className={styles['date__item-label']}>{label}</span>
      <div className={styles['date__item-current-inner']}>
         <div className={styles['date__item-current-wrapper']} onClick={() => setIsOpenCalendar(!isOpenCalendar)}>
            <span className={styles['date__item-current']}>{date ? `${dateDay}.${dateMonth}.${date.getFullYear()}` : "Enter date"}</span>
         </div>
         {isClient ? <Calendar
            maxDate={maxDate}
            minDate={minDate}
            className={`${styles.calendar} ${bottom ? styles.bottom : ''} ${isOpenCalendar ? styles.open : ''}`}
            value={date}
            onChange={calendarChangeHandler}
            next2Label={null}
            prev2Label={null}
            locale={"en"}
            formatShortWeekday={(locale, date) => formatWeekday(date)}
         /> : ''}
      </div>
   </div>
}

export default DateSortItem