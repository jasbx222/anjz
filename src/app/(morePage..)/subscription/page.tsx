"use client";
import useGet from "@/app/components/hooks/useGet";
import { withAuth } from "@/app/components/withAuth";
import { Plan } from "@/app/models/types.";
import { ForMobile } from "./ForMobileCard";
import Link from "next/link";


function Page() {
  const { data } = useGet<Plan>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/subscription`
  );

  return (
    <div dir="rtl" className="p-6">
      <ForMobile/>
      <h2 className="text-2xl font-bold text-[#0177FB] mb-4">خطط الاشتراك</h2>

      <div className="overflow-x-auto hidden md:block rounded-2xl shadow border border-gray-200">
        <table className="min-w-full text-right divide-y divide-gray-200">
          <thead className="bg-[#0177FB] text-white text-sm font-semibold">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">اسم الخطة</th>
              <th className="px-4 py-3">الوصف</th>
              <th className="px-4 py-3">الحجم</th>
              <th className="px-4 py-3">السعر</th>
              <th className="px-4 py-3">المدة (يوم)</th>
              <th className="px-4 py-3">عدد التوابع</th>
              <th className="px-4 py-3">الميزات</th>
              <th className="px-4 py-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-sm">
            {data?.map((item, index: number) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-all">
                <td className="px-4 py-3 text-[#F83A26] font-medium">
                  {index + 1}
                </td>
                <td className="px-4 py-3">{item.plan.title}</td>
                <td className="px-4 py-3">{item.plan.description}</td>
                <td className="px-4 py-3">{item.plan.size}</td>
                <td className="px-4 py-3">{item.plan.price}</td>
                <td className="px-4 py-3">{item.plan.duration_days}</td>
                <td className="px-4 py-3">{item.plan.dependents_count}</td>
                <td className="px-4 py-3 text-gray-600">
                  {item?.plan?.features?.map((i) => i.title||"null").join(" ,")}
                </td>
                <td className="px-4 py-3 space-x-2 space-x-reverse flex items-center justify-center gap-2">
                <Link href={`/subscription/show/${item.id}/`}>
                  <button className="bg-[#41BC4C] hover:bg-[#41bc4b50] text-white hover:text-gray-600 text-xs px-3 py-1 rounded-full transition-all">
                    التفاصيل
                  </button>
                </Link>
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(Page);
