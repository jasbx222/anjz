"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RefreshCw } from "lucide-react";
import Link from "next/link";

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  role: string;
  is_active: boolean;
};

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${url}/client-dependent/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("حدث خطأ أثناء جلب البيانات");

        const data = await res.json();
        setClient(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchClient();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-blue-500 text-xl">
        <RefreshCw className="animate-spin mr-2" /> جارٍ تحميل البيانات...
      </div>
    );

  if (!client)
    return (
      <div className="text-center text-red-500 py-20 text-lg">
        لم يتم العثور على بيانات العميل.
      </div>
    );

  return (
    <div dir="rtl" className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-[#0177FB] mb-6 text-center">
        تفاصيل العميل
      </h2>
      <div className="grid grid-cols-1 gap-4 text-lg">
        <div>
          <span className="font-semibold">الاسم:</span> {client.name}
        </div>
        <div>
          <span className="font-semibold">الايميل:</span> {client.email}
        </div>
        <div>
          <span className="font-semibold">الهاتف:</span> {client.phone}
        </div>
        <div>
          <span className="font-semibold">العنوان:</span> {client.adress}
        </div>
        <div>
          <span className="font-semibold">التخصص:</span> {client.role}
        </div>
        <div>
          <span className="font-semibold">الحالة:</span>{" "}
          <span className={client.is_active ? "text-green-600" : "text-red-500"}>
            {client.is_active ? "نشط" : "غير نشط"}
          </span>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <Link href="/client-dependent">
          <button className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-full">
            العودة
          </button>
        </Link>
        <Link href={`/faq/update/${client.id}`}>
          <button className="bg-[#0177FB] hover:bg-blue-700 text-white px-4 py-2 rounded-full">
            تعديل
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClientDetails;
