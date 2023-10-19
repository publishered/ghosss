import Container from '@/components/UI/container/Container'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getTotalStatistic from '../../../../services/statistic/getTotalStatistic'
import styles from './Statistic.module.css'
import StatisticItem from './statisticItem/StatisticItem'

const Statistic = () => {

   const [totalStatistic, setTotalStatistic] = useState({
      subscribers: 0,
      sends: 0,
      clicks: 0,
      ctr: 0,
      threads: 0,
      messages: 0,
   })

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()
         const response = await getTotalStatistic(cookie.get('auth_token'))
         setTotalStatistic(response)

      })()
   }, [])

   return <section className={styles.statistic}>
      <Container>
         <div className={styles.statistic__inner}>
            <StatisticItem title="Subscribes Total" value={totalStatistic.subscribers} />
            <StatisticItem title="Total Send" value={totalStatistic.sends} />
            <StatisticItem title="Total Clicks" value={totalStatistic.clicks} />
            <StatisticItem title="CTR" value={totalStatistic.ctr} />
            <StatisticItem title="Total Threads" value={totalStatistic.threads} />
            <StatisticItem title="Total Messages" value={totalStatistic.messages} />
         </div>
      </Container>
   </section>
}

export default Statistic