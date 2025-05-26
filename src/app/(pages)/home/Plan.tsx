'use client';

import useGetPlanReport from "@/app/components/hooks/useGetPlanTable";
import LoadingThreeDotsJumping from "@/app/components/ui/Loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
interface PlanType {
  title: string;
  price: string | null;
  size: string;
  dependents_count: string;

}

export const PlanChart= () => {
  const { data, loading } = useGetPlanReport<PlanType[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/plan`
  );

  if (loading) return <LoadingThreeDotsJumping />;
  if (!Array.isArray(data)) return null;

  // 🔢 تجهيز البيانات للرسم البياني
  const chartData = data.map((plan:any) => ({
    title: plan.title,
    subscribers: parseInt(plan.dependents_count || "0"),
  }));

  return (
    <div className="border -z-10 border-[#0014463d] bg-[#D8E9F0] rounded-lg shadow p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-700">عدد المشتركين لكل باقة</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="title" type="category" />
          <Tooltip />
          <Bar dataKey="subscribers" fill="#41BC4C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
