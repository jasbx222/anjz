"use client";
import React from "react";
import Link from "next/link";
import { Plan, PlanDetailes } from "@/app/models/types.";

interface Props {
  currentItems: PlanDetailes[];
}

const ForMobilePlans: React.FC<Props> = ({ currentItems }) => {
  return (
    <div className="md:hidden grid gap-4 px-4">
      {currentItems.map((plan, index) => (
        <div key={index} className="border rounded-xl shadow p-4 bg-white">
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600 font-semibold">اسم الباقة:</span>
            <span>{plan.title}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="text-gray-600 font-semibold">عدد المشتركين:</span>
            <span>{plan.dependents_count}</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span className="text-gray-600 font-semibold">السعر:</span>
            <span>{plan.price}</span>
          </div>
          <Link href={`/reports/show/${plan.id}`}>
            <button className="w-full bg-[#41BC4C] text-white py-2 rounded-lg">
              تقرير الباقة
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ForMobilePlans;
