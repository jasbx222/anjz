import { Inputs } from "./Inputs";
export default function Page() {
  return (
    <div
      dir="rtl"
      className="bg-white container w-[100%] rounded-2xl  p-6   max-w-5xl mx-auto"
    >
      <div className=" grid grid-cols-1  container W-[100%] md:grid-cols-1 gap-4 mb-6   *:">
        <div className="flex items-center  gap-6 mb-6">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">jassim mohamed </h2>

            <p className="text-gray-600">jassim@email.com </p>
            <p className="text-gray-600">078445741747 </p>
            <p className="text-gray-600">{new Date().toLocaleDateString()}</p>

          </div>
        </div>

        <div>
          <Inputs label="اسم المستخدم" type="text" name="اسم المستخدم" />
          <Inputs
            label="البريد الالكتروني"
            type="email"
            name="البريد الالكتروني"
          />
          <Inputs label="رقم الجوال" type="text" name="رقم الجوال" />
        </div>
        <div className="flex gap-5 mt-4 mb-6">
       
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}
