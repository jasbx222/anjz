import { Plus, Search, X } from "lucide-react";
import Link from "next/link";
import { Table } from "./Table";

export default function Page() {
  return (
    <div className="relative mt-10 container w-[100%] px-4 lg:px-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <Link href="/staff/add">
          <button className="bg-[#41BC4C] text-white flex justify-center items-center p-4 rounded w-[150px] text-center shadow-md hover:bg-green-600 transition z-50">
            اضافة موظف
            <Plus className="ml-2" />
          </button>
        </Link>

        <div className="relative w-full sm:w-80">
          <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="ابحث عن موظف..."
            className="w-full py-2 pr-10 pl-4 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F5BFF]"
          />
        </div>
      </div>
      <Table />
    </div>
  );
}
