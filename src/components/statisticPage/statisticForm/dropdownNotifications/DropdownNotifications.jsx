import Dropdown from '@/components/UI/dropdown/Dropdown'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import getPushes from '../../../../../services/pushes/getPushes'

const DropdownNotifications = ({pushId, setPushId}) => {

   const [notificationsList, setNotificationsList] = useState([])

   useEffect(() => {

      (async () => {

         const cookie = new Cookies()

         const pushes = await getPushes(cookie.get('auth_token'))
         setNotificationsList(pushes.map(push => ({value: push.id, text: push.title})))

      })()
      
   }, [])

   return <Dropdown
      value={pushId}
      onChange={selectId => setPushId(selectId)}

      placeholder={"Message"}
      list={notificationsList}
   />
}

export default DropdownNotifications