import useGet from '@/app/components/hooks/useGet';
import Pagination from '@/app/components/pageination/Pageination';
import LoadingThreeDotsJumping from '@/app/components/ui/Loading';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
interface Items{
    
    name:string;
    email:string;
    jop:string
}
interface ProductData {
name:string,
job:string |null;
email:string;
item:Items[]

}


export const Table = () => {
  const {data,loading}=useGet<ProductData>(`${process.env.NEXT_PUBLIC_BASE_URL}/client`)
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
       <div className="  border border-[#0014463d] bg-[#D8E9F0] rounded-lg shadow p-4 overflow-x-auto">
          <h1 className='text-right text-xl'>
            العملاء
            </h1>
          {
            currentItems.length<=0 ? (<LoadingThreeDotsJumping/>):(<table className="w-full text-sm text-left rtl:text-right text-gray-700">
            <thead className="text-xs text-gray-500 uppercase ">
              <tr>
                <th className="px-6 py-3"> اسم العميل</th>
                <th className="px-6 py-3">الايميل</th>
                <th className="px-6 py-3">المهنة</th>
                
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((item:ProductData, idx) => (
                <tr key={idx} className=" ">
                  <td className="px-6 py-4 font-medium whitespace-nowrap">{item.name}</td>
        
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.job}</td>
                </tr>
              ))}
            </tbody>
          </table>)
          }
        
   {
            currentItems.length<=0 ?'': <Pagination
        goToPage={goToPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
        }
        </div>
  )
}






