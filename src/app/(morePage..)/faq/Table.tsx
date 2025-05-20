"use client";
import useGet from "@/app/components/hooks/useGet";
import Image from "next/image";
import Pagination from "../../components/pageination/Pageination";
import { useRouter, useSearchParams } from "next/navigation";
import TableMobile from "./TableMobile";
import useDelete from "@/app/components/hooks/useDelete";
import Swal from "sweetalert2";
import Link from "next/link";

export const Table = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, loading } = useGet<any>(`${url}/faq`);

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
  const { remove, response } = useDelete();
  const handleDelete = (id: string) => {
    const deleteUrl = `${url}/faq/${id}`;
    remove(deleteUrl);

    Swal.fire({
      title: `${response.toString()}`,
      text: "تم الحذف بنجح",
      timer: 2000,
    }).then(() => {
      window.location.href = "/faq";
    });
  };

  return (
    <div dir="rtl" className="container w-full mx-auto px-4 py-12">
      <div className="w-full overflow-x-auto hidden md:block ">
        <table className="w-full border border-gray-300 rounded-2xl shadow-lg">
          <thead className="bg-[#0177FB] h-[60px] text-white">
            <tr className="text-center text-lg sm:text-xl">
              <th className="px-4 py-2">الاسم</th>
              <th className="px-4 py-2">الوصف</th>
              <th className="px-4 py-2">الصورة</th>
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
              currentItems.map((faq, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 text-center text-base sm:text-lg"
                >
                  <td className="px-4 py-2">{faq.title}</td>
                  <td className="px-4 py-2">{faq.description}</td>
                  <td className="px-4 py-2">
                    {faq.media_url ? (
                      <img
                        width={50}
                        height={50}
                        alt="img"
                        src={faq.media_url}
                      />
                    ) : (
                      "لا توجد صورة"
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                   <Link href={`/faq/update/${faq.id}`} >
                      <button  className="bg-[#0177FB] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                        تعديل
                      </button></Link>
                      <button
                        onClick={() => handleDelete(faq.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                      >
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
      <TableMobile currentItems={currentItems} handleDelete={handleDelete} />
      {/*  Pagination Buttons */}
      <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};
