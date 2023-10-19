import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.css'
import stylesSearch from './DropdownSearch.module.css'

const DropdownSearch = ({list, className, selectedFirst, placeholder, addValue, removeValue, value = null}) => {

   const listRef = useRef()
   const currentValueRef = useRef()
   const currentInputRef = useRef()

   const [selectedValue, setSelectedValue] = useState([])
   const [listHeight, setListHeight] = useState(listRef?.current?.clientHeight)
   const [currentValueHeight, setCurrentValueHeight] = useState(listRef?.current?.clientHeight)

   const [isOpen, setIsOpen] = useState(false)

   const [searchValue, setSearchValue] = useState('')

   useEffect(() => {
      if (value.length && list.length) {
         setSelectedValue(value.map(val => list.find(item => item.value === val)))
      }
   }, [value, list])

   useEffect(() => {
      setListHeight(listRef.current.clientHeight)
   }, [isOpen, searchValue])

   useEffect(() => {
      setCurrentValueHeight(currentInputRef.current.clientHeight)
   }, [selectedValue])

   let filtered = list.filter(item => selectedValue ? item.value !== selectedValue.value : item)

   if (searchValue.trim().length) {
      filtered = filtered.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
   }

   const focusInputHandler = () => {
      setIsOpen(true)
   }

   const selectValueHandler = (item) => {
      setSelectedValue(prevState => [...prevState, item])
      addValue(item.value)
      setSearchValue('')
      setTimeout(() => setIsOpen(false), 10)
   }
   
   const items = filtered.map((item, index) =>(
      <li onClick={() => selectValueHandler(item)} className={styles.dropdown__item} key={index}>
         {item.text}
      </li>
   ))

   const itemClickHandler = clickedItem => {
      setSelectedValue(prevState => [...prevState.filter(item => item.value !== clickedItem.value)])
      removeValue(clickedItem.value)
   }

   return <div className={styles.dropdown}>
      <div
         className={styles.dropdown__border}
         style={{height: isOpen ? `${currentValueHeight + listHeight + 10}px` : `${currentValueHeight}px`}}
      ></div>
      <div 
         className={stylesSearch.dropdown__multiply}
         ref={currentInputRef}
      >
         <input 
            placeholder='Country'
            className={stylesSearch['dropdown__multiply-input']}
            onInput={e => setSearchValue(e.target.value)}
            value={searchValue}
            onFocus={focusInputHandler}
         />
         {selectedValue.map((value, index) => <span
            className={stylesSearch['dropdown__multiply-item']}
            onClick={() => itemClickHandler(value)}
            key={index}
         >
            {value.text}
         </span>
         )}
         
      </div>
      <ul className={`${styles.dropdown__list} ${isOpen ? styles.open : ''} ${styles.search}`} ref={listRef}>
         {list ? items : ''}
      </ul>
   </div>
}

export default DropdownSearch