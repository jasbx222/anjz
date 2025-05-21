"use client";

import useShow from "@/app/components/hooks/useShow";
import { withAuth } from "@/app/components/withAuth";
import { PlanShowType } from "@/app/models/types.";
import { BadgeCheck, XCircle, Pencil, Users, CoinsIcon, Banknote } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
 const { id } = useParams(); // يحصل على ID من الـ URL
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useShow<PlanShowType>(`${url}/plan`, id);

  if (loading) {
    return <div className="text-center text-gray-600 mt-10">جاري تحميل البيانات...</div>;
  }

  if (!data) {
    return <div className="text-center text-red-600 mt-10">لم يتم العثور على الباقة</div>;
  }


  return (
    <div dir="rtl" className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>

        <Link
          href={`/Packages/update/${data.id}`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Pencil className="w-4 h-4" />
          تعديل الباقة
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 border rounded-xl p-4 text-center">
          <div className="text-gray-500 text-sm">السعر </div>
          
          <div className="text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
         <Banknote className="w-5 h-5 text-green-500" />
            {data.price}
          </div>
        </div>

        <div className="bg-gray-50 border rounded-xl p-4 text-center">
          <div className="text-gray-500 text-sm">عدد المشتركين</div>
          <div className="text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            {data.dependents_count}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">المميزات:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {data.features.map((feature, index) => (
            <li key={index} className="pl-2">
              {feature.title}
            </li>
          ))}
        </ul>

              <div className="text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">الوصف:</h2>
            {data.description}
          </div>
      </div>
    </div>
  );
};

export default withAuth(Page)