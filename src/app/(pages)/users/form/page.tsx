"use client";
import React, { FormEvent } from "react";
import { Input } from "./Inputs";
import { AddUser } from "./AddUser";

const Page = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    AddUser(formData);
  };
  return (
    <div className="container md:w-[50%] bg-white/90 mx-auto px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <h1 className="text-2xl font-semibold text-center text-[#41BC4C]">
          إضافة مستخدم
        </h1>

        <Input type="text" name="name" label=" اسم المستخدم" />
        <Input type="text" name="email" label="الايميل " />
        <Input type="text" name="password" label="الباسورد " />

        <button
          type="submit"
          className="w-full bg-[#41BC4C] text-white font-medium hover:bg-[#37a640] transition duration-200 h-[45px] rounded-xl shadow-md"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default Page;
