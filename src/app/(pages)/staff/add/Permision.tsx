
import React from "react";
interface Props{
  permision:string[]
}
// قائمة الصلاحيات

const Permision = ({permision}:Props) => {
  // الدالة لإعداد البيانات من النموذج عند تقديمه


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
 
        {permision.map((perm, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="permision" // تأكد من أن جميع checkboxes تحمل نفس الاسم
              value={perm} // تعيين القيمة لكل checkbox
              className="accent-[#41BC4C] w-4 h-4"
            />
            <span>{perm}</span>
          </label>
        ))}
     
 
    </div>
  );
};

export default Permision;
