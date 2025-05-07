import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Esther Howard",
    description: "Artal",
    invoice: "#23",
    date: "23 Dec 2020",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Esther Howard",
    description: "Artal",
    invoice: "#23",
    date: "23 Dec 2020",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Esther Howard",
    description: "Artal",
    invoice: "#23",
    date: "23 Dec 2020",
    avatar: "/avatar3.jpg",
  },
  {
    id: 4,
    name: "Esther Howard",
    description: "Artal",
    invoice: "#23",
    date: "23 Dec 2020",
    avatar: "/avatar4.jpg",
  },
  {
    id: 5,
    name: "Esther Howard",
    description: "Artal",
    invoice: "#23",
    date: "23 Dec 2020",
    avatar: "/avatar5.jpg",
  },
];

 const Table = () => {
  return (
    <div className="rounded-xl border  container w-[100%] border-blue-200 overflow-hidden">
      <table className="min-w-full text-sm text-right">
        <thead className="bg-blue-600 text-white text-sm font-semibold">
          <tr>
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">اسم المستخدم</th>
            <th className="py-3 px-4">رقم الفاتورة</th>
            <th className="py-3 px-4">تاريخ الإنشاء</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="py-3 px-4 text-gray-700 font-medium">{index + 1}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
               
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 font-semibold text-gray-700">{item.invoice}</td>
              <td className="py-3 px-4 text-gray-500">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
