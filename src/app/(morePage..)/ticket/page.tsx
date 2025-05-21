"use client";

import useGet from "@/app/components/hooks/useGet";
import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import TableMobile from "./TableMobile";
import { withAuth } from "@/app/components/withAuth";

const Page: React.FC = () => {
  const { data, loading } = useGet<any>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`
  );

  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-8 text-[#0177FB] border-b pb-4 text-right">
        قائمة المشاكل
      </h1>

      {loading ? (
        <div className="text-center text-lg font-medium text-gray-600 py-8">
          جاري التحميل...
        </div>
      ) : data?.length > 0 ? (
        <>
          
          <div className="overflow-x-auto hidden md:block">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-right text-sm text-gray-600 bg-gray-50">
                  <th className="p-3">اسم العميل</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">أول رسالة</th>
                  <th className="p-3 text-center" colSpan={2}>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ticket: any) => (
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
                            : "bg-gray-100 text-red-600"
                        }`}
                      >
                        {ticket.status === "opened" ? "مفتوحة" : "مغلقة"}
                      
                      </span>
                    </td>
                    <td className="p-4">
                      {ticket.messages[0]?.message || "لا توجد رسائل"}...
                    </td>
                    <td className="p-4">
                      <Link href={`/ticket/replay/${ticket.id}`}>
                        <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
                          <MessageCircle className="w-4 h-4" />
                          رد
                        </button>
                      </Link>
                    </td>
                    <td className="p-4">
                      <Link href={`/ticket/show/${ticket.id}`}>
                        <button className="flex items-center gap-1 text-sm bg-blue-500 text-white px-4 py-1.5 rounded-full hover:bg-blue-600 transition">
                          <Eye className="w-4 h-4" />
                          تفاصيل
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

  
        <TableMobile data={data}/>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500 text-sm">
          لا توجد تذاكر حاليًا.
        </div>
      )}
    </div>
  );
};

export default withAuth(Page)