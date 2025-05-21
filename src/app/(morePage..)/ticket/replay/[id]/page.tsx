"use client";

import usePost from "@/app/components/hooks/usePost";
import { withAuth } from "@/app/components/withAuth";
import { useParams } from "next/navigation";
import React, { useState } from "react";



const Page: React.FC<any> = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const { add, response } = usePost();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ticket_id: id,
      message,
    };

    add(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket`, data, true);
  };
  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
    >
      الرد على التذكرة {id}
      <h2 className="text-2xl font-bold text-right text-[#0177FB] mb-4">
        {response && response}
      </h2>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700 text-right"
        >
          نص الرسالة
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-3 text-right text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="اكتب ردك هنا..."
        ></textarea>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-[#0177FB] text-white rounded-xl hover:bg-blue-600 transition disabled:opacity-50"
        >
          الرد
        </button>
      </div>
    </form>
  );
};

export default withAuth(Page)