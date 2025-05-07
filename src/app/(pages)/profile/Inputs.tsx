import React from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

export const Inputs = ({ name, label, type = "text" }: InputProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <input
        type={type}
        placeholder={label}
        name={name}
        className="border border-blue-200 rounded px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};
