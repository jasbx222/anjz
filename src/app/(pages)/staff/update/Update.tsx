import { X } from "lucide-react";
import React from "react";
import { Input } from "./Inputs";
const Update = ({ editingEmp }: any) => {
  const handleHide = () => {
    editingEmp(false);
  };
  return (
    <div className="fixed inset-0 bg-update-staff   bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
          onClick={handleHide}
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-[#0177FB]">تعديل الموظف</h2>

        <div className="space-y-4">
          <Input label="ss" name="s" type="text" />
          <Input label="ss" name="s" type="text" />
          <Input label="ss" name="s" type="text" />
          <Input label="ss" name="s" type="text" />

          <button className="w-full bg-[#41BC4C] text-white py-2 rounded-lg hover:bg-green-600 transition">
            حفظ التعديلات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
