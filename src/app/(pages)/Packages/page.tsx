'use client'
import React, { Suspense, useState } from "react";
import { Add, SearchInput } from "./Add";
import { Table } from "./Table";
import useGet from "@/app/components/hooks/useGet";
import TableMobile from "./TableMobile";
import { withAuth } from "@/app/components/withAuth";

const Page = () => {
  const [query, setQuery] = useState("");
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data } = useGet<any>(`${url}/plan`);

const filterPlan = data.filter((plan) => plan.title.toLowerCase().includes(query.toLowerCase()));
 
return (
    <div dir="rtl" className="container mx-auto px-4 py-8 flex flex-col justify-center items-center w-full gap-8">
    
        {/* <Add /> */}
        <SearchInput
        placeholder="ابحث عن باقة"
          onChange={(e: any) => setQuery(e.target.value)}
          value={query}
        />
     

 

        <Suspense fallback={<div></div>}>
             <Table  filterPlan={filterPlan} />
        </Suspense>
        <Suspense fallback={<div></div>}>
             <TableMobile  filterPlan={filterPlan} />
        </Suspense>
    </div>
  );
};
export default withAuth(Page)
