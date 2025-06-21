import React from 'react';
import Link from 'next/link';
import { Coupon } from '@/app/models/types.';

interface Props {
  currentItems: Coupon[];
}

const ForMobileCards: React.FC<Props> = ({ currentItems }) => {
  return (
    <div className="grid gap-4  md:hidden">
      {currentItems.map((coupon, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow p-4"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-semibold">الكود:</span>
            <span className="text-black">{coupon?.code}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 font-semibold">القيمة:</span>
            <span className="text-black">{coupon?.value}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 font-semibold">حد الاستخدام:</span>
            <span className="text-black">{coupon?.total_used}</span>
          </div>
          <Link href={`/coupon/show/${coupon?.id}`}>
            <button className="bg-[#41BC4C] w-full text-white py-2 rounded-lg">
              تفاصيل الكوبون
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ForMobileCards;
