import DateSortItem from './dateSortItem/DateSortItem'

const DateSort = ({fromDate, setFromDate, toDate, setToDate}) => {
   
   return <> 
      <DateSortItem
         label="Stats From:"
         date={fromDate}
         setDate={setFromDate}
         minDate={new Date ("2023-09-1")}
         maxDate={new Date()}
         bottom={true}
      />
      <DateSortItem
         label="Stats To:"
         date={toDate}
         setDate={setToDate}
         minDate={new Date ("2023-09-1")}
         maxDate={new Date()}
         bottom={true}
      />
   </>
}

export default DateSort