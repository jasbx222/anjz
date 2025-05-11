import React from "react";
interface Props {
  type: string;
  name: string;
  label: string;
}
export const Input = ({ type, name, label }: Props) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={label}
        name={name}
        className="bg-gray-100 text-gray-700 h-[48px] border border-gray-300 focus:border-[#0177FB] focus:ring-2 focus:ring-[#0177FB]/30 rounded-xl w-full px-4 shadow-sm transition duration-200 ease-in-out outline-none"
      />
    </div>
  );
};
