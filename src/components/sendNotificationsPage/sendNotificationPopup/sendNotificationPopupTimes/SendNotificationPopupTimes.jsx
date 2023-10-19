import styles from './SendNotificationPopupTimes.module.css'
import SendNotificationPopupInterval from './sendNotificationPopupInterval/SendNotificationPopupInterval'
import SendNotificationPopupTimesItem from './sendNotificationPopupTimesItem/SendNotificationPopupTimesItem'

const SendNotificationPopupTimes = ({pushSettings, setSettings}) => {

   return <div className={styles.times}>
      <SendNotificationPopupTimesItem
         label={"Mailing From (date/time)"}
         setSettingsDate={setSettings}
         setSettingsTime={(e) => setSettings("mailingFromTime", {...pushSettings.mailingFromTime, str: e.target.value})}
         pushSettings={pushSettings}
         minDate={new Date()}
         dateHandler={date => setSettings("mailingFrom", date)}
         date={pushSettings.mailingFrom}
         value={pushSettings.mailingFromTime.str}
      />
      <SendNotificationPopupTimesItem
         label={"Mailing To (date/time)"}
         setSettingsDate={setSettings}
         setSettingsTime={(e) => setSettings("mailingToTime", {...pushSettings.mailingToTime, str: e.target.value})}
         pushSettings={pushSettings}
         dateHandler={date => setSettings("mailingTo", date)}
         date={pushSettings.mailingTo}
         value={pushSettings.mailingToTime.str}
      />
      <SendNotificationPopupInterval
         value={pushSettings.interval}
         setSettings={setSettings}
         pushSettings={pushSettings}
      />
   </div>
}

export default SendNotificationPopupTimes