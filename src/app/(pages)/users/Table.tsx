import useGet from "@/app/components/hooks/useGet";

export const Table = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useGet<any>(`${url}/client`);
  return (
    <div dir="rtl" className="container w-full mx-auto px-4 py-12">
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-2xl shadow-lg">
          <thead className="bg-[#0177FB] h-[60px] text-white">
            <tr className="text-center text-lg sm:text-xl">
              <th className="px-4 py-2">اسم المستخدم</th>
              <th className="px-4 py-2">الإيميل</th>
              <th className="px-4 py-2">المهنة</th>
              <th className="px-4 py-2">تاريخ الانشاء</th>
              <th className="px-4 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-red-500 text-xl"
                >
                  جاري تحميل البيانات...
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500 text-xl"
                >
                  جاري تحميل البيانات...
                </td>
              </tr>
            ) : (
              data.map((user, index) => (
                <tr
                  key={index}
                  className=" hover:bg-gray-100 text-center text-base sm:text-lg"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.job}</td>
                  <td className="px-4 py-2">{user.created}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                      <button className="bg-[#0177FB] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                        تعديل
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">
                        حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
