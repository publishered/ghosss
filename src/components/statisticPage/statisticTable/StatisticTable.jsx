import styles from './StatisticTable.module.css';

const StatisticTable = ({dataset}) => {


   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-title']}>Data</span>
         <span className={styles['table__head-title']}>Transitions</span>
         <span className={styles['table__head-title']}>Subscribes</span>
         <span className={styles['table__head-title']}>UnSubscribes</span>
         <span className={styles['table__head-title']}>Sended</span>
         <span className={styles['table__head-title']}>Clicks</span>
         <span className={styles['table__head-title']}>CR Subscribes</span>
         <span className={styles['table__head-title']}>CTR Clicks</span>
      </div>
      <div className={styles.table__body}>
         {dataset.length ? dataset.map((item, index) => {

         const date = new Date(item.data)

         return <div className={styles['table__body-item']} key={index}>
            <span>
               {date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}
               .{date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}
               .{date.getFullYear()}
            </span>
            <span>{item.transitions}</span>
            <span>{item.subscribes}</span>
            <span>{item.unsubscribes}</span>
            <span>{item.sended}</span>
            <span>{item.clicks}</span>
            <span>{item.cr}</span>
            <span>{item.ctr}</span>
         </div>
         }) : ''}
         
      </div> 
   </div>
}

export default StatisticTable