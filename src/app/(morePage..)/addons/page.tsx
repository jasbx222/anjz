"use client";
import useGet from "@/app/components/hooks/useGet";
import { withAuth } from "@/app/components/withAuth";
import { url } from "@/app/models/types.";
import React from "react";

interface AddOne{
  id:number;
  type:string;
  storage_limit:string;
  users_count:string|null;
  monthly_price:string
}

function Page() {
  const {data:addonsData,loading } =useGet<AddOne>(`${url}/add-on`)

  if(loading) return <div>loading ...</div>
  return (
    <div className="container mx-auto px-6 py-10" dir="rtl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        جدول الإضافات
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
        <table className="min-w-full text-sm bg-white rounded-2xl">
          <thead className="bg-gradient-to-l from-blue-600 to-blue-400 text-white">
            <tr>
              <th className="px-6 py-4 text-right font-semibold">#</th>
              <th className="px-6 py-4 text-right font-semibold">النوع</th>
              <th className="px-6 py-4 text-right font-semibold">عدد المستخدمين</th>
              <th className="px-6 py-4 text-right font-semibold">المساحة الإضافية</th>
              <th className="px-6 py-4 text-right font-semibold">السعر الشهري</th>
            </tr>
          </thead>
          <tbody>
            {addonsData?.map((addon, index) => (
              <tr
                key={addon?.id}
                className="text-gray-700 text-center  hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      addon?.type === "extra_user"
                        ? "bg-purple-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {addon.type === "extra_user"
                      ? "مستخدم إضافي"
                      : "مساحة إضافية"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {addon?.users_count ? addon.users_count : "-"}
                </td>
                <td className="px-6 py-4">
                  {addon?.storage_limit ? addon?.storage_limit : "-"}
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">
                  {Number(addon.monthly_price).toLocaleString()} د.ع
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(Page);
