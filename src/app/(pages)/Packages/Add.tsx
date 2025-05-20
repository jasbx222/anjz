
import { SerachPlan } from "@/app/models/types.";
import { Search } from "lucide-react";
import Link from "next/link";
export const Add = () => {
  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
        {/* زر إضافة باقة */}
        <div className="flex justify-center md:justify-start w-full">
          <Link href={"/Packages/form"}>
            <button className="bg-[#fb0101b4]  text-white px-6 py-3 rounded-lg w-full">
              إضافة باقة جديدة
            </button>
          </Link>
        </div>

        {/* البحث */}
      

        {/* التصفية */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <option value="">تصفية حسب</option>
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
            <option value="all">الكل</option>
          </select>
          <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            تصفية
          </button>
        </div> */}
      </div>
    </div>
  );
};


export const SearchPlan =({
  onChange,
  value
}:SerachPlan)=>{
  return (
      <div  className="flex items-center gap-5 w-full">
        <label htmlFor=""><Search/>  </label>
          <input
          value={value}
            type="search"
            onChange={onChange}
            placeholder="البحث عن باقة"
            className="border  border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
  )
}