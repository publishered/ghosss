import styles from './CountryStatisticTable.module.css'

const CountryStatisticTable = ({dataset}) => {
   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-title']}>Country</span>
         <span className={styles['table__head-title']}>Subscribes</span>
      </div>
      <div className={styles.table__body}>
         {dataset.length ? dataset.map((item, index) => (
         <div className={styles['table__body-item']} key={index}>
            <span>{item.country}</span>
            <span>{item.subscribes}</span>
         </div>
         )) : ''}
         
      </div> 
   </div>
}

export default CountryStatisticTable