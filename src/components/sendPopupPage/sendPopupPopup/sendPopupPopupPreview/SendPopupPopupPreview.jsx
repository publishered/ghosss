import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './SendPopupPopupPreview.module.css'
import SendPopupPopupPreviewClose from './sendPopupPopupPreviewClose/SendPopupPopupPreviewClose'

const SendPopupPopupPreview = ({pushSettings}) => {
   
   const [previewBanner, setPreviewBanner] = useState(null)

   useEffect(() => {
      if (!pushSettings.banner) return
       
      const objectUrl = URL.createObjectURL(pushSettings.banner)
      setPreviewBanner(objectUrl)
   
      return () => URL.revokeObjectURL(objectUrl)
   }, [pushSettings.banner])

   let previewBannerDraw = previewBanner

   if (!previewBannerDraw && pushSettings.banner_preview) {
      previewBannerDraw = pushSettings.banner_preview
   }

   return <div className={styles.preview}>
      <div 
         className={styles.preview__popup}
         style={{backgroundColor: `rgba(0, 0, 0, ${pushSettings.backgroundDarkening ? pushSettings.backgroundDarkening / 100 : 0})`}}
      >
         <div className={`${styles['preview__popup-modal']} ${styles[pushSettings.position]}`}>
            <div className={styles['preview__popup-modal-body']}>
               <Image 
                  className={styles['preview__popup-modal-img']}
                  src={previewBannerDraw ? previewBannerDraw : "/img/popup-example.jpg"}
                  alt='close'
                  width="200"
                  height="200"
               />
               <SendPopupPopupPreviewClose
                  className={styles['preview__popup-modal-close']}
                  color={pushSettings.closeButtonColor}
               />
            </div>
         </div>
      </div>
      <div className={styles.preview__panel}>
         <Image
            className={styles['preview__panel-wifi']}
            src="/img/icons/wifi.svg"
            width="24"
            height="24"
            alt='wifi'
         />
         <Image
            className={styles['preview__panel-sound']}
            src="/img/icons/sound.svg"
            width="24"
            height="17"
            alt='sound'
         />
         <span 
            className={styles['preview__panel-date']}
         >
            01:08:41 <br />
            28.08.2023
         </span>
         <Image
            className={styles['preview__panel-message']}
            src="/img/icons/message.svg"
            width="17"
            height="20"
            alt='message'
         />
      </div>
   </div>
}

export default SendPopupPopupPreview