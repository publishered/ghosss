const SendPopupPopupPreviewClose = ({className, color}) => {
   return <div className={className}>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={12}
         height={12}
         fill="none"
      >
         <rect
            width={1.637}
            height={13.64}
            x={0.415}
            y={1.986}
            fill={color}
            rx={0.818}
            transform="rotate(-45 .415 1.986)"
         />
         <rect
            width={1.637}
            height={13.64}
            x={10.06}
            y={0.828}
            fill={color}
            rx={0.818}
            transform="rotate(45 10.06 .828)"
         />
      </svg>
   </div>
}

export default SendPopupPopupPreviewClose