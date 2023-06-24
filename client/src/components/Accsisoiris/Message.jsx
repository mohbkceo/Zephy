import React from 'react'

function Message({className, bgcolor, text, elemnt, show}) {
  return (
    <div className={`${className} ${show} ${bgcolor}`}>{elemnt} {text}</div>
  )
}

export default Message