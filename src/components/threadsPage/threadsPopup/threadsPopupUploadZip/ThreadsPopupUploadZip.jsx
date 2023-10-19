import ThreadsPopupImageUploadItem from './threadPopupUploadZipItem/ThreadsPopupUploadZipItem';
import styles from './ThreadsPopupUploadZip.module.css';

const ThreadsPopupUploadZip = ({setSettings}) => {
   return <div className={styles.inner}>
      <ThreadsPopupImageUploadItem 
         src="/img/icons/upload_icon.svg"
         alt="upload file"
         text="Upload Zip Archive"

         onChange={e => setSettings("zipArchive", e.target.files[0])}
      />
   </div>
}

export default ThreadsPopupUploadZip