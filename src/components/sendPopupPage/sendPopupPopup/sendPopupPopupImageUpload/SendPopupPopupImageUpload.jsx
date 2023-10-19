import styles from './SendPopupPopupImageUpload.module.css';
import SendPopupPopupImageUploadItem from './sendPopupPopupImageUploadItem/SendPopupPopupImageUploadItem';

const SendPopupPopupImageUpload = ({setSettings}) => {
   return <div className={styles.inner}>
      <SendPopupPopupImageUploadItem 
         src="/img/icons/upload_icon.svg"
         alt="upload icon"
         text="Select Banner Image"

         onChange={e => setSettings("banner", e.target.files[0])}
      />
   </div>
}

export default SendPopupPopupImageUpload