import { Plus, Search, X } from "lucide-react";
import Link from "next/link";
import { Table } from "./Table";
import { Suspense } from "react";

export default function Page() {
  return (
    <div dir="rtl" className="relative mt-10 container w-[100%] px-4 lg:px-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <Link href="/staff/add">
          <button className="bg-[#41BC4C] text-white flex justify-center items-center p-4 rounded w-[150px] text-center shadow-md hover:bg-green-600 transition z-50">
            اضافة موظف
            <Plus className="ml-2" />
          </button>
        </Link>
      </div>
  <Suspense fallback={<div></div>}>
        <Table />
  </Suspense>
    </div>
  );
}
