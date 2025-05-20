'use client'
import Link from 'next/link';
import { useState } from 'react';
export const Add = () => {
 const [query,setQ]=useState('');



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        {/* زر إضافة باقة */}
        <div className="flex justify-center md:justify-start w-full">
       <Link href={'/users/form'}>
          <button className="bg-[#fb0101b4] text-white px-6 py-3 rounded-lg w-full md:w-auto">
            إضافة مستخدم جديد
          </button>
          </Link>
        </div>
      
      </div>
    </div>
  );
};
