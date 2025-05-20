"use client";

import useGet from "@/app/components/hooks/useGet";
import { Eye, EyeClosed, FolderClosed, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const TicketsTable: React.FC = () => {
  const { data, loading } = useGet<any>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`
  );

  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-xl mt-12 border border-gray-200">
      <h1 className="text-3xl font-extrabold mb-10 text-right text-[#0177FB] border-b pb-4">
        قائمة المشاكل
      </h1>

      {loading ? (
        <div className="text-center text-lg font-medium text-gray-600 py-8">
          جاري التحميل...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-y-3">
            <thead>
              <tr className="text-right text-sm text-gray-600 bg-gray-50">
                <th className="p-3">اسم العميل</th>
                <th className="p-3">الحالة</th>
                <th className="p-3">أول رسالة</th>
                <th className="p-3  text-center">الاجرائات</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data?.map((ticket: any) => (
                  <tr
                    key={ticket.id}
                    className="bg-white shadow-sm hover:shadow-md transition duration-300 rounded-xl"
                  >
                    <td className="p-4">{ticket.client?.name || "-"}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          ticket.status === "opened"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {ticket.status === "opened" ? "مفتوحة" : ticket.status}
                      </span>
                    </td>
                    <td className="p-4 rounded-l-xl text-gray-700">
                      {ticket.messages.length > 0
                        ? ticket.messages[0].message
                        : "لا توجد رسائل"}
                      <span className="text-xl text-black">...</span>
                    </td>
                    <td className="p-4 rounded-l-xl text-gray-700">
             <Link href={`/ticket/replay/${ticket.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition">
                            <MessageCircle className="w-4 h-4" />
                            رد
                          </button>
                        </Link>
                    </td>
                    <td className="p-4 rounded-l-xl text-gray-700">
             <Link href={`/ticket/show/${ticket.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition">
                            <Eye className="w-4 h-4" />
                         تفاصيل
                          </button>
                        </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-6 text-gray-500 text-sm"
                  >
                    لا توجد تذاكر حاليًا.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;
