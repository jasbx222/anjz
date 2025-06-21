"use client";
import { useParams } from "next/navigation";
import { withAuth } from "@/app/components/withAuth";
import { PlanDetailes } from "@/app/models/types.";
import useShow from "@/app/components/hooks/useShow";
import usePutClosedMsg from "@/app/components/hooks/usePutClosedMsg";
import Link from "next/link";
import { toast } from "react-toastify";
function Page() {
  const { id } = useParams();
  const { update } = usePutClosedMsg();
  const { data, reftch } = useShow<PlanDetailes>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/subscription`,
    id
  );

  const handleSubsend = async () => {
    await update(
      `${process.env.NEXT_PUBLIC_BASE_URL}/subscription/${id}/toggle-active`
    );
    reftch();
    toast.success("تم تحديث الحالة بنجاح");
  };
  return (
    <div dir="rtl" className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0177FB] mb-6">
        تفاصيل الخطة: {data?.title}
      </h1>
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
        <div className="text-sm text-gray-700">
          <span className="font-bold text-gray-800">الوصف: </span>
          {data?.description}
        </div>
        <Link href={`/Packages/show/${data?.old_plan?.id}`}>
          <div className="text-sm text-gray-700">
            <span className="font-bold text-gray-800">الخطة السابقة: </span>
            {data?.old_plan?.title}
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-800">السعر:</span>{" "}
            {data?.price}$
          </div>
          <div>
            <span className="font-bold text-gray-800">المدة:</span>{" "}
            {data?.duration_days} يوم
          </div>
          <div>
            <span className="font-bold text-gray-800">الحجم:</span> {data?.size}
          </div>
          <div>
            <span className="font-bold text-gray-800">عدد المشتركين:</span>{" "}
            {data?.dependents_count}
          </div>
        </div>

        <div className="text-sm text-gray-700 grid grid-cols-1 gap-4">
          <span className="font-bold text-gray-800">اسم العميل:</span>
          {data?.client.name}
          <span className="font-bold text-gray-800">ايميل العميل:</span>
          {data?.client.email}
          <span className="font-bold text-gray-800">رقم العميل:</span>
          {data?.client.id}
          <span className={`font-bold text-gray-800 `}  >الحالة:</span>
          <span className={`${data?.status === "active" ? "text-green-500":"text-red-500"}`}>

        {data?.status === "active" ? "نشطة" : "مغلقة"}
          </span>
    
        </div>
    <div className="  grid grid-cols-2 gap-5">
  <div>{""}</div>
        <button
          onClick={handleSubsend}
          className={`${
            data?.status == "active" ? "bg-green-400" : "bg-red-500"
          } hover:bg-[#34434911]  hover:text-gray-600 text-white text-xs px-4 py-2 rounded-full transition-all`}
        >
          {data?.status === "active" ? "اغلاق" : "تنشيط"}
        </button>
      </div>
      </div>

   
     
   

    
    </div>
  );
}

export default withAuth(Page);
