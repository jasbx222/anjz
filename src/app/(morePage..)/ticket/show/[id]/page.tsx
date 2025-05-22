"use client";

import usePutClosedMsg from "@/app/components/hooks/usePutClosedMsg";
import useShow from "@/app/components/hooks/useShow";
import { withAuth } from "@/app/components/withAuth";
import { FolderClosed } from "lucide-react";
import { useParams } from "next/navigation";

interface Message {
  id: number;
  message: string;
}

interface Client {
  id: number;
  name: string;
}

interface Ticket {
  id: number;
  status: string;
  client: Client;
  messages: Message[];
}

const Page: React.FC = () => {
  const { id } = useParams();
  const { update, response } = usePutClosedMsg();
  const { data, loading } = useShow<Ticket>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ticket`,
    id
  );

  if (loading)
    return (
      <div className="text-center text-gray-500 mt-10">
        جاري تحميل التذكرة...
      </div>
    );

  const handleClosed = () => {
    update(`${process.env.NEXT_PUBLIC_BASE_URL}/ticket/${id}/close`);
  };

  return (
    <div
      dir="rtl"
      className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg"
    >
      <h1 className="text-2xl font-bold text-[#0177FB] mb-6 text-right">
        تفاصيل التذكرة
      </h1>

      <div className="mb-6 text-right">
        <p>
          <span className="font-semibold text-gray-700">رقم التذكرة:</span> #
          {data?.id}
        </p>
        <p>
          <span className="font-semibold text-gray-700">اسم العميل:</span>{" "}
          {typeof data?.client?.name === "string"
            ? data.client.name
            : "اسم غير متوفر"}
        </p>
        <p>
          <span className="font-semibold text-gray-700">الحالة:</span>
          <span
            className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
              data?.status === "opened"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {data?.status === "opened" ? "مفتوحة" : data?.status}
          </span>
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl mb-8 max-h-96 overflow-y-auto border border-gray-200">
        <h2 className="font-bold mb-4 text-gray-700 text-right">الرسائل:</h2>
        {Array.isArray(data?.messages) && data.messages.length > 0 ? (
          data.messages.map((msg: Message) => (
            <div key={msg.id} className={`mb-4 p-3 rounded-lg `}>
              <p className="text-gray-800">{msg?.message ?? "null"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">لا توجد رسائل بعد.</p>
        )}
      </div>

      <button
        onClick={handleClosed}
        className="flex items-center gap-1 text-sm bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition"
      >
        <FolderClosed className="w-4 h-4" />
        اغلاق
      </button>

      {response && (
        <p className="mt-4 text-green-600 font-semibold text-right">
          {response}
        </p>
      )}
    </div>
  );
};

export default withAuth(Page)