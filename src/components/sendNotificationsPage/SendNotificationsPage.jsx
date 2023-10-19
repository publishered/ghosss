import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getPushes from '../../../services/pushes/getPushes'
import Container from '../UI/container/Container'
import styles from './SendNotificationsPage.module.css'
import SendNotificationPopup from './sendNotificationPopup/SendNotificationPopup'
import SendNotificationsPopupBtn from './sendNotificationsPopupBtn/SendNotificationsPopupBtn'
import SendNotificationsTable from './sendNotificationsTable/SendNotificationsTable'

const initialState = {
   id: null,
   link: "",
   title: "",
   text: "",
   threadId: null,
   device: null,
   countryCode: [],

   mailingFrom: null,
   mailingFromTime: {str: "", hour: 0, minute: 0},
   mailingTo: null,
   mailingToTime: {str: "", hour: 0, minute: 0},
   
   interval: 0,

   icon: null,
   icon_preview: null,
   banner_preview: null,
}

const SendNotificationsPage = () => {

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [pushSettings, setPushSettings] = useState(initialState)

   const [pushesList, setPushesList] = useState([])

   const resetPushSettings = () => setPushSettings(initialState)

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()
         const pushes = await getPushes(cookie.get('auth_token'))
         setPushesList(pushes)

      })()
   }, [])

   return <section className={styles.notification}>
      <Container>
         <SendNotificationsPopupBtn 
            setIsModalOpen={setIsModalOpen}
            resetPushSettings={resetPushSettings}
         />
         <SendNotificationsTable
            setPushSettings={setPushSettings}
            pushesList={pushesList}
            setIsModalOpen={setIsModalOpen}
            setPushesList={setPushesList}
         />
         <SendNotificationPopup 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            pushSettings={pushSettings}
            setPushSettings={setPushSettings}
            setPushesList={setPushesList}
            resetPushSettings={resetPushSettings}
         />
      </Container>
   </section>
}

export default SendNotificationsPage