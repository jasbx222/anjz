'use client';
import useShow from '@/app/components/hooks/useShow';
import { withAuth } from '@/app/components/withAuth';
import { PaymentData } from '@/app/models/types.';
import { useParams } from 'next/navigation';
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';

function Page() {
  const { id } = useParams();
  const { data, loading } = useShow<PaymentData>(`${process.env.NEXT_PUBLIC_BASE_URL}/payment`, id);
  const printRef = useRef<any>(null);

  const handleExportPDF = async () => {
    const node = printRef.current;

    try {
      const dataUrl = await domtoimage.toPng(node);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const img = new Image();
      img.src = dataUrl;

      img.onload = () => {
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (img.height * pdfWidth) / img.width;
        pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`تفاصيل-الدفع-${data?.payment_id}.pdf`);
      };
    }  catch (error) {
     console.error('خطأ في التصدير:', error);
    }
  };

  if (loading) return <div className="text-center mt-10 text-blue-600 font-bold">جاري تحميل البيانات...</div>;
  if (!data) return <div className="text-center mt-10 text-red-600 font-bold">لا توجد بيانات لعرضها.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-right mb-4">
        <button
          onClick={handleExportPDF}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow"
        >
          تصدير إلى PDF
        </button>
      </div>

    

        {/* باقي التفاصيل نفسها مثل ما عندك */}
  <div ref={printRef} className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2563eb]">تفاصيل الاشتراك والدفع</h1>
          <p className="text-sm text-[#6b7280]">رقم المعاملة: {data?.payment_id}</p>
        </div>

        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f3f4f6] p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-[#374151]">العميل</h2>
            <p><span className="font-medium">الاسم:</span> {data?.client?.name}</p>
            <p><span className="font-medium">الإيميل:</span> {data?.client?.email}</p>
            <p><span className="font-medium">تاريخ التسجيل:</span> {data?.client?.created}</p>
            <p><span className="font-medium">الحالة:</span> {data?.client.is_active ? "مفعل" : "غير مفعل"}</p>
          </div>

          <div className="bg-[#f3f4f6] p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-[#374151]">الاشتراك</h2>
            <p><span className="font-medium">الباقة:</span> {data?.subscription?.plan?.title}</p>
            <p><span className="font-medium">الحالة:</span> {data?.subscription?.status}</p>
            <p><span className="font-medium">نوع الاشتراك:</span> {data?.subscription?.type}</p>
            <p><span className="font-medium">البداية:</span> {data?.subscription?.start_date}</p>
            <p><span className="font-medium">النهاية:</span> {data?.subscription?.end_date}</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f3f4f6] p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-[#374151]">الكوبون</h2>
            <p><span className="font-medium">الرمز:</span> {data?.coupon?.code}</p>
            <p><span className="font-medium">القيمة:</span> {data?.coupon?.value} د.ع</p>
          </div>

          <div className="bg-[#f3f4f6] p-4 rounded-lg">
            <h2 className="font-semibold mb-2 text-[#374151]">الدفع</h2>
            <p><span className="font-medium">المبلغ المدفوع:</span> {data?.amount_paid} د.ع</p>
            <p><span className="font-medium">نوع الدفع:</span> {data?.meta_data?.paymentType}</p>
            <p><span className="font-medium">التاريخ:</span> {data?.meta_data?.creationDate}</p>
            <p><span className="font-medium">البطاقة:</span> {data?.meta_data?.details?.maskedPan}</p>
          </div>
        </section>

        <section className="bg-[#f3f4f6] p-4 rounded-lg">
          <h2 className="font-semibold mb-2 text-[#374151]">تفاصيل العملية</h2>
          <p><span className="font-medium">العملة:</span> {data?.meta_data?.currency}</p>
          <p><span className="font-medium">نظام الدفع:</span> {data?.meta_data?.details.paymentSystem}</p>
          <p><span className="font-medium">Authorization ID:</span> {data?.meta_data?.details.authId}</p>
          <p><span className="font-medium">RRN:</span> {data?.meta_data.details?.rrn}</p>
          <p><span className="font-medium text-[#16a34a]">الحالة: ناجحة ✅</span></p>
        </section>
      </div>
      </div>
 
  );
}

export default withAuth(Page);
