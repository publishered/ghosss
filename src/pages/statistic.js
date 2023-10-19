import Container from '@/components/UI/container/Container'
import PagePadding from '@/components/UI/pagePadding/PagePadding'
import StatisticForm from '@/components/statisticPage/statisticForm/StatisticForm'
import StatisticTable from '@/components/statisticPage/statisticTable/StatisticTable'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getStatistic from '../../services/statistic/getStatistic'

const Statistic = () => {

   const [sortType, setSortType] = useState('total')
   const [threadId, setThreadId] = useState(null)
   const [pushId, setPushId] = useState(null)

   const fromDateInitial = new Date()
   fromDateInitial.setHours(0, 0, 0, 0)

   const toDateInitial = new Date()
   toDateInitial.setHours(23, 0, 0, 0)

   const [fromDate, setFromDate] = useState(fromDateInitial)
   const [toDate, setToDate] = useState(toDateInitial)

   const [dataset, setDataset] = useState([])

   useEffect(() => {
      (async () => {
         const cookie = new Cookies()
         const response = await getStatistic(cookie.get('auth_token'), Math.ceil(fromDate.getTime() / 1000), Math.ceil(toDate.getTime() / 1000), 
         sortType === 'landing' ? threadId : '', sortType === 'message' ? pushId : '')
         setDataset(response.reverse())
      })()
   }, [fromDate, toDate, threadId, pushId, sortType])

   return <PagePadding>
      <section>
         <Container>
            <StatisticForm
               setThreadId={setThreadId}
               threadId={threadId}
               sortType={sortType}
               setSortType={setSortType}

               fromDate={fromDate}
               setFromDate={setFromDate}

               toDate={toDate}
               setToDate={setToDate}

               pushId={pushId}
               setPushId={setPushId}
            />
            <StatisticTable dataset={dataset} />
         </Container>
      </section>
   </PagePadding>
}

export default Statistic