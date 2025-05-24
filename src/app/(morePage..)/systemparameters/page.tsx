'use client'
import React from "react"
import { Table } from "./Table"
import { AppSettings } from "@/app/models/types."
import useGetSysParam from "@/app/components/hooks/useGetSysParam"
import { withAuth } from "@/app/components/withAuth"
const Page = () => {
    const {data}=useGetSysParam<any>(`${process.env.NEXT_PUBLIC_BASE_URL}/system-parameter/`)
    console.log(data)
    if(!data)return <div>loading ....</div>
  return (
    <div>
        <Table data={data}/>
    </div>
  )
}

export default withAuth(Page)