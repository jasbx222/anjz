"use client";
import React, { useState } from "react";
import { ItemsTablePropsForPlan } from "@/app/models/types.";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pageination/Pageination";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { Eye, MoreHorizontal, X } from "lucide-react";

interface TableProps {
  filterPlan: ItemsTablePropsForPlan[];
}

export const Table = ({ filterPlan }: TableProps) => {
  const [selectedPlanId, setSelectedPlanId] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (!Array.isArray(filterPlan)) return null;

  const totalPages = Math.ceil(filterPlan.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filterPlan.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  const closeModal = () => setSelectedPlanId(null);

  return (
    <div
      dir="rtl"
      className="container hidden md:block w-full mx-auto px-4 py-6"
    >
      <div className="flex justify-end mb-4">
  <Link
    href="/addons"
    className="inline-flex items-center gap-2 bg-[#0177FB] text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
  >
  
      <Eye/>
    مشاهدة الاضافات الجديدة  
  </Link>
</div>

      {currentItems.length <= 0 ? (
        <CircleLoadier />
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-2xl shadow-lg">
            <thead className="bg-[#0177FB] h-[60px] text-white">
              <tr className="text-center text-sm sm:text-lg">
                <th className="px-2 py-2">اسم الباقة</th>
                <th className="px-2 py-2">الحجم</th>
                <th className="px-2 py-2">السعر</th>
                <th className="px-2 py-2">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((plan) => (
                <tr
                  key={plan.id}
                  className="hover:bg-gray-100 text-center text-xs sm:text-base"
                >
                  <td className="px-2 py-2">{plan.title}</td>
                  <td className="px-2 py-2">{plan.dependents_count}</td>
                  <td className="px-2 py-2">{plan.price}</td>
                  <td className="px-2 py-2 text-center">
                    <button
                      onClick={() => setSelectedPlanId(plan.id)}
                      className="p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <MoreHorizontal className="w-5 h-5 text-gray-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedPlanId && (
        <div className="fixed inset-0 z-50 bg-[#0000001c] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-sm">
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="text-lg font-semibold">خيارات الباقة</h2>
              <button onClick={closeModal} aria-label="إغلاق">
                <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link
                  href={`/Packages/update/${selectedPlanId}`}
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  تعديل
                </Link>
              </li>
              <li>
                <Link
                  href={`/Packages/show/${selectedPlanId}`}
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  التفاصيل
                </Link>
              </li>
              <li>
                <Link
                  href={`/planfeature/add/${selectedPlanId}`}
                  className="block px-4 py-2 hover:bg-gray-100 transition text-red-600"
                >
                  إضافة خصائص
                </Link>
              </li>
              <li>
                <Link
                  href={`/planfeature/show/${selectedPlanId}`}
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  مشاهدة الخصائص
                </Link>
              </li>
            </ul>
          </div>
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
