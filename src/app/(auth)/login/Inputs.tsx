import React from 'react'
interface Props {
    name:string;
    type:string;
    label:string
}
const Input = ({
    type,
    name,
    label
}:Props) => {
  return (
    <input
    type={type}
    name={name}
    placeholder={label}
    className="border-b border-[#0177FB] focus:outline-none focus:border-blue-500 py-2 px-1"
  />
  )
}

export default Input