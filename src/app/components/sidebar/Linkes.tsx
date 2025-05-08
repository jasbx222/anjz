import {
  Armchair,
  BoxIcon,
  ChartArea,
  House,
  LogOut,
  NotebookPenIcon,
  Package,
  Settings,
  ShieldUser,
  StarOff,
  Users,
} from "lucide-react";
 


export const mainLinks = [
  { label: "الرئيسية", icon: <House />, href: "/home" },
  { label: "إدارة الباقات", icon: <Package />, href: "/Packages" },
  { label: "إدارة الطلبات", icon: <Armchair />, href: "/order" },

  { label: "إدارة التقارير", icon: <ChartArea />, href: "/reports" },
  { label: "إدارة المستخدمين", icon: <Users />, href: "/users" },
  { label: " ادارة الموظفين", icon: <ShieldUser />, href: "/staff" },
];

export const moreLinks = [
  { label: "تسجيل الخروج", icon: <LogOut />, href: "/logout" },



];
