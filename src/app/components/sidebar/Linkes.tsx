import {
  ChartArea,
  FileQuestion,
  House,
  NotebookPen,
  Package,
  ShieldUser,
  Users,
} from "lucide-react";

export const mainLinks = [
  { label: "الرئيسية", icon: <House />, href: "/home" }, 
  { label: "إدارة الباقات", icon: <Package />, href: "/Packages", role: "plan_management" },
  { label: "إدارة الاسئلة", icon: <FileQuestion />, href: "/faq", role: "faq_management" },
  { label: "إدارة التقارير", icon: <ChartArea />, href: "/reports", role: "report_management" },
  { label: "إدارة المستخدمين", icon: <Users />, href: "/users", role: "client_management" },
  { label: "ادارة الموظفين", icon: <ShieldUser />, href: "/staff", role: "employee_management" },
  { label: "ادارة الاشتراكات", icon: <NotebookPen />, href: "/subscription", role: "subscription_management" },
];
