"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useShow from "@/app/components/hooks/useShow";
import { User2, ShieldCheck, Mail } from "lucide-react";
import { withAuth } from "@/app/components/withAuth";

interface Employee {
  id: number;
  email: string;
  is_active: boolean;
  roles: string[];
}

const translateRole = (role: string): string => {
  switch (role) {
    case "plan_management":
      return "إدارة الباقات";
    case "ticket_management":
      return "إدارة التذاكر";
    case "client_management":
      return "إدارة العملاء";
    case "employee_management":
      return "إدارة الموظفين";
    case "notification_management":
      return "إدارة الإشعارات";
    case "subscription_management":
      return "إدارة الاشتراكات";
    case "system_parameter_management":
      return "إعدادات النظام";
    case "report_management":
      return "إدارة التقارير";
    default:
      return role;
  }
};

 function Page() {
  const { id } = useParams();
  const { data, loading } = useShow<Employee>(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, id);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      <div className="bg-white rounded-2xl shadow-lg border p-8 space-y-6">
        <h2 className="text-3xl font-bold  text-center text-[#0177FB] flex items-center gap-2 justify-center">
          <User2 className="w-6 text-center h-6 text-[#0177FB]" />
          تفاصيل الموظف
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-right">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1 flex justify-between">
              البريد الإلكتروني <Mail className="w-4 h-4 text-gray-400" />
            </p>
            <p className="text-lg font-semibold text-gray-800">{data?.email}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1 flex justify-between">
              الحالة {
                data?.is_active? <ShieldCheck size={40} className="w-4 h-4 text-green-500" /> :<ShieldCheck size={40} className="w-4 h-4 text-red-500" />
              }
            </p>
            <p className={`text-lg font-semibold ${data?.is_active ? "text-green-600" : "text-red-600"}`}>
              {data?.is_active ? "نشط" : "غير نشط"}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500 mb-2">الصلاحيات</p>
          <div className="flex flex-wrap gap-2 justify-end">
            {data?.roles.map((role, idx) => (
              <span
                key={idx}
                className="bg-[#0177FB]/10 text-[#0177FB] px-3 py-1 rounded-full text-sm font-medium border border-[#0177FB]/20"
              >
                {translateRole(role)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuth(Page)