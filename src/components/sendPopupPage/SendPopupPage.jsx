import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getPopups from '../../../services/popups/getPopups'
import Container from '../UI/container/Container'
import styles from './SendPopupPage.module.css'
import SendPopupPopup from './sendPopupPopup/SendPopupPopup'
import SendPopupPopupBtn from './sendPopupPopupBtn/SendPopupPopupBtn'
import SendPopupTable from './sendPopupTable/SendPopupTable'

const initialState = {
   id: null,
   link: "",
   closeButtonColor: "",
   showCloseButtonSec: 0,
   position: null,
   timeAppearance: 0,
   backgroundDarkening: 0,
   device: null,
   countryCode: [],

   showingFrom: null,
   showingTo: null,
   
   banner: null,
   banner_preview: null,
}

const SendPopupPage = () => {


   const [pushSettings, setPushSettings] = useState(initialState)

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [popupsList, setPopupsList] = useState([])

   const resetPushSettings = () => setPushSettings(initialState)

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()
         const pushes = await getPopups(cookie.get('auth_token'))
         setPopupsList(pushes)

      })()
   }, [])

   return <section className={styles.notification}>
      <Container>
         <SendPopupPopupBtn 
            setIsModalOpen={setIsModalOpen} 
            resetPushSettings={resetPushSettings}
         />
         <SendPopupTable 
            popupsList={popupsList}
            setPopupsList={setPopupsList}
            setIsModalOpen={setIsModalOpen}
            setPushSettings={setPushSettings}
         />
         <SendPopupPopup 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            pushSettings={pushSettings}
            setPushSettings={setPushSettings}
            setPopupsList={setPopupsList}
            resetPushSettings={resetPushSettings}
         />
      </Container>
   </section>
}

export default SendPopupPage