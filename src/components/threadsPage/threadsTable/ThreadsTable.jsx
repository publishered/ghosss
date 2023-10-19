import styles from './ThreadsTable.module.css'
import ThreadsTableItem from './threadsTableItem/ThreadsTableItem'

const items = [
   {
      id: 1, 
      name: "Recaptcha", 
      link: '<script type="text/javascript" src="https://ghostly.cc/code/hbsdazrrha5ha3ddf42tambu" async></script>',
   },
   {
      id: 2, 
      name: "Recaptcha", 
      link: '<script type="text/javascript" src="https://ghostly.cc/code/hbsdazrrha5ha3ddf42tambu" async></script>',
   },
]

const ThreadsTable = ({threadList, setPushSettings, setIsModalOpen, setThreadList}) => {

   return <div className={styles.table}>
      <div className={styles.table__head}>
         <span className={styles['table__head-title']}>Name</span>
         <span className={styles['table__head-title']}>Link(For Import)</span>
      </div>
      <div className={styles.table__body}>
         {threadList?.length ? threadList.map(item => (
            <ThreadsTableItem 
               id={item.thread_id}
               name={item.name}
               link={item.import_link}
               key={item.thread_id}
               setPushSettings={setPushSettings}
               setIsModalOpen={setIsModalOpen}
               setThreadList={setThreadList}
            />
         )) 
         
         : ''}
         
      </div> 
   </div>
}

export default ThreadsTable