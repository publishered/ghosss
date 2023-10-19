import Dropdown from '@/components/UI/dropdown/Dropdown'
import styles from './DropdownSort.module.css'

const DropdownSort = ({sortType, setSortType}) => {

   const list = [
      {
         value: 'total',
         text: 'Total statistics',
      },
      {
         value: 'landing',
         text: 'Landing pages statistics',
      },
      {
         value: 'message',
         text: 'Message statistics',
      },
   ]

   return <div className={styles.dropdown}>
      <Dropdown selectedFirst={true} list={list} onChange={(value => setSortType(value))}/>
   </div>
}

export default DropdownSort