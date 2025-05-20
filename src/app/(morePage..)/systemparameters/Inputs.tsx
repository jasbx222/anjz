import { AddParamType } from "@/app/models/types.";
import React from "react";

export const Input = ({ label, value, type, onChange }: AddParamType) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label} </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="https://facebook.com/example"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
