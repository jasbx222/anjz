"use client";
import React from "react";
import { Table } from "./Table";
import useGetSysParam from "@/app/components/hooks/useGetSysParam";
import { withAuth } from "@/app/components/withAuth";
import Link from "next/link";
import { Pencil } from "lucide-react";
import CircleLoadier from "@/app/components/ui/CircleLoadier";
import { AppSettings } from "@/app/models/types.";
const Page = () => {
  const { data } = useGetSysParam<AppSettings>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/system-parameter`
  );

  if (!data) return <CircleLoadier />;
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Link
          href={`/systemparameters/update/1`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Pencil className="w-4 h-4" />
          تعديل
        </Link>
        <div>{""}</div>
      </div>
      <Table data={data} />
    </div>
  );
};

export default withAuth(Page);
