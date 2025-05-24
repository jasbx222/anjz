'use client'
import useGet from "@/app/components/hooks/useGet";
import { Plan } from "@/app/models/types.";
import Link from "next/link";
export function ForMobile() {
  const { data } = useGet<Plan>(`${process.env.NEXT_PUBLIC_BASE_URL}/subscription`);

  return (
    <div dir="rtl" className="p-6 space-y-4 md:hidden block">
      <h2 className="text-2xl font-bold text-[#0177FB] mb-4">خطط الاشتراك</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: Plan, index: number) => (
          <div
            key={item.id}
            className="rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all p-5 bg-white space-y-3"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-[#F83A26]">#{index + 1}</span>
              <span className="text-sm bg-[#0177FB] text-white px-3 py-1 rounded-full">
                {item.plan.title}
              </span>
            </div>

            <p className="text-gray-700 text-sm">{item.plan.description}</p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-800">الحجم:</span> {item.plan.size}
              </div>
              <div>
                <span className="font-semibold text-gray-800">السعر:</span> {item.plan.price}
              </div>
              <div>
                <span className="font-semibold text-gray-800">المدة:</span> {item.plan.duration_days} يوم
              </div>
              <div>
                <span className="font-semibold text-gray-800">عدد التوابع:</span> {item.plan.dependents_count}
              </div>
              <div className="col-span-2">
                <span className="font-semibold text-gray-800">الميزات:</span>{" "}
                {item.plan.features.map((f) => f.title).join("، ")}
              </div>
            </div>

            <div className="flex justify-between pt-4">
            <Link href={`/subscription/show/${item.id}/`}>
                  <button className="bg-[#41BC4C] hover:bg-[#41bc4b50] text-white hover:text-gray-600 text-xs px-3 py-1 rounded-full transition-all">
                    التفاصيل
                  </button>
                </Link>
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
