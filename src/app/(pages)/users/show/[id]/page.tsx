"use client";

import { useParams } from "next/navigation";
import useShow from "@/app/components/hooks/useShow";
import { User2, Mail, ShieldCheck, ShieldX } from "lucide-react";
import { useEffect, useState } from "react";
import { withAuth } from "@/app/components/withAuth";

interface Employee {
  id: number;
  name: string;
  email: string;
  job: boolean;
}

 function Page() {
  const { id } = useParams();
  const { data, loading } = useShow<Employee>(`${process.env.NEXT_PUBLIC_BASE_URL}/client`, id);
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleToggle = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
                const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/client/${id}/toggle-active`,
        {
          method: "PUT", 
          headers:{
      Authorization:`Bearer ${token}`,
      Accept:'application/json; charset=UTF-8'
          }
        }
      );

      if (!response.ok) {
        throw new Error("فشل في تحديث الحالة");
      }

      // عكس الحالة محلياً
      setIsActive((prev) => !prev);
    } catch (err) {
      setError("حدث خطأ أثناء التحديث، حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      <div className="bg-white rounded-2xl shadow-lg border p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#0177FB] flex items-center gap-2 justify-center">
          <User2 className="w-6 h-6 text-[#0177FB]" />
          تفاصيل العميل
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-right">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1 flex justify-between">
              البريد الإلكتروني <Mail className="w-4 h-4 text-gray-400" />
            </p>
            <p className="text-lg font-semibold text-gray-800">{data?.email}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">الاسم</p>
            <p className="text-lg font-semibold">{data?.name}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border">
            <p className="text-sm text-gray-500 mb-1">المهنة</p>
            <p className="text-lg font-semibold">{data?.job || ' لايوجد'}</p>
          </div>

          {/* زر التفعيل / الإيقاف */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm border flex flex-col gap-2 items-start">
            <p className="text-sm text-gray-500 mb-1">حالة الحساب</p>

            <button
              onClick={handleToggle}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 flex items-center gap-2
                ${isActive
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
                }`}
            >
              {isActive ? <ShieldCheck className="w-4 h-4" /> : <ShieldX className="w-4 h-4" />}
              {isSubmitting ? "جاري التحديث..." : isActive ? "نشط" : "غير نشط"}
            </button>

            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuth(Page)