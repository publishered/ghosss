import Dropdown from '@/components/UI/dropdown/Dropdown'
import DropdownCountry from '@/components/UI/dropdownCountry/DropdownCountry'
import Input from '@/components/UI/input/Input'
import styles from './SendPopupPopupInputs.module.css'

const positionList = [
   {
      value: "center",
      text: "Center"
   },
   {
      value: "bottom",
      text: "Bottom"
   },
   {
      value: "above",
      text: "Above"
   },
   {
      value: "right",
      text: "Right"
   },
   {
      value: "left",
      text: "Left"
   }
]

const devicesList = [
   {
      value: "all-devices",
      text: "All devices"
   },
   {
      value: "pc",
      text: "PC"
   },
   {
      value: "smartphone",
      text: "Smartphone"
   },
   {
      value: "tablet",
      text: "Tablet"
   },
]

const SendPopupPopupInputs = ({pushSettings, setSettings, addCountryCode, removeCountryCode}) => {
   return <div className={styles.inputs}>
      <Input
         value={pushSettings.link}
         onInput={e => setSettings("link", e.target.value)}

         className={styles.input}
         placeholder="Enter Link"
      />
      <Input
         value={pushSettings.closeButtonColor}
         onInput={e => setSettings("closeButtonColor", e.target.value)}

         className={styles.input}
         placeholder="Close Button Color(Hex)"
      />
      <Input
         value={pushSettings.showCloseButtonSec ? pushSettings.showCloseButtonSec : ""}
         onInput={e => setSettings("showCloseButtonSec", e.target.value)}

         className={styles.input}
         placeholder="Show Close Button(Seconds)"
      ></Input>
      <Dropdown
         value={pushSettings.position}
         onChange={selectId => setSettings("position", selectId)}

         placeholder={"Pop-up Position"}
         className={styles.dropdown} 
         list={positionList}
      />
      <Input
         value={pushSettings.timeAppearance ? pushSettings.timeAppearance : ""}
         onInput={e => setSettings("timeAppearance", e.target.value)}

         className={styles.input}
         placeholder="Time of Appearance Pop-Up(Seconds)"
      ></Input>
      <Input
         value={pushSettings.backgroundDarkening ? pushSettings.backgroundDarkening : ""}
         onInput={e => setSettings("backgroundDarkening", e.target.value)}

         className={styles.input}
         placeholder="Background darkening(%)"
      ></Input>
      <Dropdown
         value={pushSettings.device}
         onChange={selectId => setSettings("device", selectId)}

         placeholder={"Device(Select from the list)"}
         className={styles.dropdown} 
         list={devicesList}
      />
      <DropdownCountry
         value={pushSettings.countryCode}
         addValue={addCountryCode}
         removeValue={removeCountryCode}

         placeholder={"Country"}
         className={styles.dropdown} 
      />
   </div>
}

export default SendPopupPopupInputs