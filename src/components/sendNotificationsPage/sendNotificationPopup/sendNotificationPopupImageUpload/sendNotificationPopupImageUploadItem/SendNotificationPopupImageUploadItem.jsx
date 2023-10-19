import Image from 'next/image'
import { useRef } from 'react'
import styles from './SendNotificationPopupImageUploadItem.module.css'

const SendNotificationPopupImageUploadItem = ({src, alt, text, size, onChange}) => {

   const inputRef = useRef()

   const openInputHandler = e => {
      e.preventDefault()
      console.log(inputRef.current)
      inputRef.current.click()
   }

   return <>
      <input
         ref={inputRef}
         onChange={onChange}
         className={styles.upload__input}
         type='file'
         accept='image/png, image/jpeg'
      />
      <button 
         className={styles.upload}
         onClick={openInputHandler}
      >
         <Image 
            className={styles.upload__image}
            width={18}
            height={18}
            src={src}
            alt={alt}
         />
         <p className={styles.upload__text}>{text}</p>
         <span className={styles.upload__size}>(Size {size})</span>
      </button>
   </> 
}

export default SendNotificationPopupImageUploadItem