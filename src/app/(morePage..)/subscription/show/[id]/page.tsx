"use client";
import { useParams } from "next/navigation";
import { withAuth } from "@/app/components/withAuth";
import { PlanDetailes } from "@/app/models/types.";
import useShow from "@/app/components/hooks/useShow";
import useUpdate from "@/app/components/hooks/useUpdate";
import usePutClosedMsg from "@/app/components/hooks/usePutClosedMsg";
import Swal from "sweetalert2";

function Page() {
  const { id } = useParams();
  const { update, response } = usePutClosedMsg();
  const { data, loading } = useShow<PlanDetailes>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/subscription`,
    id
  );

  if (loading || !data) {
    return <div className="text-center py-10">جاري تحميل البيانات...</div>;
  }

  const handleSubsend = () => {
    update(`${process.env.NEXT_PUBLIC_BASE_URL}/subscription/${id}/suspend`);
 
  };
  return (
    <div dir="rtl" className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0177FB] mb-6">
        تفاصيل الخطة: {data?.title}
      </h1>
<h1 className="text-right text-xl text-green-600"> {response && response}</h1>
   
      <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
        <div className="text-sm text-gray-700">
          <span className="font-bold text-gray-800">الوصف: </span>
          {data?.description}
        </div>

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
        </div>

        <div className="pt-4 flex justify-end gap-2">
          <button
            onClick={handleSubsend}
            className="bg-[#F83A26] hover:bg-[#d1311f4b]  hover:text-gray-600 text-white text-xs px-4 py-2 rounded-full transition-all"
          >
          اعادة ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Page);
