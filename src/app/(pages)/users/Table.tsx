import Pagination from "@/app/components/pageination/Pageination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export const Table = ({ data, loading }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (!Array.isArray(data)) return null;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };
  return (
    <div
      dir="rtl"
      className="container hidden md:block w-full mx-auto px-4 py-5"
    >
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
              currentItems.map((user: any) => (
                <tr
                  key={user.id}
                  className=" hover:bg-gray-100 text-center text-base sm:text-lg"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.job}</td>
                  <td className="px-4 py-2">{user.created}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                      <Link href={`/users/show/${user.id}`}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">
                          تفاصيل
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Pagination
          goToPage={goToPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
