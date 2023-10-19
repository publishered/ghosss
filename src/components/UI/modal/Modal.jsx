import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './Modal.module.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const Modal = ({isModalOpen, children, setIsModalOpen, timeout = 500}) => {

   if (typeof window === 'object') {

      return (
         createPortal(
            <CSSTransition
               in={isModalOpen}
               timeout={timeout}
               unmountOnExit
               mountOnEnter
               classNames='modal__animation'
            >
               <div className={`${styles.modal__wrapper} ${poppins.className}`} onClick={() => null}>
                  <div className={styles.modal} onClick={e => e.stopPropagation()}>
                     <Image
                        src="/img/icons/close.svg"
                        width="20"
                        height="20"
                        alt="close popup"
                        className={styles.modal__close}
                        onClick={() => setIsModalOpen(false)}
                     />
                     {children}
                  </div>
               </div>
            </CSSTransition>,
            document.querySelector('#modal')
         )
      )
   }
}

export default Modal