"use client";
import Pagination from "@/app/components/pageination/Pageination";
import LoadingThreeDotsJumping from "@/app/components/ui/Loading";
import { ItemsTablePropsForPlan } from "@/app/models/types.";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface TableProps {
  filterPlan: ItemsTablePropsForPlan[];

}
export const Table = ({ filterPlan }: TableProps) => {
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
  return (
    <div dir="rtl" className="container hidden md:block w-full mx-auto px-4 py-12">
      {currentItems.length <= 0 ? (
        <LoadingThreeDotsJumping />
      ) : (
        <div className="w-full overflow-x-auto">
          <table className=" w-full border border-gray-300 rounded-2xl shadow-lg">
            <thead className="bg-[#0177FB] h-[60px] text-white">
              <tr className="text-center text-lg sm:text-xl">
                <th className="px-4 py-2">اسم الباقة</th>
                <th className="px-4 py-2">الحجم</th>
                <th className="px-4 py-2">السعر</th>

                <th className="px-4 py-2">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((plan, index) => (
                  <tr
                    key={index}
                    className="  hover:bg-gray-100 text-center text-base sm:text-lg"
                  >
                    <td className="px-4 py-2">{plan.title}</td>
                    <td className="px-4 py-2">{plan.dependents_count}</td>
                    <td className="px-4 py-2">{plan.price}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                        <Link href={`/Packages/update/${plan.id}`}>
                          <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                            تعديل
                          </button>
                        </Link>
                        <Link href={`/Packages/show/${plan.id}`}>
                          <button className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                            التفاصيل
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
