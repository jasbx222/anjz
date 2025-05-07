import Link from "next/link";
import React from "react";
export interface Links {
  label: string;
  icon: React.ReactNode;
  href: string;
 
}
export interface MoreLinkProps {
  isMoreOpen?: boolean;
  moreLinks?: Links[] | undefined;
  path?: string;}

export const MoreLink = ({
  isMoreOpen,
  moreLinks,
  path,
}: MoreLinkProps) => {
  return (
    <ul className="relative z-50 overflow-auto top-5 grid gap-4 font-medium">
      {isMoreOpen &&
        moreLinks && moreLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`flex ${
                path === link.href ? "bg-[#fa9718]" : ""
              } shadow shadow-[#fa9718] items-center justify-between gap-5 hover:bg-[#fa9718] p-2 text-gray-200 rounded-lg group`}
            >
              <span className="w-5 h-5 text-amber-50">{link.icon}</span>
              <span className="flex-1 hover:text-gray-900">{link.label}</span>
              {path === link.href && <span className="text-amber-50">✔</span>}
            </Link>
          </li>
        ))}
    </ul>
  );
};
