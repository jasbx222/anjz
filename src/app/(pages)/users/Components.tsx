import React from 'react'

const Search = ({
    onChange,
    value,

}:any) => {
  return (
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="البحث عن مستخدم"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <button  className="bg-[#0177FB] text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            بحث
          </button>
        </div>
  )
}

export default Search





export const Clear = () => {
  return (
  <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <option value="">تصفية حسب</option>
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
            <option value="all">الكل</option>
          </select>
          <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            تصفية
          </button>
        </div>
  )
}
