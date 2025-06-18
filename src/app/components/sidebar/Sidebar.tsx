"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainLinks } from "./Linkes";
import { getToken } from "@/app/context/getToken";
import { Logo } from "./Logo";
import useGetProfile from "../hooks/useGetProfile";
import { ProfileTypes } from "@/app/models/types.";
import { getDecryptedToken } from "../hooks/useDelete";

const Sidebar = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const token = getDecryptedToken()
  const path = usePathname();
  const [show, setShow] = useState(false);

  const { data } = useGetProfile<ProfileTypes>(`${url}/profile`);
  const userRoles: string[] = data?.roles || [];

  //  فلترة الروابط بناء على الصلاحيات
  const visibleLinks = mainLinks.filter(
    (link) => !link.role || userRoles.includes(link.role)
  );

  return (
    <>
      {token && (
        <nav className="fixed top-0 right-0 z-50" dir="rtl">
          <button onClick={() => setShow(!show)} className="text-[#0177FB] px-4 py-2">
            <Menu size={40} />
          </button>

          <div
            className={`fixed border-x-2 border-[#0177FB] rounded-md bg-[#01228b] top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform shadow-lg ${
              show ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              type="button"
              onClick={() => setShow(false)}
              className="absolute top-2.5 left-2.5 p-1.5 rounded-lg hover:bg-[#015ec2]"
            >
              <X className="text-white" />
            </button>

            <ul className="py-4 space-y-2 mt-8 grid gap-4 font-medium">
              {visibleLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between gap-4 p-3 rounded-xl border transition-all duration-300 font-semibold ${
                      path === link.href
                        ? "bg-white/90 text-[#0177FB] border-[#0177FB] shadow-[0_8px_20px_rgba(1,119,251,0.3)] backdrop-blur-md"
                        : "text-white border-white/20 hover:bg-white/90 hover:text-[#0177FB] hover:shadow-[0_8px_20px_rgba(1,119,251,0.3)] hover:border-[#0177FB] hover:backdrop-blur-md"
                    }`}
                  >
                    <span className="w-5 h-5">{link.icon}</span>
                    <span className="flex-1">{link.label}</span>
                    {path === link.href && <span className="text-[#0177FB]">✔</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <Logo />
          </div>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
