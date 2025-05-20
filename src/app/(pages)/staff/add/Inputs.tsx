'use client'
import React from 'react'
interface Props {
  name: string;
  type: string;
  label: string;
  onChanges?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type,
    onChanges,
    name,
    label
}:Props) => {
  return (
    <input
    onChange={onChanges}
    type={type}
    name={name}
    placeholder={label}
    className="bg-gray-100 px-4 py-2 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#0F5BFF]"
      
    />
  )
}

export default Input