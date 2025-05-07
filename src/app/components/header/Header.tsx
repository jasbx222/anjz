'use client'
import { Moon, ChevronDown } from "lucide-react";
import Image from "next/image";
import avatar from './../../../../public/icons/avatar.png';
import { useState } from "react";
import Link from "next/link";
export const Header = () => {
    const [down, setDown] = useState(false);
    const handleClick = () => {
        setDown(!down);
    };
  return (
    <header className="bg-white   rounded-xl px-6 py-3 flex items-center justify-between">
      {/* العنوان */}
      <h1 className="text-lg font-semibold">{""}</h1>

      {/* أدوات التحكم */}
      <div className="flex items-center gap-4">
        {/* المستخدم */}
        <div className="flex items-center gap-2">
    
          <div className="text-right">
            <p className="text-sm font-medium leading-tight">Sojon Islam</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <ChevronDown size={16} className="text-gray-500" onClick={handleClick} />
          {/*دروب داون */}

          <div className="relative">

        {
            down ? (
                <div className="absolute  left-0 bg-white shadow-lg rounded-md mt-2 w-48 z-10">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <Link href="/profile">الملف الشخصي</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">الإعدادات</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">تسجيل الخروج</li>
                    </ul>
                </div>
            ) : ('')

        }
        </div>

        </div>
      </div>
    </header>
  );
};
