import React, { forwardRef } from 'react'

const Note=forwardRef(( {content,initialPosition,...props},ref) =>{
  return (
    <div ref={ref} 
    style={{
      position:"absolute",
      left:`${initialPosition?.x}px`,
      right:`${initialPosition?.y}px`,
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px",
      cursor:"move",
      userSelect:"none",
      width:"100px",
      background:"lightyellow"
    }}
    {...props}> 
        📌{content}
    </div>
  )
}
)
export default Note
