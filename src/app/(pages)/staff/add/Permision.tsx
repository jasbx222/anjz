"use client";
import React, { useState } from "react";
const permision = [
  "إدارة المستخدمين",
  "إدارة الباقات",
  "إدارة المحتوى",
  "عرض الإحصائيات",
  "إعدادات النظام",
  "الدعم الفني",
  "إدارة المستخدمين",
  "إدارة الباقات",
  "إدارة المحتوى",
  "عرض الإحصائيات",
  "إعدادات النظام",
  "الدعم الفني",
];
const Permision = () => {
  const [permissions, setPermissions] = useState<string[]>([]);

  const togglePermission = (perm: string) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
      {permision.map((perm,idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={permissions.includes(perm)}
            onChange={() => togglePermission(perm)}
            className="accent-[#41BC4C] w-4 h-4"
          />
          <span>{perm}</span>
        </label>
      ))}
    </div>
  );
};

export default Permision;
