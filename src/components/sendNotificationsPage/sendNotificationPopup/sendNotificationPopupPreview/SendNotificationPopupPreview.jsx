import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './SendNotificationPopupPreview.module.css'

const SendNotificationPopupPreview = ({pushSettings}) => {

   const [previewIcon, setPreviewIcon] = useState(null)
   const [previewBanner, setPreviewBanner] = useState(null)

   useEffect(() => {
      if (!pushSettings.icon) return

      const objectUrl = URL.createObjectURL(pushSettings.icon)
      setPreviewIcon(objectUrl)

      console.log(objectUrl)
   
      return () => URL.revokeObjectURL(objectUrl)
   }, [pushSettings.icon])

   useEffect(() => {
      if (!pushSettings.banner) return
       
      const objectUrl = URL.createObjectURL(pushSettings.banner)
      setPreviewBanner(objectUrl)
   
      return () => URL.revokeObjectURL(objectUrl)
   }, [pushSettings.banner])

   let previewIconDraw = previewIcon
   let previewBannerDraw = previewBanner

   if (!previewIconDraw && pushSettings.icon_preview) {
      previewIconDraw = pushSettings.icon_preview
   }

   if (!previewBannerDraw && pushSettings.banner_preview) {
      previewBannerDraw = pushSettings.banner_preview
   }

   return <div className={styles.preview}>
      <div className={styles.preview__push}>
         <div 
            className={styles['preview__push-banner']}
            style={previewBannerDraw ? {backgroundImage: `url(${previewBannerDraw})`} : {background: "var(--ui-color)"}}
         >

         </div>
         <div className={styles['preview__push-body']}>
            <div 
               className={styles['preview__push-icon']}
               style={previewIconDraw ? {backgroundImage: `url(${(previewIconDraw)})`} : {background: "var(--ui-color)"}}
            >
            </div>
            <div className={styles['preview__push-inner']}>
               <div className={styles['preview__push-top']}>
                  <h2 className={styles['preview__push-title']}>{pushSettings.title ? pushSettings.title : "Example"}</h2>
                  <p className={styles['preview__push-text']}>{pushSettings.text ? pushSettings.text : "Example"}</p>
               </div>
               <span className={styles['preview__push-subtext']}>Google Chrome • google.com</span>
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

export default SendNotificationPopupPreview