"use client";
import { FormEvent, useState } from "react";
import Input from "../../form/Input";
import Swal from "sweetalert2";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import useUpdateFaq from "@/app/components/hooks/useUpdateFaq";
import { withAuth } from "@/app/components/withAuth";

 function Page() {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { update, response, loading } = useUpdateFaq();
const {id}=useParams();
  const [title, setTilte] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [media, setImage] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (media) {
      formData.append("media", media);
    }

    update(`${url}/faq/${id}`, formData,true);


  };


  return (
    <div className="bg-white rounded-xl border border-[#0177FB] p-6 max-w-4xl mx-auto shadow-md mt-10">
      <h2 className="text-2xl font-bold text-right text-[#0177FB] mb-6">
       تعديل الاسئلة الشائعة
      </h2>
{response &&<h3>{response}
    </h3>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input
            label="العنوان"
            onChanges={(e: any) => setTilte(e.target.value)}
            type="text"
            name="title"
          />
          <Input
            label="الوصف"
            onChanges={(e: any) => setDesc(e.target.value)}
            type="text"
            name="description"
          />
          <Input
            label="الصورة أو الوسائط"
            onChanges={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            name="media"
          />
        </div>

        <div className=" grid grid-cols-2 gap-5 mt-6">
          <button
            type="submit"
            className="bg-[#41BC4C] text-center text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
        ارسال
          </button>
          <Link
         href={'/faq'}
        
            className="bg-[#41BC4C] text-center text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
     رجوع
          </Link>
        </div>
      </form>
    </div>
  );
}
export default withAuth(Page)