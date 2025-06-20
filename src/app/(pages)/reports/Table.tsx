"use client";
import useGet from "@/app/components/hooks/useGet";
import Pagination from "@/app/components/pageination/Pageination";
import LoadingThreeDotsJumping from "@/app/components/ui/Loading";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
// import { SearchPlan } from "../Packages/Add";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { SearchInput } from "../Packages/Add";
import ForMobilePlans from "./ForMobileReports";
export const Table = () => {
  const [query, setQuery] = useState("");
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data } = useGet<any>(`${url}/plan`);

  const filterPlan = data.filter((plan) =>
    plan.title.toLowerCase().includes(query.toLowerCase())
  );

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
    <div
      dir="rtl"
      className="container  w-full mx-auto px-4 py-12"
    >
      <SearchInput
      placeholder="ابحث عن باقة"
        onChange={(e: any) => setQuery(e.target.value)}
        value={query}
      />

      {currentItems.length <= 0 ? (
     <CircleLoadier/>
      ) : (
        <div className="w-full hidden md:block overflow-x-auto">
          <table className=" w-full border border-gray-300 rounded-2xl shadow-lg">
            <thead className="bg-[#0177FB] h-[60px] text-white">
              <tr className="text-center text-lg sm:text-xl">
                <th className="px-4 py-2">اسم الباقة</th>
                <th className="px-4 py-2">عدد المشتركين</th>
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
                        <Link href={`/reports/show/${plan.id}`}>
                          <button className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                            تقرير الباقة
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
      <ForMobilePlans currentItems={ currentItems}/>
      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
