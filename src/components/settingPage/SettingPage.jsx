import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'universal-cookie'
import getDomainSettings from '../../../services/settings/getDomainSettings'
import setAuthSettings from '../../../services/settings/setAuthSettings'
import setDomainSettings from '../../../services/settings/setDomainSettings'
import styles from './SettingPage.module.css'
import SettingAuthForm from './settingForms/SettingAuthForm'
import SettingDomainForm from './settingForms/SettingDomainForm'


const SettingPage = () => {

   const [domainInfo, setDomainInfo] = useState({
      ssl: '',
      domain: '',
   })

   const [authInfo, setAuthInfo] = useState({
      username: '',
      password: '',
   })

   useEffect(() => {
      (async () => {
         const cookie = new Cookies()
         setDomainInfo(await getDomainSettings(cookie.get('auth_token')))

      })()
   }, [])

   const domainFormSubmit = async (e) => {

      e.preventDefault()

      const cookie = new Cookies

      const response = await setDomainSettings(cookie.get('auth_token'), domainInfo.ssl, domainInfo.domain)

      if (response === 'success') {
         toast.success('Successfully saved!')
      }
   }

   const authFormSubmit = async (e) => {

      e.preventDefault()

      const cookie = new Cookies
      const response = await setAuthSettings(cookie.get('auth_token'), authInfo.username, authInfo.password)

      if (response?.status === "success") {
         toast.success('Successfully saved!')
         cookie.set('auth_token', response.token)
      }
   }

   return <div className={styles.inner}>
      <SettingAuthForm 
         authInfo={authInfo}
         setAuthInfo={setAuthInfo}

         authFormSubmit={authFormSubmit}
      />
      <SettingDomainForm
         domainInfo={domainInfo}
         setDomainInfo={setDomainInfo}
         
         domainFormSubmit={domainFormSubmit}
      />
   </div>   
}

export default SettingPage