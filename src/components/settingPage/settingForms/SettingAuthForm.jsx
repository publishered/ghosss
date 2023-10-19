import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/input/Input'
import styles from './SettingForms.module.css'

const SettingAuthForm = ({authInfo, setAuthInfo, authFormSubmit}) => {
   return <form className={styles.form} onSubmit={authFormSubmit}>
      <h2 className={styles.form__title}>Change auth data</h2>
      <Input 
         value={authInfo.username}
         onInput={(e) => setAuthInfo(prevState => ({...prevState, username: e.target.value}))}
         placeholder="Your New Username"
      />
      <Input 
         value={authInfo.password}
         onInput={(e) => setAuthInfo(prevState => ({...prevState, password: e.target.value}))}
         placeholder="Your New Password"
      />
      <Button type="submit" className={styles.form__btn}>Save</Button>
   </form>
}

export default SettingAuthForm