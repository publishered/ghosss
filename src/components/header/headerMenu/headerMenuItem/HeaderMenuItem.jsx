import Link from 'next/link'
import styles from './HeaderMenuItem.module.css'

const HeaderMenuItem = ({text, href, currentPath}) => {
   return <li className={styles.item}>
      <Link 
         className={`${styles.link} ${currentPath === href ? styles.active : ''}`} 
         href={href}
      >
         {text}
      </Link>
   </li>
}

export default HeaderMenuItem