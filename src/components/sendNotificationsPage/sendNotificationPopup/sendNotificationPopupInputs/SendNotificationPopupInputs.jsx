import Dropdown from '@/components/UI/dropdown/Dropdown'
import DropdownCountry from '@/components/UI/dropdownCountry/DropdownCountry'
import Input from '@/components/UI/input/Input'
import Textarea from '@/components/UI/textarea/Textarea'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getThreads from '../../../../../services/threads/getThreads'
import styles from './SendNotificationPopupInputs.module.css'

// const threadList = [
//    {
//       value: "recaptcha",
//       text: "ReCaptcha land"
//    },
//    {
//       value: "freebonus",
//       text: "Free bonus"
//    }
// ]

const devicesList = [
   {
      value: "all-devices",
      text: "All devices"
   },
   {
      value: "pc",
      text: "PC"
   },
   {
      value: "smartphone",
      text: "Smartphone"
   },
   {
      value: "tablet",
      text: "Tablet"
   },
]

const SendNotificationPopupInputs = ({addCountryCode, removeCountryCode, pushSettings, setSettings}) => {

   const [threadList, setThreadList] = useState([])

   useEffect(() => {

      (async () => {

         const cookie = new Cookies()

         const threads = await getThreads(cookie.get('auth_token'))
         setThreadList(threads.map(thread => ({value: thread.thread_id, text: thread.name})))

      })()
      
   }, [])

   return <div className={styles.inputs}>
      <Input
         value={pushSettings.link}
         onInput={e => setSettings("link", e.target.value)}

         className={styles.input}
         placeholder="Enter Link"
      />
      <Input
         value={pushSettings.title}
         onInput={e => setSettings("title", e.target.value)}

         className={styles.input}
         placeholder="Enter Title(Max Length 70 symbols)"
      />
      <Textarea
         value={pushSettings.text}
         onChange={e => setSettings("text", e.target.value)}

         className={styles.textarea}
         placeholder="Enter Text(Max Length 140 symbols)"
      ></Textarea>
      <Dropdown
         value={pushSettings.threadId}
         onChange={selectId => setSettings("threadId", selectId)}

         placeholder={"Thread(Select from the list)"}
         className={styles.dropdown} 
         list={threadList}
      />
      <Dropdown
         value={pushSettings.device}
         onChange={selectId => setSettings("device", selectId)}

         placeholder={"Device(Select from the list)"}
         className={styles.dropdown} 
         list={devicesList}
      />
      <DropdownCountry
         value={pushSettings.countryCode}
         addValue={addCountryCode}
         removeValue={removeCountryCode}

         placeholder={"Country"}
         className={styles.dropdown} 
      />
   </div>
}

export default SendNotificationPopupInputs