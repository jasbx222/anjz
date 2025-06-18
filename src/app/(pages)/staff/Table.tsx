"use client";

import { PenLine, Trash2, RefreshCw, LockIcon, Eye } from "lucide-react";
import React, { useState } from "react";
import useGet from "@/app/components/hooks/useGet";
import useDelete, { getDecryptedToken } from "@/app/components/hooks/useDelete";
import Link from "next/link";
import TableMobile from "./TableMobile";
import Pagination from "@/app/components/pageination/Pageination";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Empolyes } from "@/app/models/types.";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { toast } from "react-toastify";

export const Table = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useGet<Empolyes>(`${url}/employee`);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");
  const [msgStatus, setMsgStatus] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "deactive"
  >("all");
// const route = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const itemsPerPage = 8;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (!Array.isArray(data)) return null;

  // تصفية البيانات حسب البحث والحالة
  const filteredData = data.filter((emp) => {
    const matchesSearch = emp.email
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? emp.is_active
        : !emp.is_active;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredData.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  const { remove, response } = useDelete();
  const [toggleLoading, setToggleLoading] = useState<string | null>(null);

  const handleDelete = (id: string) => {
       if(!id){
        setMsg('هذا المستخدم تم حذفة')
      }

    const deleteUrl = `${url}/employee/${id}`;
    remove(deleteUrl);
  };

  const handleToggleStatus = async (id: string) => {
    try {
      const token =getDecryptedToken()
      if (!token) return;
   
      setToggleLoading(id);
      const res= await fetch(`${url}/employee/${id}/toggle-active`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json; charset=UTF-8",
        },
      });
   if (res.ok) {
    toast('تمت العملية بنجاح');
    setInterval(()=>{
         location.href='/staff'
    },5000)

  } else {
    toast.error('فشل في تنفيذ العملية');
  }
    } catch (error) {
      console.error("فشل التبديل:", error);
    } finally {
      setToggleLoading(null);
    }
  };

  return (
    <div  dir="rtl"  className="bg-[#F5F7FA] p-6 rounded-lg shadow-md w-full">
      {/* بحث + فلاتر */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setStatusFilter("all")}
          className={`px-4 py-2 rounded ${
            statusFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          الكل
        </button>
        <button
          onClick={() => setStatusFilter("active")}
          className={`px-4 py-2 rounded ${
            statusFilter === "active"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          النشطون
        </button>
        <button
          onClick={() => setStatusFilter("deactive")}
          className={`px-4 py-2 rounded ${
            statusFilter === "deactive"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          غير النشطين
        </button>
      </div>
      {loading && (
        <CircleLoadier/>
      )}

      {!loading && (
        <>
          {currentItems.length === 0 ? (
            <div className="text-center text-gray-600">لا توجد نتائج.</div>
          ) : (
            <div className="overflow-x-auto">
              {/* Desktop View */}
              <table className="min-w-full hidden md:table bg-white border border-[#C9D3DF] rounded-lg shadow-sm">
                <thead className="bg-[#0177FB] text-white text-sm">
                  <tr>
                    <th className="py-3 px-4 text-right">البريد الإلكتروني</th>
                    <th className="py-3 px-4 text-right">عدد الصلاحيات </th>
                    <th className="py-3 px-4 text-right">نشط</th>
                    <th className="py-3 px-4 text-right">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((emp) => (
                    <tr key={emp.id} className="border-t border-[#E2E8F0]">
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {emp.email}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {emp.roles.length}
                      </td>
                      <td
                        className={`py-3 px-4 text-sm font-semibold ${
                          emp.is_active ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {emp.is_active ? "نشط" : "غير نشط"}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 flex flex-wrap gap-2">
                        <Link href={`/staff/update/${emp.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-[#0177FB] text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                            <PenLine className="w-4 h-4" />
                            تعديل
                          </button>
                        </Link>

                        <button
                          onClick={() => handleToggleStatus(emp.id)}
                          disabled={toggleLoading === emp.id}
                          className="flex items-center gap-1 text-sm bg-yellow-500 text-white px-4 py-1.5 rounded-full hover:bg-yellow-600 transition"
                        >
                          {toggleLoading === emp.id ? (
                            <RefreshCw className="animate-spin w-4 h-4" />
                          ) : (
                            <span>{emp.is_active ? "تعطيل" : "تفعيل"}</span>
                          )}
                        </button>

                        <button
                          onClick={() => handleDelete(emp.id)}
                          className="flex items-center gap-1 text-sm bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          حذف
                        </button>
                        {msg && msg}
                        <Link href={`/staff/show/${emp.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition">
                            <Eye className="w-4 h-4" />
                            استعراض
                          </button>
                        </Link>

                        <Link href={`/staff/reset/${emp.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
                            <LockIcon className="w-4 h-4" />
                            تغيير كلمة السر
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile View */}
              <TableMobile
                filteredEmployees={currentItems}
                onDelete={handleDelete}
                onToggleStatus={handleToggleStatus}
                toggleLoading={toggleLoading}
              />
            </div>
          )}

          {response && (
            <div className="mt-4 text-green-600 text-center font-medium">
              {response}
            </div>
          )}
        </>
      )}

      {currentItems.length > 0 && (
        <Pagination
          goToPage={goToPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
