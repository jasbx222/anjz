import Pagination from "@/app/components/pageination/Pageination";
import { ItemsTablePropsForPlan } from "@/app/models/types.";
import { PenLine, Trash2, LockIcon, ArrowDownToDot, Eye } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
interface TableProps {
  filterPlan: ItemsTablePropsForPlan[];
}

const TableMobile: React.FC<TableProps> = ({ filterPlan }:TableProps) => {
    
        const searchParams = useSearchParams();
      const router = useRouter();
      const url = process.env.NEXT_PUBLIC_BASE_URL;
    
      const itemsPerPage = 5;
      const currentPage = parseInt(searchParams.get("page") || "1", 10);
    
      if (!Array.isArray(filterPlan)) return null;
    
      const totalPages = Math.ceil(filterPlan.length / itemsPerPage);
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const currentItems = filterPlan.slice(start, end);
    
      const goToPage = (page: number) => {
        router.push(`?page=${page}`);
      };
  return (
    <div className="space-y-4 md:hidden">
        
      {currentItems.map((plan, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow border border-gray-200"
        >
          <div className="mb-2">
            <span className="font-semibold text-gray-700">
              اسم  الباقة :{" "}
            </span>
            {plan.title}
          </div>
          <div className="mb-2">
            <span className={`font-semibold text-gray-700`}>عدد  المشتركين </span>
            {plan.dependents_count}
          </div>
          <div className="mb-2">
            <span className={`font-semibold text-gray-700`}>السعر   </span>
            {plan.price}
          </div>
          <div className="mb-2">
            <span className={`font-semibold text-gray-700`}>الحجم   </span>
            {plan.size}
          </div>
          <div className="flex flex-wrap justify-end gap-2 mt-3">
            <Link href={`/Packages/update/${plan.id}`}>
              <button className="flex items-center gap-1 text-sm bg-[#0177FB] text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
                <PenLine className="w-4 h-4" />
                تعديل
              </button>
            </Link>
                 <Link href={`/planfeature/add/${plan.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-[#F83A26] text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition">
                           <ArrowDownToDot/>
                            اضافة خصائص
                          </button>
                        </Link>
                        <Link href={`/planfeature/show/${plan.id}`}>
                          <button className="flex items-center gap-1 text-sm bg-[#41BC4C] text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition">
                         <Eye/>
                            مشاهده خصائص
                          </button>
                        </Link>
          </div>
        </div>
      ))}
       <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TableMobile;
