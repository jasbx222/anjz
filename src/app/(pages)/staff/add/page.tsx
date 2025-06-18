"use client";
import usePost from "@/app/components/hooks/usePost";
import Input from "./Inputs";
import { FormEvent, useState } from "react";

import { withAuth } from "@/app/components/withAuth";
import { toast } from "react-toastify";

 function Page() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { add, response } = usePost();

  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
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

  const handleSubmit =async (e: FormEvent) => {
    e.preventDefault();

    const rolesPayload: Record<string, string> = {};
    roles.forEach((roleName, index) => {
      rolesPayload[`roles[${index}]`] = roleName;
    });
    const data = {
      email,
      password,
      ...rolesPayload,
    };

   await add(`${url}/employee`, data, true);
   toast('تمت العملية بنجاح');
  };

  return (
    <div  dir="rtl"  className="bg-white rounded-xl border border-[#0177FB] p-6 max-w-4xl mx-auto shadow-md mt-10">
      <h2 className="text-2xl font-bold text-right text-[#0177FB] mb-6">
        إضافة موظف جديد
      </h2>
{
  response && <h1>{response}</h1>
}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    
       
                <Input
            label="ايميل الموظف"
            onChanges={(e: any) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
             <Input
            label="كلمة المرور"
            onChanges={(e: any) => setPass(e.target.value)}
            type="password"
            name="password"
          />
        </div>

        {/* اختيار الأدوار */}
        <div className="mb-6">
          <h3 className="text-left font-semibold mb-2">صلاحيات الموظف:</h3>
          <div className="flex flex-col gap-2">
            {rolesList.map((role) => (
              <label key={role.name} className="flex items-center justify-end">
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

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#41BC4C] text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            حفظ الموظف
          </button>
        </div>
      </form>
    </div>
  );
}
export default withAuth(Page)