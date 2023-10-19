import styles from './Chart.module.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

import Container from '@/components/UI/container/Container'

import { Poppins } from 'next/font/google'

import {
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LineElement,
   LinearScale,
   PointElement,
   Title,
   Tooltip,
} from 'chart.js'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Cookies from 'universal-cookie'
import getStatisticForChart from '../../../../services/statistic/getStatisticForChart'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom',
         labels: {
            padding: 30,
            color: '#fff',
            font: {
               family: poppins.style.fontFamily,
               weight: '600',
               size: 14,
            }
         }
		},
		title: {
			display: true,
			text: 'Total statistic by day',
			font: {
				family: poppins.style.fontFamily,
				size: 22,
				weight: 'bold',
			},
		},
	},
	scales: {
		x: {
         display: false,
			border: {
				display: false,
			},
			grid: {
            display: false
			},
		},
		y: {
			border: {
				display: false,
			},
			grid: {
				color: '#FFF',
			},
         ticks: {
            color: '#fff',
            font: {
               family: poppins.style.fontFamily,
               size: 14,
            },
            padding: 20,
         }
		},
	},
   layout: {
      padding: 15,
   },
}

const labels = getDatesFromLastMonth().map(date => {
	const formattedDate =
		date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const formattedMonth =
		date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()

	return `${formattedDate}.${formattedMonth}.${date.getFullYear()}`
})

function getDatesFromLastMonth() {
	const today = new Date()
	const lastMonth = new Date(today)
	lastMonth.setMonth(today.getMonth() - 1)

	const datesArray = []

	while (lastMonth <= today) {
		datesArray.push(new Date(lastMonth))
		lastMonth.setDate(lastMonth.getDate() + 1)
	}

	return datesArray
}

const Chart = () => {

   const [statisticData, setStatisticData] = useState({
      transitions: 0,
      subscribers: 0,
      unsubscribers: 0,
      sended: 0,
      clicks: 0,
      cr: 0,
      ctr: 0,
   })

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()
         const response = await getStatisticForChart(cookie.get('auth_token'))

         setStatisticData(response)

      })()

   }, [])

   console.log(statisticData)

   const data = {
      labels: statisticData.labels,
      datasets: [
         {
            label: 'Transitions',
            data: statisticData.transitions,
            borderColor: '#3B82F6',
         },
         {
            label: 'Subscribes',
            data: statisticData.subscribers,
            borderColor: '#2EFF81',
         },
         {
            label: 'UnSubscribes',
            data: statisticData.unsubscribers,
            borderColor: '#C7485D',
         },
         {
            label: 'Sended',
            data: statisticData.sended,
            borderColor: '#F67E3B',
         },
         {
            label: 'Clicks',
            data: statisticData.clicks,
            borderColor: '#C53BF6',
         },
         {
            label: 'CR Subscribes',
            data: statisticData.cr,
            borderColor: '#3BF6C9',
         },
         {
            label: 'CTR Clicks',
            data: statisticData.ctr,
            borderColor: '#F63B7E',
         },
      ],
   }

	return (
		<section className={styles.chart}>
			<Container>
				<div className={styles.chart__inner}>
					<Line options={options} data={data} />
				</div>
			</Container>
		</section>
	)
}

export default Chart
