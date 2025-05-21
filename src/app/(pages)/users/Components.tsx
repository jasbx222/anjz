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
         
        </div>
  )
}

export default Search




