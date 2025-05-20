'use client'
import React from 'react'
interface Props {
    name:string;
    type:string;
    label:string;
   value:string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
    type,
    name,
    label,
    onChange,
    value
}:Props) => {
  return (
    <input
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={label}
    className="border-b border-[#0177FB] focus:outline-none focus:border-blue-500 py-2 px-1"
  />
  )
}

export default Input