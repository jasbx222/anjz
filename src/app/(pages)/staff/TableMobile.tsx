import {
  PenLine,
  Trash2,
  RefreshCw,
  BrushCleaning,
  LockIcon,
  Eye,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  filteredEmployees: {
    id: string;
    email: string;
    is_active: boolean;
  }[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string) => void;
  toggleLoading: string | null;
};

const TableMobile: React.FC<Props> = ({
  filteredEmployees,
  onDelete,
  onToggleStatus,
  toggleLoading,
}) => {
  return (
    <div dir="rtl" className="space-y-4 md:hidden">
      {filteredEmployees.map((emp, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow border border-gray-200"
        >
          <div className="mb-2">
            <span className="font-semibold text-gray-700">
              البريد الإلكتروني:{" "}
            </span>
            {emp.email}
          </div>
          <div className="mb-2">
            <span
              className={`font-semibold text-gray-700  ${
                emp.is_active ? "text-green-500" : "text-red-500"
              }`}
            >
              الحالة:{" "}
            </span>
            {emp.is_active ? "نشط" : "غير نشط"}
          </div>
          <div className="flex flex-wrap justify-end gap-2 mt-3">
            <Link href={`/staff/update/${emp.id}`}>
              <button className="flex items-center gap-1 text-sm bg-[#0177FB] text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition">
                <PenLine className="w-4 h-4" />
                تعديل
              </button>
            </Link>

            <button
              onClick={() => onToggleStatus(emp.id)}
              disabled={toggleLoading === emp.id}
              className="flex items-center gap-1 text-sm bg-yellow-500 text-white px-3 py-1.5 rounded-full hover:bg-yellow-600 transition"
            >
              {toggleLoading === emp.id ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <span>{emp.is_active ? "تعطيل" : "تفعيل"}</span>
              )}
            </button>

            <button
              onClick={() => onDelete(emp.id)}
              className="flex items-center gap-1 text-sm bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition"
            >
              <Trash2 color="#fff" className="w-4 h-4" />
              حذف
            </button>
            <Link href={`/staff/show/${emp.id}`}>
              <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition">
                <Eye className="w-4 h-4" />
                استعراض
              </button>
            </Link>
            <Link href={`/staff/reset/${emp.id}`}>
              <button className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
                <LockIcon className="w-4 h-4" />
                تغيير كلمة السر
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMobile;
