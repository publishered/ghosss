import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie'
import deletePopup from '../../../../../services/popups/deletePopup'
import styles from './SendPopupTableItem.module.css'

const SendPopupTableItem = ({id, status, image, link, setPopupsList, setIsModalOpen, setPushSettings,
   buttonColor, closeButton, position, timeAppearance, darkening, device, countryCode, dateFrom, dateTo}) => {

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

      const showingFromDate = new Date(+dateFrom * 1000);
      const showingToDate = new Date(+dateTo * 1000);

      setPushSettings({
         id: id,
         link: link,
         closeButtonColor: buttonColor,
         showCloseButtonSec: closeButton,
         position: position,
         timeAppearance: timeAppearance,
         backgroundDarkening: darkening,
         device: device,
         countryCode: countryCode,
         showingFrom: showingFromDate,
         showingTo: showingToDate,
         banner: null,
         banner_preview: image,
      })

      setIsModalOpen(true)
   }

   const deleteHandler = async () => {
      const cookie = new Cookies()
      const response = await deletePopup(cookie.get('auth_token'), id)

      if (response === 'success') {
         setPopupsList(prevState => [...prevState.filter(item => +item.id !== +id)])
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
         <Image className={styles['table__body-item--icon']} src={image} width="50" height="50" alt='icon' />
      </span>
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

export default SendPopupTableItem