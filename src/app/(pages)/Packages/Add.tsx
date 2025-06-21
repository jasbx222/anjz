
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
      </div>
    </div>
  );
};


export const SearchInput =({
  onChange,
  value,
  placeholder
}:SerachPlan)=>{
  return (
      <div  className="flex items-center  container w-full md:w-[50%] gap-5 ">
        <label htmlFor=""><Search/>  </label>
          <input
          value={value}
            type="search"
            onChange={onChange}
            placeholder={placeholder}
            className="border  border-gray-300  rounded-lg px-4 py-2 w-full"
          />
        </div>
  )
}