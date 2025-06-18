"use client";
import React, { FormEvent, useState } from "react";
import usePost from "@/app/components/hooks/usePost";
import { withAuth } from "@/app/components/withAuth";
import { Input } from "@/app/(pages)/Packages/form/Inputs";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const [title, setTitle] = useState<string>("");
  const { id } = useParams();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { add, response } = usePost();
  const handleSubmit =async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      title: title,
      plan_id: id,
    };

 await   add(`${url}/plan-feature`, data, false);
    toast('تمت العملية بنجاح');
  };

  return (
    <div
      dir="rtl"
      className="container md:w-[50%] bg-white/90 mx-auto px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center"
    >
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <h1 className="text-2xl font-semibold text-center text-[#41BC4C]">
          إضافة باقة
        </h1>
        {response && <h1 className="text-red-500">{response}</h1>}
        <Input
          type="text"
          value={title ?? ""}
          onChange={(e: any) => setTitle(e.target.value)}
          name="title"
          label="عنوان الباقة"
        />

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

export default withAuth(Page);
