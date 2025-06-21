"use client";
import React from "react";
import Link from "next/link";
import { SearchInput } from "../Packages/Add";

interface Props {
  currentItems: any[];
  q:string ;
 setQ?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ForMobilePayments: React.FC<Props> = ({ currentItems,q,setQ }) => {
  return (
    <div className="grid gap-4 md:hidden">
          <SearchInput
              placeholder="ابحث عن اسم العميل"
                onChange={setQ}
                value={q}
              />
      {currentItems.map((pay, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-xl shadow p-4"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-semibold">اسم العميل:</span>
            <span>{pay.client?.name}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-semibold">نوع الاشتراك:</span>
            <span>{pay.subscription?.type}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 font-semibold">عنوان الخطة:</span>
            <span>{pay.subscription?.plan?.title}</span>
          </div>
          <Link href={`/payment/show/${pay.id}`}>
            <button className="bg-[#41BC4C] w-full text-white py-2 rounded-lg">
              تفاصيل الدفعة
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ForMobilePayments;
