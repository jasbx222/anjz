"use client";
import useGet from "@/app/components/hooks/useGet";
import Pagination from "@/app/components/pageination/Pageination";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { Coupon } from "@/app/models/types.";
import { withAuth } from "@/app/components/withAuth";
import FormCoupon from "./add_new/page";
const Page = () => {
  const [add, setAdd] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const handleAdd = () => {
    setAdd(!add);
  };
  const { data } = useGet<Coupon>(`${url}/coupon`);
  //   const filter = data?.filter((plan) =>
  //     plan?.clinet?.name.toLowerCase().includes(query.toLowerCase())
  //   );

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

  if (!data) return null;
  return (
    <div>
      {add ? <FormCoupon setAdd={setAdd}  add={add}/> : ""}
      <div
        dir="rtl"
        className={`container w-[100%]  mx-auto px-4 py-12 ${
          add ? " blur-2xl " : ""
        }`}
      >
        <button
          onClick={handleAdd}
          className="bg-[#41BC4C] mb-5 text-white px-4 py-2 rounded-lg whitespace-nowrap"
        >
          اضافة الكوبون
        </button>

        {/* <SearchPlan
        onChange={(e: any) => setQuery(e.target.value)}
        value={query}
      /> */}

        {currentItems.length <= 0 ? (
          <CircleLoadier />
        ) : (
          <div className="w-full overflow-x-auto">
            <table className=" w-full border border-gray-300 rounded-2xl shadow-lg">
              <thead className="bg-[#0177FB] h-[60px] text-white">
                <tr className="text-center text-lg sm:text-xl">
                  <th className="px-4 py-2"> الكود</th>
                  <th className="px-4 py-2">القيمة </th>
                  <th className="px-4 py-2"> حد الاستخدام</th>

                  <th className="px-4 py-2">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {currentItems &&
                  currentItems.map((code, index) => (
                    <tr
                      key={index}
                      className="  hover:bg-gray-100 text-center text-base sm:text-lg"
                    >
                      <td className="px-4 py-2">{code?.code}</td>
                      <td className="px-4 py-2">{code?.value}</td>
                      <td className="px-4 py-2">{code?.total_used}</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                          <Link href={`/coupon/show/${code?.id}`}>
                            <button className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg whitespace-nowrap">
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
        <Pagination
          goToPage={goToPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default withAuth(Page);
