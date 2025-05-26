"use client";

import useGet from "@/app/components/hooks/useGet";
import { Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import TableMobile from "./TableMobile";
import { withAuth } from "@/app/components/withAuth";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pageination/Pageination";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
interface Client {
  name: string;
}
interface Message {
  message: string;
}
interface TypeFromTicke {
  id: string;
  client: Client;
  status: string;
  messages: Message[];
}
const Page: React.FC = () => {
  const { data, loading } = useGet<TypeFromTicke>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`
  );
  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (!Array.isArray(data)) return null;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };
  return (
    <div dir="rtl" className="max-w-6xl mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-extrabold mb-8 text-[#0177FB] border-b pb-4 text-right">
        قائمة المشاكل
      </h1>

      {loading ? (
       <CircleLoadier/>
      ) : data?.length > 0 ? (
        <>
          <div className="overflow-x-auto hidden md:block  ">
            <div className="flex justify-start items-center   gap-5">
              <Link href={"/ticket/opened"}>
                <button
                  className={`px-4 py-2 rounded 
          
          bg-green-600 text-white
          `}
                >
                  المفتوحة
                </button>
              </Link>
              <Link href={"/ticket/closed"}>
                <button
                  className={`px-4 py-2 rounded 
          
          bg-red-600 text-white
          `}
                >
                  المغلقة
                </button>
              </Link>
            </div>
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-right text-sm text-gray-600 bg-gray-50">
                  <th className="p-3">اسم العميل</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">أول رسالة</th>
                  <th className="p-3 text-center" colSpan={2}>
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((ticket: any) => (
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

          <TableMobile data={currentItems} />
        </>
      ) : (
        <div className="text-center py-8 text-gray-500 text-sm">
          لا توجد تذاكر حاليًا.
        </div>
      )}
      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default withAuth(Page);
