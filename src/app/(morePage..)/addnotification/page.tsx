"use client";

import usePost from "@/app/components/hooks/usePost";
import React, { useState } from "react";

const AddNotification = () => {
  const [title, setTitle] = useState("");
  const [body, setDescription] = useState("");


  const url = process.env.NEXT_PUBLIC_BASE_URL;
 const {add, response, loading }=usePost();
 const data ={
    title:title,
    body:body
 }
  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   add(`${url}/notification`,data,false)
  }

  return (
    <div dir="rtl" className="bg-white max-w-2xl mx-auto p-6 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-[#0F5BFF] mb-6 text-center">إضافة إشعار جديد</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            عنوان الإشعار
          </label>
          <input
            id="title"
            type="text"
            placeholder="اكتب عنوان الإشعار"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F5BFF]"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            وصف الإشعار
          </label>
          <textarea
            id="description"
            placeholder="اكتب وصف الإشعار هنا..."
            value={body}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#0F5BFF]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0F5BFF] text-white py-2.5 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? "جاري الإرسال..." : "إرسال الإشعار"}
        </button>

        {response && (
          <p className="text-green-600 text-center font-medium mt-3">{response}</p>
        )}
      </form>
    </div>
  );
};

export default AddNotification;
