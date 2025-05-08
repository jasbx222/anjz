
import Input from "./Inputs";
import Permision from "./Permision";

export default function Page() {


  return (
    <div className="bg-white rounded-xl border border-[#0F5BFF] p-6 max-w-4xl mx-auto shadow-md mt-10">
      <h2 className="text-2xl font-bold text-right text-[#0F5BFF] mb-6">إضافة موظف جديد</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input label="اسم الموضف" type="text" name="name"/>
        <Input label="ايميل الموضف" type="text" name="name"/>
        <Input label="رقم الموضف" type="text" name="name"/>
        <Input label="اسم الموضف" type="text" name="name"/>


      
      </div>

      <h3 className="text-right font-semibold text-[#0F5BFF] mb-3">تحديد الصلاحيات</h3>
    
    <Permision/>

      <div className="flex justify-end">
        <button className="bg-[#41BC4C] text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
          حفظ الموظف
        </button>
      </div>
    </div>
  );
}
