import styles from './StatisticItem.module.css'

const StatisticItem = ({title, value}) => {
   return <div className={styles.item}>
      <h2 className={styles.item__title}>{title}</h2>
      <div className={styles.item__body}>
         <span>{value}</span>
      </div>
   </div>
}

export default StatisticItem