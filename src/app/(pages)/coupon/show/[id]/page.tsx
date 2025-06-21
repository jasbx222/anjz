'use client';
import useDelete from '@/app/components/hooks/useDelete';
import useShow from '@/app/components/hooks/useShow';
import { withAuth } from '@/app/components/withAuth';
import {  CouponShow, url } from '@/app/models/types.';
import { Delete, Pen } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
// import {useRefetch} from '../../../../context/useRefetch'
function Page() {
  const route= useRouter()
  const { id } = useParams();
  const { data, loading } = useShow<CouponShow>(`${url}/coupon`, id);
const {remove,response}=useDelete();
  // const { refetch } = useRefetch();
const handleDelete=async(id:number)=>{

 await remove(`${url}/coupon/${id}`);
// refetch()
// route.push('/coupon')
}
  if (loading)
    return (
      <div className="text-center text-xl text-red-500 py-20" dir="rtl">
        جاري تحميل الكوبون ...
      </div>
    );

  if (!data) return <div>تم الحذف بنجاح</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 space-y-6" dir="rtl">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">تفاصيل الكوبون</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'رمز الكوبون', value: data.code, color: 'text-blue-900' },
            { label: 'القيمة', value: `${data.value} د.ع`, color: 'text-green-700' },
            { label: 'عدد مرات الاستخدام المسموح', value: data.max_usage_count },
            { label: 'عدد مرات الاستخدام الفعلي', value: data.total_used, color: 'text-red-600' },
            { label: 'تاريخ بدء الصلاحية', value: data.started_at },
            { label: 'تاريخ انتهاء الصلاحية', value: data.expired_at },
            { label: 'تاريخ الإنشاء', value: data.created, span: true },
          ].map(({ label, value, color = '', span = false }, i) => (
            <div
              key={i}
              className={`bg-gray-100 p-4 rounded-lg ${span ? 'md:col-span-2' : ''}`}
            >
              <h2 className="text-gray-600 font-semibold mb-2">{label}</h2>
              <p className={`text-lg font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>


        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50 border-t pt-6">
          <button onClick={()=>handleDelete(data.id)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 transition">
            <Delete size={20} />
            حذف الكوبون
          </button>

{response&&response}
        <Link href={`/coupon/update/${data.id}`}>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition">
            <Pen size={20} />
            تعديل الكوبون
          </button></Link>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">معرف الكوبون: {data.id}</p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Page);
