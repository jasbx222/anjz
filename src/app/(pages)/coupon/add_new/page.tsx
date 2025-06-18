"use client";
import { X } from "lucide-react";
import React, { FormEvent, useState } from "react";
import Input from "./Input";
import usePost from "@/app/components/hooks/usePost";
import { url } from "@/app/models/types.";

export default function FormCoupon({ add, setAdd }: any) {
  const [code, setCode] = useState("");
  const [value, setVal] = useState("");
  const [max_usage_count, setMax_usage] = useState("");
  const [started_at, setStartAt] = useState("");
  const [expired_at, setExAt] = useState("");
  const [res, setRes] = useState("");

  const paylod = {
    code,
    value,
    max_usage_count,
    started_at,
    expired_at,
  };

  const { add: add_new_coubon, response, loading } = usePost();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await add_new_coubon(`${url}/coupon`, paylod, false);
      setRes("✅ تم إضافة الكوبون بنجاح");
    } catch (error: any) {
      setRes("❌ فشل في إرسال البيانات: " + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative space-y-6"
        dir="rtl"
      >
        {/* زر إغلاق */}
        <button
          onClick={() => setAdd(!add)}
          className="absolute top-4 left-4 hover:bg-gray-200 p-2 rounded-full"
        >
          <X size={24} />
        </button>

        {/* العنوان */}
        <h2 className="text-2xl font-bold text-center text-blue-700">
          إضافة كوبون خصم
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
            required
            type="text"
            placeholder="مثال: SAVE2025"
          />

          <Input
            label="قيمة الخصم"
            onChange={(e: any) => setVal(e.target.value)}
            value={value}
            required
            type="text"
            placeholder="مثال: 5000 د.ع"
          />

          <Input
            label="الحد الأقصى للاستخدام"
            onChange={(e: any) => setMax_usage(e.target.value)}
            value={max_usage_count}
            required
            type="number"
            placeholder="مثال: 10"
          />

          <Input
            label="تاريخ بداية الصلاحية"
            onChange={(e: any) => setStartAt(e.target.value)}
            value={started_at}
            required
            type="date"
            placeholder=""
          />

          <Input
            label="تاريخ انتهاء الصلاحية"
            onChange={(e: any) => setExAt(e.target.value)}
            value={expired_at}
            required
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
              {loading ? "جاري الحفظ..." : "حفظ الكوبون"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
