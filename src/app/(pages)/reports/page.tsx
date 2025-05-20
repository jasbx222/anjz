"use client";
import React from "react";
import Cards from "./Cards";
import users from "./../../../../public/icons/users.png";
import selling from "./../../../../public/icons/seling.png";
import rev from "./../../../../public/icons/revenuse.png";
import { StaticImageData } from "next/image";
import { DataCards } from "@/app/models/types.";
import useGetReport from "@/app/components/hooks/useGetReport";

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
          color: "bg-blue-500",
          icon: users,
        },
        {
          title: "الإيرادات",
          value: data.revenues_sum,
          color: "bg-red-500",
          icon: rev,
        },
        {
          title: "عدد المعالين",
          value: data.dependents_count,
          color: "bg-yellow-500",
          icon: selling,
        },
        {
          title: "الوسائط",
          value: data.media_count,
          color: "bg-green-500",
          icon: selling, // يمكنك استبدالها بأيقونة مختلفة إن وجدت
        },
      ]
    : [];
  console.log(dataCards);
  return (
    <div dir="rtl" className="container mx-auto w-full bg-white/90 p-4 rounded-xl shadow-lg">
      {loading ? (
        <p className="text-center text-gray-500">جارٍ التحميل...</p>
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
    </div>
  );
};

export default Page;
