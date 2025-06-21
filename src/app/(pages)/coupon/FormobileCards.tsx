import React, { useState } from 'react';
import Link from 'next/link';
import { Coupon, url } from '@/app/models/types.';
import FormCoupon from './add_new/FormCoupon';
import useGet from '@/app/components/hooks/useGet';

interface Props {
  currentItems: Coupon[];
}

const ForMobileCards: React.FC<Props> = ({ currentItems }) => {
    const [add, setAdd] = useState<boolean>(false);
     const { data,refetch } = useGet<Coupon>(`${url}/coupon`);
  return (
    <div className="grid gap-4  md:hidden">
       <button
          onClick={() => setAdd(!add)}
          className="bg-[#233dcf] w-[40%] mb-5 text-white px-4 py-2 rounded-lg"
        >
          اضافة الكوبون
        </button>
  {add && <FormCoupon refetch={refetch} setAdd={setAdd} add={add} />}

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
