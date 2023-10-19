import styles from './PagePadding.module.css'

const PagePadding = ({children}) => {
   return <div className={styles.wrapper}>
      {children}
   </div>
}

export default PagePadding