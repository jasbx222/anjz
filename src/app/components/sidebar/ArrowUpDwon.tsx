"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const links = ["/home", "/Packages", "/orders","/reports","/users","/staff"];

const useArrowNavigation = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // تحديد الموقع الحالي داخل المصفوفة
    const index = links.indexOf(pathname);
    if (index !== -1) setCurrentIndex(index);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentIndex < links.length - 1) {
        router.push(links[currentIndex + 1]);
      }

      if (e.key === "ArrowUp" && currentIndex > 0) {
        router.push(links[currentIndex - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);
};

export default useArrowNavigation;
