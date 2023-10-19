import { useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie'
import deleteThreads from '../../../../../services/threads/deleteThreads'
import styles from './ThreadsTableItem.module.css'

const ThreadsTableItem = ({id, name, link, setPushSettings, setIsModalOpen, setThreadList}) => {

   const [isOpenActionMenu, setIsOpenActionMenu] = useState(false)

   const actionMenuRef = useRef(null)
   const actionMenuBtnRef = useRef(null)

   useEffect(() => {
      const handleOutSideClick = (event) => {
         if (!actionMenuRef.current?.contains(event.target) && !actionMenuBtnRef.current?.contains(event.target)) {
            setIsOpenActionMenu(false)
         }
      }

      window.addEventListener("mousedown", handleOutSideClick)

      return () => {
         window.removeEventListener("mousedown", handleOutSideClick)
      }
   }, [actionMenuRef])

   const editItemHandler = () => {
      setPushSettings({
         thread_id: id,
         name,
      })
      setIsModalOpen(true)
   }

   const deleteItemHandler = async () => {
      const cookie = new Cookies()
      const response = await deleteThreads(cookie.get('auth_token'), id)

      if (response === 'success') {
         setThreadList(prevState => [...prevState.filter(item => item.thread_id !== id)])
      }
   }


   return <div className={styles['table__body-item']}>
      <span>{name}</span>
      <span>{link}</span>
      <span className={styles['table__body-item--button']}>
         <button 
            className={`${styles['table__body-item-btn']} ${isOpenActionMenu ? styles['active'] : ''}`}
            onClick={() => setIsOpenActionMenu(!isOpenActionMenu)}
            ref={actionMenuBtnRef}
         >
            <span></span>
            <span></span>
            <span></span>
         </button>
         <div 
            ref={actionMenuRef}
            className={`${styles['table__body-item-action']} ${isOpenActionMenu ? styles['open'] : ''}`}
         >
            <span 
               className={styles['table__body-item-action-edit']}
               onClick={editItemHandler}
            >
               Edit
            </span>
            <span 
               onClick={deleteItemHandler}
               className={styles['table__body-item-action-delete']}
            >
               Delete
            </span>
         </div>
      </span>
   </div>
}

export default ThreadsTableItem