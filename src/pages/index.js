import PagePadding from '@/components/UI/pagePadding/PagePadding'
import Chart from '@/components/homePage/chart/Chart'
import Statistic from '@/components/homePage/statistic/Statistic'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Ghostly</title>
        <meta name="description" content="Ghostly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PagePadding>
         <Statistic />
         <Chart />
      </PagePadding>
    </>
  )
}
