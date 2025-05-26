"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Pencil } from "lucide-react";
import useShow from "@/app/components/hooks/useShow";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";
import { PlanResponse } from "@/app/models/types.";

const COLORS = ["#41BC4C", "#0177FB"];

const Page = () => {
  const { id } = useParams();
  const { data } = useShow<PlanResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/report/plan`,
    id
  );

  if (!data) {
    return (
      <div className="text-center text-red-600 mt-10">
        لم يتم العثور على الباقة
      </div>
    );
  }

  const { plan_info, clients_count, revenues_sum } = data;

  const usersData = [
    { name: "العملاء", value: clients_count },
    { name: "المشتركين", value: Number(plan_info.dependents_count) },
  ];

  const financialData = [
    { name: "السعر", value: Number(plan_info.price) },
    { name: "الإيرادات", value: revenues_sum },
  ];

  return (
    <div
      dir="rtl"
      className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{plan_info.title}</h1>
        <Link
          href={`/Packages/update/${plan_info.id}`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Pencil className="w-4 h-4" />
          تعديل الباقة
        </Link>
      </div>

      {/* Pie Chart: المستخدمين */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          توزيع المستخدمين
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={usersData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {usersData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: السعر والإيرادات */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          البيانات المالية
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#41BC4C" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* الميزات */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">المميزات:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {plan_info.features.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul>
      </div>

      {/* الوصف */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">الوصف:</h2>
        <p className="text-gray-800">{plan_info.description}</p>
      </div>
    </div>
  );
};

export default Page;
