import styles from './SendPopupTable.module.css'
import SendPopupTableItem from './sendPopupTableItem/SendPopupTableItem'

const items = [
   {
      id: 1, 
      status: true, 
      image: '/img/push-images/1.png',
      link: 'https://vavadapartnecpa.com/?promo=fdf84758-e546-4062-bc78-ad505e802a74&target=register',
   },
   {
      id: 2, 
      status: true, 
      image: '/img/push-images/1.png',
      link: 'https://vavadapartnecpa.com/?promo=fdf84758-e546-4062-bc78-ad505e802a74&target=register',
   },
]

const SendPopupTable = ({popupsList, setPopupsList, setIsModalOpen, setPushSettings}) => {

   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-title']}>Status</span>
         <span className={styles['table__head-title']}>Image</span>
         <span className={styles['table__head-title']}>link</span>
      </div>
      <div className={styles.table__body}>
         {popupsList?.length ? popupsList.map(item => {

            const timestamp = new Date().getTime()
            const isActive = timestamp > +item.dateFrom * 1000 && timestamp < +item.dateTo * 1000

            return <SendPopupTableItem 
               id={item.id}
               status={isActive}
               image={item.bannerPath}
               link={item.link}

               buttonColor={item.buttonColor}
               closeButton={item.closeButton}
               position={item.position}
               timeAppearance={item.timeAppearance}
               darkening={item.darkening}
               device={item.device}
               countryCode={item.countryCode}
               dateFrom={item.dateFrom}
               dateTo={item.dateTo}
               
               key={item.id}

               setIsModalOpen={setIsModalOpen}
               setPushSettings={setPushSettings}
               setPopupsList={setPopupsList}
            />
         }) 
         
         : ''}
         
      </div> 
   </div>
}

export default SendPopupTable