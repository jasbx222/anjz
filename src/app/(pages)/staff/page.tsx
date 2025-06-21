"use client";
import { Plus } from "lucide-react";
import { Table } from "./Table";
import { useState } from "react";
import { withAuth } from "@/app/components/withAuth";
import AddEmployeeModal from "./add/AddEmployeeModal";
import useGet from "@/app/components/hooks/useGet";
import { EmpolyesData } from "@/app/models/types.";
// import AddEmployeeModal from './add/AddEmployeeModal'
function Page() {
  const [isOpen,onClose]=useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const handleShow=()=>{
    onClose(!isOpen)
  }
  const {refetch,data}=useGet<any>(`${url}/employee`)
  return (
    <div dir="rtl" className="relative mt-10 container w-[100%] px-4 lg:px-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
     
          <button onClick={handleShow} className="bg-[#41BC4C] text-white flex justify-center items-center p-4 rounded w-[150px] text-center shadow-md hover:bg-green-600 transition ">
            اضافة موظف
            <Plus className="ml-2" />
          </button>
    
      </div>
    {  isOpen ? <AddEmployeeModal isOpen={isOpen} refetch={refetch} onClose={handleShow}/> :  ''}
      {/* <Suspense fallback={<div></div>}> */}
       <Table refetch={refetch} data={data} />
      {/* </Suspense> */}
    </div>
  );
}
export default withAuth(Page);
