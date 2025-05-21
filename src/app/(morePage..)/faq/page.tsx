'use client'
import { Plus} from "lucide-react";
import Link from "next/link";
import { Table } from "./Table";
import { withAuth } from "@/app/components/withAuth";

 function Page() {
  return (
    <div dir="rtl" className="relative mt-10 container w-[100%] px-4 lg:px-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <Link href="/faq/form">
          <button className="bg-[#41BC4C] text-white flex justify-center items-center p-4 rounded w-[150px] text-center shadow-md hover:bg-green-600 transition z-50">
            اضافة سؤال
            <Plus className="ml-2" />
          </button>
        </Link>
      </div>
      <Table  />
    </div>
  );
}
export default withAuth(Page)