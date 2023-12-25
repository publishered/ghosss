import Container from '@/components/UI/container/Container'
import PagePadding from '@/components/UI/pagePadding/PagePadding'
import CountryStatisticTable from '@/components/countryStatisticsPage/countryStatisticTable/CountryStatisticTable'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getSubscribersByCountry from '../../services/statistic/getSubscribersByCountry'

const CountryStatistics = () => {



   const [dataset, setDataset] = useState([])

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()

         let countryDecodeList = await axios.get('/countries/countries.json')
         countryDecodeList = countryDecodeList.data
         let statisticSubByCountries = await getSubscribersByCountry(cookie.get('auth_token'))

         statisticSubByCountries = statisticSubByCountries.map(stats => {
            const findedCountry = countryDecodeList.find(item => item.code === stats.country_code)
            return {country: findedCountry?.name ?? item.code, subscribes: stats.count_subs}
         })

         setDataset(statisticSubByCountries)

      })()
   }, [])

   return <PagePadding>
      <section>
         <Container>
            <CountryStatisticTable dataset={dataset} />
         </Container>
      </section>
   </PagePadding>
}

export default CountryStatistics