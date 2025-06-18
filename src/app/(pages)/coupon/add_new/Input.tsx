import React from "react";
interface Props {
  value: string;
  type: string;
  placeholder: string;
  required: boolean;
  label:string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ value, type, placeholder, required=true, onChange,label }: Props) => {
  return (
    <div>
      <label className="block  text-sm font-medium text-gray-700 mb-1">
      {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default Input;
