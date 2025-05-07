"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {   useState } from "react";
import { Logo } from "./Logo";
import { MoreLink } from "./MoreLinks";
import { Menu, MoreVertical, X } from "lucide-react";
import { mainLinks, moreLinks } from "./Linkes";

const Sidebar = () => {
  const path = usePathname();
  const [show, setShow] = useState<Boolean>(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleNav = () => setShow(!show);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);


  

  return (
    <nav className="fixed top-0 right-0 z-50" dir="rtl">
      {/* زر القائمة الجانبية */}
      <button onClick={handleNav} className="text-[#0177FB]  px-4 py-2">
        <Menu size={40} />
      </button>

      <div
        className={`fixed border-x-2 border-[#0177FB] rounded-md bg-[#0177FB] top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform shadow-lg ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* زر إغلاق القائمة الجانبية */}
        <button
          type="button"
          onClick={handleNav}
          className="absolute top-2.5 left-2.5 p-1.5 rounded-lg hover:bg-[#015ec2]"
        >
          <X className="text-white" />
        </button>

        {/* قائمة الروابط الرئيسية */}
        <ul className="py-4 space-y-2 mt-8 grid gap-4 font-medium">
          {mainLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex items-center justify-between gap-4 p-3 rounded-xl border transition-all duration-300 font-semibold
    ${
      path === link.href
        ? "bg-white/90 text-[#0177FB] border-[#0177FB] shadow-[0_8px_20px_rgba(1,119,251,0.3)] backdrop-blur-md"
        : "text-white border-white/20 hover:bg-white/90 hover:text-[#0177FB] hover:shadow-[0_8px_20px_rgba(1,119,251,0.3)] hover:border-[#0177FB] hover:backdrop-blur-md"
    }`}
              >
                <span className="w-5 h-5">{link.icon}</span>
                <span className="flex-1">{link.label}</span>
                {path === link.href && (
                  <span className="text-[#0177FB]">✔</span>
                )}
              </Link>
            </li>
          ))}

          {/* زر المزيد من المعلومات */}
          <li>
            <button
              onClick={toggleMore}
              className="w-full flex items-center justify-between gap-5 p-2 rounded-lg text-white hover:bg-white hover:text-[#0177FB] transition-all duration-200"
            >
              <span className="w-5 h-5">
                <MoreVertical />
              </span>
              <span className="flex-1">المزيد من المعلومات</span>
            </button>

            {/* القائمة المنسدلة */}
            <MoreLink
              isMoreOpen={isMoreOpen}
              moreLinks={moreLinks}
              path={path}
            />
          </li>
        </ul>

        {/* اللوغو والفوتر */}
        <Logo />
      </div>
    </nav>
  );
};

export default Sidebar;
