"use client";
import React from "react";
import Cards from "./Cards";
import users from "./../../../../public/icons/users.png";
import selling from "./../../../../public/icons/seling.png";
import rev from "./../../../../public/icons/revenuse.png";
import { StaticImageData } from "next/image";
import { DataCards } from "@/app/models/types.";
import useGetReport from "@/app/components/hooks/useGetReport";
import { withAuth } from "@/app/components/withAuth";
import { Table } from "./Table";
const url = process.env.NEXT_PUBLIC_BASE_URL;

export interface CardData {
  title: string;
  value: number;
  color: string;
  icon: StaticImageData;
}

const Page: React.FC = () => {
  const { data, loading } = useGetReport<DataCards>(`${url}/report/counter`);

  const dataCards: CardData[] = data
    ? [
        {
          title: "العملاء",
          value: data.clients_count,
          color: "bg-[#0177FB]",
          icon: users,
        },
        {
          title: "الإيرادات",
          value: data.revenues_sum,
          color: "bg-[#FF1752]",
          icon: rev,
        },
        {
          title: "عدد المشتركين",
          value: data.dependents_count,
          color: "bg-[#FFB000]",
          icon: selling,
        },
        {
          title: "الوسائط",
          value: data.media_count,
          color: "bg-[#4FCB5A]",
          icon: selling,
        },
      ]
    : [];
 
  return (
    <div dir="rtl" className="container mx-auto w-full bg-white/90 p-4 rounded-xl shadow-lg">
      {loading ? (
  <p>
  {""}
  </p>
      ) : data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataCards.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              color={card.color}
              icon={card.icon}
              value={card.value}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">لا توجد بيانات متاحة.</p>
      )}

      <Table/>
    </div>
  );
};

export default withAuth(Page)