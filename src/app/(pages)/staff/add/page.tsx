"use client";
import Input from "./Inputs";
import Permision from "./Permision";
import { AddStaff } from "./UseAddEmpolyed";

const permision = [
  "إدارة المستخدمين",
  "إدارة الباقات",
  "إدارة المحتوى",
  "عرض الإحصائيات",
  "إعدادات النظام",
  "الدعم الفني",
];

export default function Page() {
  // الدالة للتعامل مع تقديم النموذج
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement); // جمع بيانات النموذج

    // إرسال البيانات عبر دالة AddStaff
    await AddStaff(formData);
  };

  return (
    <div className="bg-white rounded-xl border border-[#0177FB] p-6 max-w-4xl mx-auto shadow-md mt-10">
      <h2 className="text-2xl font-bold text-right text-[#0177FB] mb-6">
        إضافة موظف جديد
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input label="اسم الموظف" type="text" name="name" />
          <Input label="ايميل الموظف" type="email" name="email" />
          <Input label="رقم الموظف" type="text" name="phone" />
          <Input label="اسم القسم" type="text" name="department" />
        </div>

        <h3 className="text-right font-semibold text-[#0177FB] mb-3">
          تحديد الصلاحيات
        </h3>

        <Permision permision={permision} />

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#41BC4C] text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            حفظ الموظف
          </button>
        </div>
      </form>
    </div>
  );
}
