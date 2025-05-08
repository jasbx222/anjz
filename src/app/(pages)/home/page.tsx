import React from "react";
import Link from "next/link";

import { CardHome } from "@/app/components/ui/Cards";
import cart from './../../../../public/icons/userIcons.png'
import Package from './../../../../public/icons/CART.png'
import order from './../../../../public/icons/ORDER.png';
import Table from "../orders/Table";

const dashboardItems = [
  {
    title: "إدارة المستخدمين",
    description: "عرض وتعديل حالة الحسابات.",
    icon: cart,
    href: "/dashboard/users",
  },
  {
    title: "إدارة الباقات",
    description: "تعديل التفاصيل ومراقبة الاشتراكات.",
    icon: order,
    href: "/dashboard/packages",
  },
  {
    title: "إدارة الطلبات",
    description: "عرض تفاصيل الطلبات والمستخدمين.",
    icon: Package,

    href: "/dashboard/orders",
  },



];

export default function Page() {
  return (
    <div className="p-6 space-y-6">

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
      <Table/>
      
      

    </div>
  );
}
