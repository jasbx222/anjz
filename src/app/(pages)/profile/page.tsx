"use client";
import { withAuth } from "@/app/components/withAuth";
import { Inputs } from "./Inputs";
import { ProfileTypes } from "@/app/models/types.";
import useGetProfile from "@/app/components/hooks/useGetProfile";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import usePost from "@/app/components/hooks/usePost";
import useUpdate from "@/app/components/hooks/useUpdate";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const url =process.env.NEXT_PUBLIC_BASE_URL
function Page() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { data } = useGetProfile<ProfileTypes>(
    `${url}/profile`
  );
  const dataProfile={
    email: data?.email || email,
    password: password,
    
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
    case "faq_management":
      return "إدارة الاسئلة الشائعة";
    default:
      return role;
  }
};
const route = useRouter();
  const { update,response } = useUpdate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await update(`${url}/profile`, dataProfile);
    setEmail("");
    setPassword("");
       toast('تمت العملية بنجاح');
    // window.location.href = "/login";
    // route.refresh()
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      dir="rtl"
      className="bg-white rounded-2xl container  shadow-md p-6 max-w-4xl mx-auto mt-10 w-full"
    >
      <h1 className="text-3xl font-bold text-center mb-6">الملف الشخصي</h1>
      {response && (
        <h2 className="text-2xl font-bold text-center text-green-500 mb-4">
          {response}
        </h2>
      )}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        {show ? (
          ""
        ) : (
          <div>
            <h2
              className={`text-2xl font-semibold ${
                data?.is_active ? "text-green-400" : "text-red-500"
              } mb-2`}
            >
              {data?.is_active ? <CircleAlert /> : <CircleAlert />}
            </h2>
            <p className="text-gray-500">{data?.email}</p>
            الصلاحيات
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
        )}

        {show ? (
          <button
            onClick={() => setShow(!show)}
            className="bg-[#0f0f0f] text-white px-4 py-2 rounded-lg whitespace-nowrap"
          >
            الغاء
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="bg-[#41BC4C] text-white px-4 py-2 rounded-lg whitespace-nowrap"
          >
            تعديل
          </button>
        )}
      </div>

      {show ? (
        <form   onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1  gap-4 w-full">
          
            <Inputs
              label="البريد الالكتروني"
              type="email"
              name="البريد الالكتروني"
              value={email}
              onChange={(e:any) => setEmail(e.target.value)}
            />
            <Inputs label="ادخل الباسورد "
              value={password}
              onChange={(e:any) => setPassword(e.target.value)}
             type="password" name="الباسورد " />
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-lg shadow-sm">
              حفظ
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
export default withAuth(Page);
