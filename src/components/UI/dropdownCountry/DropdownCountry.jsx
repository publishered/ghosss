import axios from 'axios'
import { useEffect, useState } from 'react'
import DropdownSearch from '../dropdown/DropdownSearch'
import styles from './DropdownCountry.module.css'

const DropdownCountry = ({addValue, removeValue, value = []}) => {
   console.log(value)
   const [countryList, setCountryList] = useState([])

   useEffect(() => {
      (async () => {

         const countries = await axios.get('/countries/countries.json')
         setCountryList(countries.data.map(item => ({text: item.name, value: item.code})))

      })()
   }, [])

   return <div className={styles.dropdown}>
      <DropdownSearch 
         list={countryList}
         addValue={addValue}
         removeValue={removeValue}
         value={value}
      />
   </div>
}

export default DropdownCountry