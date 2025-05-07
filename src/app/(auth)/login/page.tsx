"use client";
import React from "react";
import Input from "./Inputs";

const Page = () => {
  return (
    <div className="container max-w-md mx-auto bg-white/90 rounded-3xl  h-[400px] shadow border-2 border-blue-200  p-6 mt-10">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold mt-4">تسجيل الدخول</h2>
      </div>

      <form className="grid grid-cols-1 gap-4 relative top-5">
        <Input label={"الايميل"} type={"email"} name={"email"} />
        <Input label={"الباسورد"} type={"password"} name={"password"} />

        {/* يمكنك إضافة المزيد من الحقول هنا */}
        <button
          type="submit"
          className="bg-[#0177FB] relative top-5 text-white py-2 rounded hover:bg-[#0176fb73] transition"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default Page;
