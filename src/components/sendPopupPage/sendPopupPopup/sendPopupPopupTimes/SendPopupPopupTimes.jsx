import styles from './SendPopupPopupTimes.module.css'
import SendPopupPopupTimesItem from './sendPopupPopupTimesItem/SendPopupPopupTimesItem'

const SendPopupPopupTimes = ({pushSettings, setSettings}) => {

   return <div className={styles.times}>
      <SendPopupPopupTimesItem
         label={"Showing From"}
         setSettingsDate={setSettings}
         pushSettings={pushSettings}
         minDate={new Date()}
         dateHandler={date => setSettings("showingFrom", date)}
         date={pushSettings.showingFrom}
      />
      <SendPopupPopupTimesItem
         label={"Showing To"}
         setSettingsDate={setSettings}
         pushSettings={pushSettings}
         dateHandler={date => setSettings("showingTo", date)}
         date={pushSettings.showingTo}
      />
   </div>
}

export default SendPopupPopupTimes