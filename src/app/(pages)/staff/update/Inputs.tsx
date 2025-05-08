import React from 'react'
interface Props{
    type:string;
    name:string;
    label:string;
}
export const Input = ({
    type,name,label
}:Props) => {
  return (
    <input
    type={type}
   name={name}
    placeholder={label}
    className="w-full border rounded-lg p-2"
  />
  )
}
