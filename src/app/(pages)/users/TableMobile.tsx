import Pagination from "@/app/components/pageination/Pageination";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

type Client = {
  id: string;
  name: string;
  email: string;
  job: string;
};

type Props = {
  data: Client[];
  loading: boolean;
};

export const ClientTableMobile = ({ data, loading }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div dir="rtl" className="w-full md:hidden px-4 py-8 space-y-4">
      {loading ? (
        <div className="text-center text-blue-500 text-lg py-10">جاري تحميل البيانات...</div>
      ) : data.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">لا توجد بيانات.</div>
      ) : (
        currentItems.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl border border-gray-200 p-4 space-y-2"
          >
            <div className="text-sm text-gray-500">اسم العميل</div>
            <div className="text-lg font-semibold">{user.name}</div>

            <div className="text-sm text-gray-500 mt-2">البريد الإلكتروني</div>
            <div className="text-base">{user.email}</div>

            <div className="text-sm text-gray-500 mt-2">المهنة</div>
            <div className="text-base">{user.job}</div>

            <div className="mt-4 flex justify-end">
              <Link href={`/users/show/${user.id}`}>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
                  تفاصيل
                </button>
              </Link>
            </div>
          </div>
        ))
      )}

      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
