"use client";
import useGet from "@/app/components/hooks/useGet";
import Pagination from "@/app/components/pageination/Pageination";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { Coupon } from "@/app/models/types.";
import { withAuth } from "@/app/components/withAuth";
// import FormCoupon from "./add_new/Input";
import { SearchInput } from "../Packages/Add";
import FormCoupon from "./add_new/FormCoupon";
import ForMobileCards from "./FormobileCards";

const Page = () => {
  const [add, setAdd] = useState<boolean>(false);
  const [query, setQuery] = useState('');
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data,refetch } = useGet<Coupon>(`${url}/coupon`);

  if (!data) return <CircleLoadier />;

  const filteredCoupons = data.filter((coupon:Coupon) =>
    coupon?.code.toLowerCase().includes(query.toLowerCase())
  );

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCoupons.slice(start, start + itemsPerPage);

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`?${params.toString()}`);
  };

  return (
    <div>
      <SearchInput placeholder="ابحث عن طريق رقم الكود" onChange={(e) => setQuery(e.target.value)} value={query} />
      {add && <FormCoupon refetch={refetch} setAdd={setAdd} add={add} />}

      <div
        dir="rtl"
        className={`container hidden md:block w-full mx-auto px-4 py-12 ${add ? "blur-2xl" : ""}`}
      >
        <button
          onClick={() => setAdd(!add)}
          className="bg-[#41BC4C] mb-5 text-white px-4 py-2 rounded-lg"
        >
          اضافة الكوبون
        </button>

        {currentItems.length === 0 ? (
          <p className="text-center">لا توجد نتائج</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-2xl shadow-lg">
              <thead className="bg-[#0177FB] h-[60px] text-white">
                <tr className="text-center text-lg sm:text-xl">
                  <th className="px-4 py-2">الكود</th>
                  <th className="px-4 py-2">القيمة</th>
                  <th className="px-4 py-2">حد الاستخدام</th>
                  <th className="px-4 py-2">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((coupon, index) => (
                  <tr key={index} className="hover:bg-gray-100 text-center text-base sm:text-lg">
                    <td className="px-4 py-2">{coupon?.code}</td>
                    <td className="px-4 py-2">{coupon?.value}</td>
                    <td className="px-4 py-2">{coupon?.total_used}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                        <Link href={`/coupon/show/${coupon?.id}`}>
                          <button className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg">
                            تفاصيل الكوبون
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
       <ForMobileCards currentItems={currentItems}/>
       
        <Pagination goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default withAuth(Page);
