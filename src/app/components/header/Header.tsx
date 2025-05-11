"use client";

import {
  ChevronDown,
  LogOut,
 
  CircleCheck,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [down, setDown] = useState(false);

  return (
    <header className="bg-gray-100 container  rounded-2xl px-6 py-4  flex items-center justify-between">
      {/* العنوان */}
      <h1 className="text-xl font-bold text-gray-800">{""}</h1>

      {/* أدوات التحكم */}
      <div className="flex items-center gap-4 relative">
        {/* المستخدم */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setDown(!down)}
        >
          <CircleCheck className="text-green-700" />

          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Sojon Islam</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <ChevronDown
            size={18}
            className="text-gray-500 transition-transform duration-200"
            style={{ transform: down ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        {/* القائمة المنسدلة */}
        {down && (
          <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-52 z-20 animate-fade-in">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link href="/profile">الملف الشخصي</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link href="/setings/">الإعدادات</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm   cursor-pointer">
                <Link href={"/login"} className="flex  gap-3 flex-row">
                  <LogOut size={15} className="text-red-600 " />
                  <span className="text-red-600">تسجيل الخروج</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
