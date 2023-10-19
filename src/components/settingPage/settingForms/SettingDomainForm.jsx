import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/input/Input'
import styles from './SettingForms.module.css'

const SettingDomainForm = ({domainInfo, setDomainInfo, domainFormSubmit}) => {

   return <form className={styles.form} onSubmit={domainFormSubmit}>
      <h2 className={styles.form__title}>Change domain</h2>
      <Input
         value={domainInfo.ssl}
         onInput={(e) => setDomainInfo(prevState => ({...prevState, ssl: e.target.value}))}
         placeholder="http(s)"
      />
      <Input
         value={domainInfo.domain}
         onInput={(e) => setDomainInfo(prevState => ({...prevState, domain: e.target.value}))}
         placeholder="Your New Domain"
      />
      <Button type="submit" className={styles.form__btn}>Save</Button>
   </form>
}

export default SettingDomainForm