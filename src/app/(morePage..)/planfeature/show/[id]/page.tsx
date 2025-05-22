"use client";
import useShow from "@/app/components/hooks/useShow";
import { withAuth } from "@/app/components/withAuth";
import { PlanFetureShowType } from "@/app/models/types.";
import {
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useShow<PlanFetureShowType>(`${url}/plan-feature`, id);

  if (loading) {
    return (
      <div className="text-center text-gray-600 mt-10">
        جاري تحميل البيانات...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-red-600 mt-10">
        لم يتم العثور على الباقة
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
        <Link
          href={`/planfeature/update/${data.id}`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Pencil className="w-4 h-4" />
          تعديل الخصائص
        </Link>
      </div>
    </div>
  );
};

export default withAuth(Page);
