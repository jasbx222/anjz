import { PenLine, Trash2, RefreshCw, BrushCleaning } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  currentItems: {
    id: string;
    title: string;
    description: string;
  }[];  handleDelete: (id: string) => void;
};

const TableMobile: React.FC<Props> = ({ currentItems ,handleDelete}) => {
  return (
    <div dir="rtl" className="space-y-4 md:hidden">
      {currentItems.map((faq, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow border border-gray-200"
        >
          <div className="mb-2">
            <span className="font-semibold text-gray-700">
               العنوان :{" "}
            </span>
            {faq.title}
          </div>
          <div className="mb-2">
            <span className={`font-semibold text-gray-700  `}>الوصف: </span>
            {faq.description}
          </div>
          <div className="flex flex-wrap justify-end gap-2 mt-3">
            <Link href={`/faq/update/${faq.id}`}>
              <button className="flex items-center gap-1 text-sm bg-[#0177FB] text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
                <PenLine className="w-4 h-4" />
                تعديل
              </button>
            </Link>

            <button  onClick={() => handleDelete(faq.id)} className="flex items-center gap-1 text-sm bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition">
              <Trash2 color="#fff" className="w-4 h-4" />
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMobile;
