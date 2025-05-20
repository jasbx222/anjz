import {
  ChartArea,
  FileQuestion,
  House,
  ListOrdered,
  LogOut,
  Package,
  ShieldUser,
  Users,
} from "lucide-react";

export const mainLinks = [
  { label: "الرئيسية", icon: <House />, href: "/home" },
  { label: "إدارة الباقات", icon: <Package />, href: "/Packages" },
  { label: "إدارة الاسئلة ", icon: <FileQuestion />, href: "/faq" },

  { label: "إدارة التقارير", icon: <ChartArea />, href: "/reports" },
  { label: "إدارة المستخدمين", icon: <Users />, href: "/users" },
  { label: " ادارة الموظفين", icon: <ShieldUser />, href: "/staff" },
];

export const moreLinks = [
  { label: "تسجيل الخروج", icon: <LogOut />, href: "/logout" },
];
