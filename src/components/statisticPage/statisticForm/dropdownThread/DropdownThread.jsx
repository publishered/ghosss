import Dropdown from '@/components/UI/dropdown/Dropdown'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getThreads from '../../../../../services/threads/getThreads'

const DropdownThread = ({threadId, setThreadId}) => {

   const [threadList, setThreadList] = useState([])

   useEffect(() => {

      (async () => {

         const cookie = new Cookies()

         const threads = await getThreads(cookie.get('auth_token'))
         setThreadList(threads.map(thread => ({value: thread.thread_id, text: thread.name})))

      })()
      
   }, [])

   return <Dropdown
      value={threadId}
      onChange={selectId => setThreadId(selectId)}

      placeholder={"Thread(Select from the list)"}
      list={threadList}
   />
}

export default DropdownThread