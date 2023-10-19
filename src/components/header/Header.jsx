import useCheckAuth from '@/hooks/useCheckAuth';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../UI/container/Container';
import styles from './Header.module.css';
import HeaderLoginBtn from './headerLoginBtn/HeaderLoginBtn';
import HeaderLogoutBtn from './headerLogoutBtn/HeaderLogoutBtn';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = () => {

   const isAuth = useCheckAuth()

   return <header className={styles.header}>
      <Container>
         <div className={styles.header__inner}>
            <Link className={styles['header__logo']} href='/'>
               <Image className={styles['header__logo-img']} src="/img/logo.svg" width="180" height="43" alt='logotype' />
            </Link>
            {isAuth === true ? <HeaderMenu /> : ''} 
            {isAuth === true ?  <HeaderLogoutBtn /> : <HeaderLoginBtn />}
         </div>
      </Container>
   </header>
}

export default Header

