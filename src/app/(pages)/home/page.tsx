"use client";

import Link from "next/link";
import { CardHome } from "@/app/components/ui/Cards";
import coupon from "./../../../../public/icons/Discount.png";
import Package from "./../../../../public/icons/Vector.png";
import order from "./../../../../public/icons/ORDER.png";
import { Table } from "./Table";
import { PlanChart } from "./Plan";
import { withAuth } from "@/app/components/withAuth";
import { getDecryptedToken } from "@/app/components/hooks/useDelete";
const dashboardItems = [
  {
    title: "إدارة الخصومات",
    description: "عرض اضافة الخصومات .",
    icon: coupon,

    href: "/coupon",
  },
  {
    title: "إدارة الدفعات",
    description: " التفاصيل ومراقبة الدفعات.",
    icon: order,
    href: "/payment",
  },
  {
    title: "إدارة الاشتراكات",
 description: "تعديل التفاصيل ومراقبة الاشتراكات.",
    icon: Package,
    href: "/subscription",
  },
];

 function Page() {
const token =getDecryptedToken()
console.log(token)
  return (
    <div dir="rtl" className="p-6 space-y-6">
      <div className="grid container W-[100%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <CardHome
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
            />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Table />
        <PlanChart />
      </div>
    </div>
  );
}
export default withAuth(Page)