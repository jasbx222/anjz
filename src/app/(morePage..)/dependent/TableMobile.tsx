"use client";
import { MediaItem } from "./page";
import { RefreshCw } from "lucide-react";
import Link from "next/link";

type Props = {
  currentItems: MediaItem[];
  ActiveOrNot: (id: string) => void;
  toggleLoading: string | null;
};

const TableMobile = ({ currentItems, ActiveOrNot, toggleLoading }: Props) => {
  return (
    <div className="md:hidden flex flex-col gap-4 mt-6">
      {currentItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-6">
          لا توجد بيانات حالياً.
        </div>
      ) : (
        currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-[#0177FB]">{item.name}</h2>
              <span
                className={`text-sm font-medium ${
                  item.is_active ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.is_active ? "نشط" : "غير نشط"}
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <div>
                <span className="font-medium">البريد الإلكتروني:</span> {item.email}
              </div>
              <div>
                <span className="font-medium">الهاتف:</span> {item.phone}
              </div>
              <div>
                <span className="font-medium">العنوان:</span> {item.adress}
              </div>
              <div>
                <span className="font-medium">التخصص:</span> {item.role}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Link href={`/dependent/show/${item.id}`} className="w-full">
                <button className="w-full bg-[#0177FB] text-white text-sm py-2 rounded-full hover:bg-blue-800 transition">
                  تفاصيل
                </button>
              </Link>

              <button
                onClick={() => ActiveOrNot(item.id)}
                disabled={toggleLoading === item.id}
                className="w-full flex items-center justify-center gap-1 bg-yellow-500 text-white text-sm py-2 rounded-full hover:bg-yellow-600 transition"
              >
                {toggleLoading === item.id ? (
                  <RefreshCw className="animate-spin w-4 h-4" />
                ) : (
                  <span>{item.is_active ? "تعطيل" : "تفعيل"}</span>
                )}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TableMobile;
