"use client";
import { X } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { redirect, useParams } from "next/navigation";
import { Input } from "../Inputs";
import { withAuth } from "@/app/components/withAuth";
import useUpdate from "@/app/components/hooks/useUpdate";
const Page = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { update, response, loading } = useUpdate();
  const { id } = useParams();
  const [email, setEmail] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([]); // الآن نخزن الأسماء

  const rolesList = [
    { id: 0, name: "plan_management" },
    { id: 1, name: "ticket_management" },
    { id: 2, name: "client_management" },
    { id: 3, name: "employee_management" },
    { id: 4, name: "notification_management" },
    { id: 5, name: "subscription_management" },
    { id: 6, name: "system_parameter_management" },
    { id: 7, name: "report_management" },
    { id: 8, name: "faq_management" },
  ];

  const handleRoleChange = (roleName: string) => {
    setRoles((prev) =>
      prev.includes(roleName)
        ? prev.filter((r) => r !== roleName)
        : [...prev, roleName]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const rolesPayload: Record<string, string> = {};
    roles.forEach((roleName, index) => {
      rolesPayload[`roles[${index}]`] = roleName;
    });
    const data = {
      email,
      roles,
    };
    console.log(data);
    update(`${url}/employee/${id}`, data);
  };

  return (
    <div className="fixed inset-0 bg-update-staff   bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
          onClick={() => redirect("/staff")}
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-[#0177FB]">تعديل الموظف</h2>
        {response && <h3 className="text-gray-800">{response}</h3>}
        {loading && <h3 className="text-red-500">جاري الارسال..</h3>}
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <Input
              value={email}
              label="عدل الايميل"
              name="email"
              type="email"
              onChanges={(e: any) => setEmail(e.target.value)}
            />
            <div className="mb-6">
              <h3 className="text-left font-semibold mb-2">صلاحيات الموظف:</h3>
              <div className="flex flex-col gap-2">
                {rolesList.map((role) => (
                  <label
                    key={role.name}
                    className="flex items-center justify-end"
                  >
                    <span className="ml-2">{role.name}</span>
                    <input
                      type="checkbox"
                      value={role.name}
                      checked={roles.includes(role.name)}
                      onChange={() => handleRoleChange(role.name)}
                      className="w-4 h-4"
                    />
                  </label>
                ))}
              </div>
            </div>
            <button className="w-full bg-[#41BC4C] text-white py-2 rounded-lg hover:bg-green-600 transition">
              حفظ التعديلات
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
