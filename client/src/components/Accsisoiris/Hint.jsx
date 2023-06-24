import React from 'react'

function Hint({message, className}) {
  return (
    <div className={`${className} right-[-10rem] p-4 rounded-[3px] font-sans font-normal shadow-lg absolute bg-white w-[350px] text-[#0000009a] `}>{message}</div>
  )
}

export default Hint