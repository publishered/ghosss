import Image from 'next/image'
import { useRef } from 'react'
import styles from './ThreadsPopupUploadZipItem.module.css'

const ThreadsPopupUploadZipItem = ({src, alt, text, onChange}) => {

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
         accept='.zip,.rar'
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
      </button>
   </> 
}

export default ThreadsPopupUploadZipItem