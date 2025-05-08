'use client'
import { PenLine } from 'lucide-react';
import React, { useState } from 'react';
import Update from './update/Update';

export const Table = () => {
  const employeesData = [
    {
      id: 1,
      name: "علي أحمد",
      email: "ali@example.com",
      phone: "07712345678",
      roles: ["إدارة المستخدمين", "الدعم الفني"],
      avatar: "/avatar1.png",
    },
    {
      id: 2,
      name: "سارة حسين",
      email: "sarah@example.com",
      phone: "07898765432",
      roles: ["إدارة الباقات", "عرض الإحصائيات"],
      avatar: "/avatar2.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [editingEmp, setEditingEmp] = useState(false);

  const handleEdit = () => {
    setEditingEmp(!editingEmp);
  };

  const filteredEmployees = employeesData.filter(
    (emp) =>
      emp.name.includes(search) ||
      emp.email.includes(search) ||
      emp.phone.includes(search)
  );

  return (
    <div className={`overflow-x-auto  bg-[#F5F7FA] p-6 rounded-lg shadow-md`}>
    
      <table className={`min-w-full bg-white border border-[#C9D3DF] rounded-lg shadow-sm  ${editingEmp ?"blur-2xl":''}`}>
        <thead className="bg-[#0F5BFF] text-white text-sm">
          <tr>
            <th className="py-3 px-4 text-left">اسم الموظف</th>
            <th className="py-3 px-4 text-left">البريد الإلكتروني</th>
            <th className="py-3 px-4 text-left">الهاتف</th>
            <th className="py-3 px-4 text-left">الصلاحيات</th>
            <th className="py-3 px-4 text-left">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id} className="border-t border-[#E2E8F0]">
              <td className="py-3 px-4 text-sm text-gray-800">{emp.name}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{emp.email}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{emp.phone}</td>
              <td className="py-3 px-4 text-sm text-gray-600">
                <ul className="list-disc pl-5 space-y-1">
                  {emp.roles.map((role, i) => (
                    <li key={i} className="text-gray-700">{role}</li>
                  ))}
                </ul>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600 text-center">
                <button
                  className="flex items-center gap-1 text-sm bg-[#0F5BFF] text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
                  onClick={handleEdit}
                >
                  <PenLine className="w-4 h-4" />
                  تعديل
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Employee Cards */}
    
      {
        editingEmp ? (<Update  />):('')
      }

      
    </div>
  );
};
