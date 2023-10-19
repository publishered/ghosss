import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getThreads from '../../../services/threads/getThreads'
import Container from '../UI/container/Container'
import styles from './ThreadsPage.module.css'
import ThreadsPopup from './threadsPopup/ThreadsPopup'
import ThreadsPopupBtn from './threadsPopupBtn/ThreadsPopupBtn'
import ThreadsTable from './threadsTable/ThreadsTable'

const initialState = {
   thread_id: null,
   name: "",
   zipArchive: null,
}


const ThreadsPage = () => {

   const [threadList, setThreadList] = useState([])
   const [isModalOpen, setIsModalOpen] = useState(false)
  
   const [pushSettings, setPushSettings] = useState(initialState)

   const resetPushSettings = () => {
      setPushSettings(initialState)
   }

   useEffect(() => {
      (async () => {

         const cookie = new Cookies()
         const response = await getThreads(cookie.get('auth_token'))

         setThreadList(response)
      })()
   }, [])

   return <section className={styles.notification}>
      <Container>
         <ThreadsPopupBtn 
            setIsModalOpen={setIsModalOpen} 
            resetPushSettings={resetPushSettings}
         />
         <ThreadsTable
            threadList={threadList}
            setPushSettings={setPushSettings}
            setIsModalOpen={setIsModalOpen}
            setThreadList={setThreadList}
         />
         <ThreadsPopup 
            resetPushSettings={resetPushSettings}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setThreadList={setThreadList}
            pushSettings={pushSettings}
            setPushSettings={setPushSettings}
         />
      </Container>
   </section>
}

export default ThreadsPage