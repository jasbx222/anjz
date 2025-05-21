import { Eye, Link, MessageCircle } from 'lucide-react'
import React from 'react'

const TableMobile = ({
    data
}:any) => {
  return (
      <div className="md:hidden space-y-4">
            {data.map((ticket: any) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-xl shadow border border-gray-200"
              >
                <div className="mb-2">
                  <span className="text-sm text-gray-500">اسم العميل:</span>
                  <div className="text-base font-semibold">
                    {ticket.client?.name || "-"}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-sm text-gray-500">الحالة:</span>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        ticket.status === "opened"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-red-600"
                      }`}
                    >
                      {ticket.status === "opened" ? "مفتوحة" : ticket.status}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-sm text-gray-500">أول رسالة:</span>
                  <div className="text-gray-700">
                    {ticket.messages[0]?.message || "لا توجد رسائل"}...
                  </div>
                </div>

                <div className="flex justify-between gap-2 mt-4">
                  <Link href={`/ticket/replay/${ticket.id}`} className="w-full">
                    <button className="w-full flex items-center justify-center gap-1 text-sm bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                      <MessageCircle className="w-4 h-4" />
                      رد
                    </button>
                  </Link>
                  <Link href={`/ticket/show/${ticket.id}`} className="w-full">
                    <button className="w-full flex items-center justify-center gap-1 text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                      <Eye className="w-4 h-4" />
                      تفاصيل
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
  )
}

export default TableMobile