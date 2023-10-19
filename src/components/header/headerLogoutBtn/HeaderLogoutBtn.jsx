import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import styles from './HeaderLogoutBtn.module.css'

const cookies = new Cookies()

const HeaderLogoutBtn = () => {

   const {push} = useRouter()

   const logoutHandler = () => {
      cookies.remove('auth_token')
      push('/login')
   }

   return <button 
      type='button' 
      onClick={logoutHandler} 
      className={styles.logout}
   >
      Logout
   </button>
}

export default HeaderLogoutBtn