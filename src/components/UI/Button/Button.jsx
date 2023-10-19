import styles from './Button.module.css'

const Button = ({children, className, onClick, type}) => {
   return <button 
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type='submit'
   >
      {children}
   </button>
}

export default Button