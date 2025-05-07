import React from 'react';

export const Table = () => {
  return (
    <div className="container w-full mx-auto px-4 py-12">
      <div className="w-full overflow-x-auto">
        <table className=" w-full border border-gray-300 rounded-2xl shadow-lg">
          <thead className="bg-[#0177FB] h-[60px] text-white">
            <tr className="text-center text-lg sm:text-xl">
              <th className="px-4 py-2">اسم المستخدم</th>
              <th className="px-4 py-2">الباقة</th>
             
              <th className="px-4 py-2">الحالة</th>
              <th className="px-4 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {/* صف جدول افتراضي */}
            <tr className="border-b  hover:bg-gray-100 text-center text-base sm:text-lg">
              <td className="px-4 py-2"> jassim </td>
              <td className="px-4 py-2">60 </td>
             
              <td className="px-4 py-2">نشط</td>
              <td className="px-4 py-2">
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg whitespace-nowrap">تعديل</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">حذف</button>
                </div>
              </td>
            </tr>
            {/* أضف المزيد من الصفوف حسب الحاجة */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
