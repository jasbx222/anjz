import React from 'react'
interface Props{
    type:string;
    name:string;
    label:string;
    value:string;
    
      onChanges?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
}
export const Input = ({
    type,name,label,onChanges,value
}:Props) => {
  return (
    <input
    type={type}
   name={name}
   value={value}
   onChange={onChanges}
    placeholder={label}
    className="w-full border rounded-lg p-2"
  />
  )
}
