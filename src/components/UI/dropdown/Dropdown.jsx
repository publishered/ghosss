import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = ({list, className, selectedFirst, placeholder, onChange, value = null}) => {

   const listRef = useRef()
   const currentValueRef = useRef()

   const [selectedValue, setSelectedValue] = useState(selectedFirst ? list[0] : null)
   const [listHeight, setListHeight] = useState(listRef?.current?.clientHeight)
   const [currentValueHeight, setCurrentValueHeight] = useState(listRef?.current?.clientHeight)

   const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
      if (value) {
         setSelectedValue(list.find(item => item.value === value))
      }
   }, [value, list])
   


   useEffect(() => {
      setListHeight(listRef.current.clientHeight)
   }, [isOpen])

   useEffect(() => {
      setCurrentValueHeight(currentValueRef.current.clientHeight)
   }, [])

   const filtered = list.filter(item => selectedValue ? item.value !== selectedValue.value : item)

   const selectValueHandler = (item) => {
      setSelectedValue(item)
      onChange(item.value)
   }
   
   const items = filtered.map((item, index) =>(
      <li onClick={() => selectValueHandler(item)} className={styles.dropdown__item} key={index}>
         {item.text}
      </li>
   ))

   return <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
      <div 
         className={styles.dropdown__border}
         style={{height: isOpen ? `${currentValueHeight + listHeight + 10}px` : `${currentValueHeight}px`}}
      ></div>
      <span ref={currentValueRef} className={`${styles.dropdown__current} ${!selectedValue ? styles.placeholder : ''} ${className}`}>
         {selectedValue ? selectedValue.text : placeholder}
      </span>
      <ul className={`${styles.dropdown__list} ${isOpen ? styles.open : ''}`} ref={listRef}>
         {list ? items : ''}
      </ul>
   </div>
}

export default Dropdown