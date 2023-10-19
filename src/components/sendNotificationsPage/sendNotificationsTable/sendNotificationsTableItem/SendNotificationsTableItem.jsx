import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie'
import deletePush from '../../../../../services/pushes/deletePush'
import styles from './SendNotificationsTableItem.module.css'

const SendNotificationsTableItem = ({id, link, threadId, device, status, 
   countryCode, icon, image, title, text, dateFrom, dateTo, interval, setPushSettings, setIsModalOpen, setPushesList}) => {

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

   const editHandler = () => {

      const dateFromTimeStampDate = new Date(+dateFrom * 1000);
      dateFromTimeStampDate.setHours(0, 0, 0, 0)

      const dateFromTimeStampDate2 = new Date(+dateFrom * 1000);
      const dateFromTimeStampHour = dateFromTimeStampDate2.getHours()
      const dateFromTimeStampMinute = dateFromTimeStampDate2.getMinutes()

      const dateFromTimeStampHourMinuteStr = `${dateFromTimeStampHour < 10 ? "0" + dateFromTimeStampHour : dateFromTimeStampHour}:${dateFromTimeStampMinute < 10 ?"0" + dateFromTimeStampMinute : dateFromTimeStampMinute}`

      const dateToTimeStampDate = new Date(+dateTo * 1000);
      dateToTimeStampDate.setHours(0, 0, 0, 0)

      const dateToTimeStampDate2 = new Date(+dateTo * 1000);
      const dateToTimeStampHour = dateToTimeStampDate2.getHours()
      const dateToTimeStampMinute = dateToTimeStampDate2.getMinutes()

      const dateToTimeStampHourMinuteStr = `${dateToTimeStampHour < 10 ? "0" + dateToTimeStampHour : dateToTimeStampHour}:${dateToTimeStampMinute < 10 ?"0" + dateToTimeStampMinute : dateToTimeStampMinute}`

      setPushSettings({
         id: id,
         link: link,
         title: title,
         text: text,
         threadId: threadId,
         device: device,
         countryCode: countryCode,

         mailingFrom: dateFromTimeStampDate,
         mailingFromTime: {str: dateFromTimeStampHourMinuteStr, hour: dateFromTimeStampHour, minute: dateFromTimeStampMinute},
         mailingTo: dateToTimeStampDate,
         mailingToTime: {str: dateToTimeStampHourMinuteStr, hour: dateToTimeStampHour, minute: dateToTimeStampMinute},
         
         interval: interval,

         icon: null,
         icon_preview: icon,
         banner: null,
         banner_preview: image,
      })

      setIsModalOpen(true)
   }

   const deleteHandler = async () => {
      const cookie = new Cookies()
      const response = await deletePush(cookie.get('auth_token'), id)

      if (response === 'success') {
         setPushesList(prevState => [...prevState.filter(item => +item.id !== +id)])
      }
   }


   return <div className={styles['table__body-item']}>
      <span 
         className={`${styles['table__body-item--status']} 
         ${status ? styles['table__body-item--active-status'] : styles['table__body-item--stopped-status']}`}
      >
         {status ? 'Active' : 'Stopped'}
      </span>
      <span className={styles['table__body-item--image']}>
         <Image className={styles['table__body-item-icon']} src={icon} width="50" height="50" alt='icon' />
      </span>
      <span className={styles['table__body-item--image']}>
         <Image className={styles['table__body-item-image']} src={image} width="75" height="50" alt='icon' />
      </span>
      <span>{title}</span>
      <span>{text}</span>
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
               onClick={editHandler}
            >
               Edit
            </span>
            <span 
               className={styles['table__body-item-action-delete']}
               onClick={deleteHandler}
            >
               Delete
            </span>
         </div>
      </span>
   </div>
}

export default SendNotificationsTableItem