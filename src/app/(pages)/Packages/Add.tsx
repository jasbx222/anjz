import React from 'react';

export const Add = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
        {/* زر إضافة باقة */}
        <div className="flex justify-center md:justify-start w-full">
          <button className="bg-[#fb0101b4] text-white px-6 py-3 rounded-lg w-full md:w-auto">
            إضافة باقة جديدة
          </button>
        </div>

        {/* البحث */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <input
            type="text"
            placeholder="البحث عن باقة"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            بحث
          </button>
        </div>

        {/* التصفية */}
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <option value="">تصفية حسب</option>
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
            <option value="all">الكل</option>
          </select>
          <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            تصفية
          </button>
        </div>
      </div>
    </div>
  );
};
