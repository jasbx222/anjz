"use client";
import useGet from "@/app/components/hooks/useGet";
import Pagination from "../../components/pageination/Pageination";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { withAuth } from "@/app/components/withAuth";
import { useState } from "react";
import { RefreshCw } from "lucide-react";
import TableMobile from "./TableMobile";
export type MediaItem = {
  id: any;
  title: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  adress: string;
  is_active: boolean;
};

const Page = () => {
  const searchParams = useSearchParams();
  const [toggleLoading, setToggleLoading] = useState<string | null>(null);

  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useGet<MediaItem>(`${url}/client-dependent`);

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
  const handleToggleStatus = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      setToggleLoading(id);
      await fetch(`${url}/client-dependent/${id}/toggle-active`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error("فشل التبديل:", error);
    } finally {
      setToggleLoading(null);
    }
  };

  return (
    <div dir="rtl" className="container w-full mx-auto px-4 py-12">
      <div className="w-full overflow-x-auto hidden md:block ">
        <table className="w-full  border border-gray-300 rounded-2xl shadow-lg">
          <thead className="bg-[#0177FB] rounded-2xl h-[60px] text-white">
            <tr className="text-center text-lg sm:text-xl">
              <th className="px-4 py-2">الاسم</th>
              <th className="px-4 py-2">الايميل</th>
              <th className="px-4 py-2">الهاتف</th>
              <th className="px-4 py-2">العنوان</th>
              <th className="px-4 py-2">التخصص</th>
              <th className="px-4 py-2">نشط</th>
              <th className="px-4 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-blue-500 text-xl"
                >
                  جاري تحميل البيانات...
                </td>
              </tr>
            ) : currentItems.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500 text-xl"
                >
                  لا توجد نتائج حالياً.
                </td>
              </tr>
            ) : (
              currentItems.map((client, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 text-center text-base sm:text-lg"
                >
                  <td className="px-4 py-2">{client.name}</td>
                  <td className="px-4 py-2">{client.email}</td>
                  <td className="px-4 py-2">{client.phone}</td>
                  <td className="px-4 py-2">{client.adress}</td>
                  <td className="px-4 py-2">{client.role}</td>
                  <td
                    className={`px-4 py-2 ${
                      client.is_active ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {client.is_active ? "نشط" : "غير نشط"}
                  </td>

                  <td className="px-4 py-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                      <Link href={`/dependent/show/${client.id}`}>
                        <button className="flex items-center gap-1 text-sm bg-[#0177FB] text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition">
                          تفاصيل
                        </button>
                      </Link>

                      <button
                        onClick={() => handleToggleStatus(client.id)}
                        disabled={toggleLoading === client.id}
                        className="flex items-center gap-1 text-sm bg-yellow-500 text-white px-4 py-1.5 rounded-full hover:bg-yellow-600 transition"
                      >
                        {toggleLoading === client.id ? (
                          <RefreshCw className="animate-spin w-4 h-4" />
                        ) : (
                          <span>{client.is_active ? "تعطيل" : "تفعيل"}</span>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* <TableMobile currentItems={currentItems} handleDelete={handleDelete} />/ */}
      <TableMobile
        currentItems={currentItems}
        ActiveOrNot={handleToggleStatus}
        toggleLoading={toggleLoading}
      />
      {/*  Pagination Buttons */}
      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
export default withAuth(Page);
