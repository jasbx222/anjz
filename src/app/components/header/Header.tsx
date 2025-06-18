"use client";

import {
  ChevronDown,
  LogOut,
  Bell,
  UserCheck,
  Settings,
  CircleAlertIcon,
  Settings2Icon,
} from "lucide-react";

import { FormEvent, useState } from "react";
import Link from "next/link";
import useGet from "../hooks/useGet";
import { getToken } from "@/app/context/getToken";
import axios from "axios";
import { ProfileTypes } from "@/app/models/types.";
import useGetProfile from "../hooks/useGetProfile";
import { getDecryptedToken } from "../hooks/useDelete";

export const Header = () => {
  const [down, setDown] = useState(false);
  const { data = [] } = useGet<any>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`
  );
  const { data: profile } = useGetProfile<ProfileTypes>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/profile`
  );
  const token =getDecryptedToken()

  const logoutAction = async (e: FormEvent) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      if (!token) {
        console.log("No token found");
        return;
      }

      await axios.get(`${url}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token")
      
      window.location.href = "/login";
    } catch (error: any) {
      console.log("Logout error:", error.message);
    }
  };
  if (!token) return '';
  return (
    <header className="bg-gray-100 container z-50 rounded-2xl px-6 py-4 flex items-center justify-between">
      <div className="flex fixed top-5 left-4 items-center gap-4">
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
            {
              <>
                <p className="text-sm font-semibold text-gray-800">
                  {profile?.email.slice(0, 5)}
                </p>
                <p className="text-xs text-gray-500">
                  {profile?.is_active ? "نشط" : "متوقف"}
                </p>
              </>
            }
          </div>
          <ChevronDown
            size={18}
            className="text-gray-500 transition-transform duration-200"
            style={{ transform: down ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        {down && (
          <div className="fixed top-14 z-50 left-0 bg-white shadow-lg rounded-lg w-52 animate-fade-in">
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
                <Link
                  href="/addnotification/"
                  className="flex gap-3 cursor-pointer flex-row"
                >
                  <Bell size={15} className="text-green-600" />
                  اضافة اشعار
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">
                <Link
                  href="/systemparameters/"
                  className="flex gap-3  cursor-pointer flex-row"
                >
                  <Settings size={15} className="text-green-600" />
                  إعدادات التطبيق
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                <Link
                  href="/profile"
                  className="flex cursor-pointer gap-3 flex-row"
                >
                  <UserCheck size={15} className="text-green-600" />
                  <span className="text-gray-700">الملف الشخصي</span>
                </Link>
              </li>
              <li className="px-4 py-2  flex gap-3 flex-row hover:bg-gray-100 text-sm cursor-pointer">
                <form onSubmit={logoutAction} className="w-full">
                  <button
                    type="submit"
                    className="flex gap-3 cursor-pointer flex-row w-full text-left"
                  >
                    <LogOut size={15} className="text-red-600" />
                    <span className="text-red-600">تسجيل الخروج</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
