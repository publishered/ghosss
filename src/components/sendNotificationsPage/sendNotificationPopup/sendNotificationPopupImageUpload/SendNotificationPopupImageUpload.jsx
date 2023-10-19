import styles from './SendNotificationPopupImageUpload.module.css';
import SendNotificationPopupImageUploadItem from './sendNotificationPopupImageUploadItem/SendNotificationPopupImageUploadItem';

const SendNotificationPopupImageUpload = ({setSettings}) => {
   return <div className={styles.inner}>
      <SendNotificationPopupImageUploadItem 
         src="/img/icons/upload_icon.svg"
         alt="upload icon"
         text="Select Icon Image"
         size="1:1"

         onChange={e => setSettings("icon", e.target.files[0])}
      />
      <SendNotificationPopupImageUploadItem 
         src="/img/icons/upload_icon.svg"
         alt="upload banner"
         text="Select Banner Image"
         size="2:1"

         onChange={e => setSettings("banner", e.target.files[0])}
      />
   </div>
}

export default SendNotificationPopupImageUpload