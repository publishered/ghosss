import styles from './Textarea.module.css'

const Textarea = ({onChange, placeholder, className, children, value}) => {
   return <textarea 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.textarea} ${className}`}>
         {children}
   </textarea>
}

export default Textarea