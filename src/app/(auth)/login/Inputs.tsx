'use client';
import React from 'react';

interface Props {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, label, onChange, value }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={`أدخل ${label.toLowerCase()}`}
        className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 py-2 px-3 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm"
      />
    </div>
  );
};

export default Input;
