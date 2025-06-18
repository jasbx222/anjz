import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Header } from "./components/header/Header";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "لوحة التحكم",
  description: "نظام إدارة الاشتراكات",
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ar" dir="rtl">
      <body
      dir="rtl"
        className={`${geistSans.variable} ${geistMono.variable} 

          antialiased bg-gray-100 min-h-screen flex flex-row-reverse`}
      >



        
        {/* Sidebar ثابت على اليمين */}
        <div className="">
          <Sidebar />
        </div>

        {/* محتوى الصفحة يزاح لليسار بوجود السايدبار */}
        <div className="flex-1 md:mr-32  p-4">
          <Header />
          
          <main className="mt-4">
   
      {children}
          <ToastContainer />
         
            </main>
        </div>
      

      </body>
    </html>
  );
}