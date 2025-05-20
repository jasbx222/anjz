"use client";
import { X } from "lucide-react";
import React, { FormEvent, useState } from "react";
import useUpdate from "@/app/components/hooks/useUpdate";
import { redirect, useParams } from "next/navigation";
import { Input } from "../Input";
const Page = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { update, response, loading } = useUpdate();
  const { id } = useParams();
  const [email, setEmail] = useState<string>("");
  const returnTo = () => {
    redirect("/staff");
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email,
    };

    update(`${url}/employee/${id}`, data);
  };

  return (
    <div className="fixed inset-0 bg-update-staff   bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
          onClick={returnTo}
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-[#0177FB]">تعديل الموظف</h2>
        {response && <h3 className="text-gray-800">{response}</h3>}
        {loading && <h3 className="text-red-500">جاري الارسال..</h3>}
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <Input
              label="عدل الايميل"
              name="email"
              type="email"
              onChanges={(e: any) => setEmail(e.target.value)}
            />

            <button className="w-full bg-[#41BC4C] text-white py-2 rounded-lg hover:bg-green-600 transition">
              حفظ التعديلات
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
