import styles from './SendNotificationsTable.module.css'
import SendNotificationsTableItem from './sendNotificationsTableItem/SendNotificationsTableItem'

const items = [
   {
      id: 1, 
      status: true, 
      icon: '/img/push-icons/icon.png', 
      image: '/img/push-images/1.png',
      title: 'Get your welcome bonus now!',
      text: 'Click me and get 100 Free Spins + 100% first deposit bonus!',
   },
   {
      id: 2, 
      status: false, 
      icon: '/img/push-icons/icon.png', 
      image: '/img/push-images/1.png',
      title: 'Get your welcome bonus now!',
      text: 'Click me and get 100 Free Spins + 100% first deposit bonus!',
   }
]

const SendNotificationsTable = ({pushesList, setPushSettings, setIsModalOpen, setPushesList}) => {
   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-title']}>Status</span>
         <span className={styles['table__head-title']}>Icon</span>
         <span className={styles['table__head-title']}>Image</span>
         <span className={styles['table__head-title']}>Title</span>
         <span className={styles['table__head-title']}>Text offer</span>
      </div>
      <div className={styles.table__body}>
         {pushesList?.length ? pushesList.map(item => {

            const timestamp = new Date().getTime()

            const isActive = timestamp > +item.date_from * 1000 && timestamp < +item.date_to * 1000

            return <SendNotificationsTableItem 
               id={item.id}
               status={isActive}
               icon={item.icon_path}
               image={item.banner_path}
               title={item.title}
               text={item.text}
               key={item.id}

               link={item.link}
               threadId={item.thread_id}
               device={item.device}
               countryCode={item.country_code}
               dateFrom={item.date_from}
               dateTo={item.date_to}
               interval={item.interval}

               setPushSettings={setPushSettings}
               setIsModalOpen={setIsModalOpen}

               setPushesList={setPushesList}
            />
         }) 
         
         : ''}
         
      </div> 
   </div>
}

export default SendNotificationsTable