"use client";
import useGet from "@/app/components/hooks/useGet";
import Pagination from "@/app/components/pageination/Pageination";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
// import { SearchPlan } from "../Packages/Add";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { PaymentGetAll } from "@/app/models/types.";
import { withAuth } from "@/app/components/withAuth";
import ForMobilePayments from "./ForMobilePayments";
import { SearchInput } from "../Packages/Add";
 const Page = () => {
  const [query, setQuery] = useState("");
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const { data  } = useGet<PaymentGetAll>(`${url}/payment`);
  const filter = data?.filter((pay) =>
    pay?.client.name.toLowerCase().includes(query.toLowerCase())
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (!Array.isArray(filter)) return null;

  const totalPages = Math.ceil(filter.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filter.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };
  if(!data)return null
  return (
    <div>
      
    <div
      dir="rtl"
      className="container w-[100%] hidden md:block  mx-auto px-4 py-12"
    >
      <SearchInput
      placeholder="ابحث عن اسم العميل"
        onChange={(e: any) => setQuery(e.target.value)}
        value={query}
      />

      {currentItems.length <= 0 ? (
     <CircleLoadier/>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className=" w-full border border-gray-300 rounded-2xl shadow-lg">
            <thead className="bg-[#0177FB] h-[60px] text-white">
              <tr className="text-center text-lg sm:text-xl">
                <th className="px-4 py-2">اسم العميل</th>
                <th className="px-4 py-2">نوع الاشتراك </th>
                <th className="px-4 py-2">عنوان الخطة</th>

                <th className="px-4 py-2">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((pay, index) => (
                  <tr
                    key={index}
                    className="  hover:bg-gray-100 text-center text-base sm:text-lg"
                  >
                    <td className="px-4 py-2">{pay.client?.name}</td>
                    <td className="px-4 py-2">{pay.subscription?.type}</td>
                    <td className="px-4 py-2">{pay.subscription?.plan?.title}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                        <Link href={`/payment/show/${pay?.id}`}>
                          <button className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                          تفاصيل الدفعة
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
   
    </div>
       <ForMobilePayments q={query}  setQ={(e:any) => setQuery(e.target.value)}  currentItems={currentItems} />
      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
export default withAuth(Page)