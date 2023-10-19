import Link from 'next/link'
import styles from './HeaderLoginBtn.module.css'

const HeaderLoginBtn = () => {
   return <Link href="/login" className={styles.login}>
      Login
   </Link>
}

export default HeaderLoginBtn