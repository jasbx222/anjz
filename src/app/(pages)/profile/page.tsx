'use client'
import { withAuth } from "@/app/components/withAuth";
import { Inputs } from "./Inputs";

 function Page() {
  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl container  shadow-md p-6 max-w-4xl mx-auto mt-10 w-full"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">جاسم محمد</h2>
          <p className="text-gray-500">jassim@email.com</p>
          <p className="text-gray-500">078445741747</p>
          <p className="text-gray-500">2025/5/5</p>
        </div>
      </div>

      <div className="grid grid-cols-1  gap-4 w-full">
        <Inputs label="اسم المستخدم" type="text" name="اسم المستخدم" />
        <Inputs label="البريد الالكتروني" type="email" name="البريد الالكتروني" />
        <Inputs label="رقم الجوال" type="text" name="رقم الجوال" />
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-lg shadow-sm">
          حفظ
        </button>
      </div>
    </div>
  );
}
export default withAuth(Page)