import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`py-3 px-[50px] rounded-3xl ${className}`}>{text}</button>
  )
}

export default Button