"use client";

import useUpdate from "@/app/components/hooks/useUpdate";
import { withAuth } from "@/app/components/withAuth";
import { X } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import React, { FormEvent, InputHTMLAttributes, useRef, useState } from "react";



const Page: React.FC = () => {
const [password,setPass] = useState<string|null>('');
console.log(password)
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { update, loading,response } = useUpdate();
  const { id } = useParams();
     const data = {
      password:password,
    };
    const returnTo=()=>{
        redirect('/staff')
    }
  const handleSubmit = (e: FormEvent) => {
    
    e.preventDefault();

   
    update(`${url}/employee/${id}/reset-password`, data);
  };
  return (
    <>
      {/* خلفية غامقة */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" />

      {/* صندوق الفورم */}
      <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative"
        >
          {/* زر الإغلاق */}
          <button
            type="button"
         
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="إغلاق"
            onClick={returnTo}
          >
            <X/>
          </button>

          <h2 className="text-xl font-semibold mb-4">نموذج الإدخال</h2>

          <label
            htmlFor="input"
            className="block mb-2 font-medium text-gray-700"
          >
            أدخل القيمة:
          </label>
          <input
            id="input"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
         required 
name="password"
onChange={(e:any)=>setPass(e.target.value)}

         
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "جاري الحفظ..." : "حفظ"}
          </button>

          {response&& <h3 className="text-red-600">{response}</h3>}
        </form>
      </div>
    </>
  );
};

export default withAuth(Page)