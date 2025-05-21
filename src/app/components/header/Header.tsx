"use client";

import { ChevronDown, LogOut, Bell, UserCheck, Settings, CircleAlertIcon } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import useGet from "../hooks/useGet";
import { getToken } from "@/app/context/getToken";

export const Header = () => {
  const [down, setDown] = useState(false);
  const { data } = useGet<any>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`
    
  );
   const token =  getToken('token')
  return (
    <header dir="" className="bg-gray-100 container  rounded-2xl px-6 py-4  flex items-center justify-between">
      {/* العنوان */}
    {""}
      {/* أدوات التحكم */}
     {
      token ? ( <div className="flex fixed top-5 left-4 items-center gap-4 ">
        {/* المستخدم */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setDown(!down)}
        >
          <div className="relative flex items-center">
            <Bell className="text-blue-700 w-6 h-6" />
            {data.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {data.length}
              </span>
            )}
          </div>

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
          <div className="fixed top-14 left-0 bg-white shadow-lg rounded-lg w-52 z-20 animate-fade-in">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link href="/ticket">
                  <div className="flex items-center gap-1">
                    <div className="relative">
                      <CircleAlertIcon className="text-yellow-700 w-4 h-4" />
                      {data.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                          {data.length}
                        </span>
                      )}
                    </div>
                    <span>المشاكل</span>
                  </div>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link href="/systemparameters" className="flex  gap-3 flex-row">
                <Settings size={15} className="text-green-600 " />
                الاعدادات
                 </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link href="/addnotification/" className="flex  gap-3 flex-row">
                <Bell size={15} className="text-green-600 " />
                  اضافة اشعار{" "}
                 
                </Link>
              </li>
               <li className="px-4 py-2 hover:bg-gray-100 text-sm   cursor-pointer">
                <Link href={"/profile"} className="flex  gap-3 flex-row">
                  <UserCheck size={15} className="text-green-600 " />
                  <span className="text-gray-700">الملف الشخصي </span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm   cursor-pointer">
                <Link href={"/logout"} className="flex  gap-3 flex-row">
                  <LogOut size={15} className="text-red-600 " />
                  <span className="text-red-600">تسجيل الخروج</span>
                </Link>
              </li>
             
            </ul>
          </div>
        )}
      </div>):('')
     }
    </header>
  );
};
