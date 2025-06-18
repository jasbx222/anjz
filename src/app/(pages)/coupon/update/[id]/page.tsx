"use client";
import { X } from "lucide-react";
import React, { FormEvent, useState } from "react";
import Input from "../../add_new/Input";
import { url } from "@/app/models/types.";
import useUpdate from "@/app/components/hooks/useUpdate";
import { useParams } from "next/navigation";
import { withAuth } from "@/app/components/withAuth";
import { toast } from "react-toastify";

function Page() {
  const [code, setCode] = useState("");
  const [value, setVal] = useState("");
  const [max_usage_count, setMax_usage] = useState("");
  const [started_at, setStartAt] = useState("");
  const [expired_at, setExAt] = useState("");
  const { id } = useParams();
  const paylod = {
    code,
    value,
    max_usage_count,
    started_at,
    expired_at,
  };

  const { update, response, loading } = useUpdate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await update(`${url}/coupon/${id}`, paylod);
       toast('تمت العملية بنجاح');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative space-y-6"
        dir="rtl"
      >
        {/* العنوان */}
        <h2 className="text-2xl font-bold text-center text-blue-700">
          تعديل كوبون الخصم
        </h2>

        {/* رسالة الاستجابة */}
        {response && (
          <div
            className={`text-center p-2 rounded-lg text-sm font-semibold ${
              response.startsWith("تمت")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {response}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="رمز الكوبون"
            onChange={(e: any) => setCode(e.target.value)}
            value={code}
            required={false}
            type="text"
            placeholder="مثال: SAVE2025"
          />

          <Input
            label="قيمة الخصم"
            onChange={(e: any) => setVal(e.target.value)}
            value={value}
            required={false}
            type="text"
            placeholder="مثال: 5000 د.ع"
          />

          <Input
            label="الحد الأقصى للاستخدام"
            onChange={(e: any) => setMax_usage(e.target.value)}
            value={max_usage_count}
            required={false}
            type="number"
            placeholder="مثال: 10"
          />

          <Input
            label="تاريخ بداية الصلاحية"
            onChange={(e: any) => setStartAt(e.target.value)}
            value={started_at}
            required={false}
            type="date"
            placeholder=""
          />

          <Input
            label="تاريخ انتهاء الصلاحية"
            onChange={(e: any) => setExAt(e.target.value)}
            value={expired_at}
            required={false}
            placeholder=""
            type="date"
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "جاري التعديل..." : "تعديل الكوبون"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default withAuth(Page);
