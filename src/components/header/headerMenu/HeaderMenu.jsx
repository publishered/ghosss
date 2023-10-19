import { usePathname } from 'next/navigation';
import styles from './HeaderMenu.module.css';
import HeaderMenuItem from './headerMenuItem/HeaderMenuItem';

const HeaderMenu = () => {

   const pathname = usePathname()

   return <ul className={styles.menu}>
      <HeaderMenuItem text="Statistic" href="/statistic" currentPath={pathname} />
      <HeaderMenuItem text="Country statistics" href="/country-statistics" currentPath={pathname} />
      <HeaderMenuItem text="Send Notifications" href="/send-notifications" currentPath={pathname} />
      <HeaderMenuItem text="In-site Push" href="/in-site-push" currentPath={pathname} />
      <HeaderMenuItem text="Threads" href="/threads" currentPath={pathname} />
      <HeaderMenuItem text="Settings" href="/settings" currentPath={pathname} />
   </ul>
}

export default HeaderMenu