"use client";
import { useState, ChangeEvent } from "react";
import Search from "./Components";
import { Table } from "./Table";
import useGet from "@/app/components/hooks/useGet";
import { ClientTableMobile } from "./TableMobile";
import { withAuth } from "@/app/components/withAuth";
interface Obj {
  name: string;
}
const Page = () => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;

    const { data, loading } = useGet<any>(`${url}/client`);
  const [query, setQ] = useState<string>("");


    
    const filterResult = data.filter((us) =>
      us.name.toLowerCase().includes(query.toLowerCase())
    );
    
 

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 flex flex-col justify-center items-center w-full gap-8">
     
  <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">


      <Search onChange={(e:any)=>setQ(e.target.value)} value={query} />

  </div>
 

      <Table data={filterResult} loading={loading} />
      <div>
        <ClientTableMobile data={ filterResult} loading={loading} />
        </div>
    </div>
  );
};

export default withAuth(Page)