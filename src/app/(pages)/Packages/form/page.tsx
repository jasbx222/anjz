"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./Inputs";
import usePost from "@/app/components/hooks/usePost";
import { withAuth } from "@/app/components/withAuth";

const Page = () => {

  const [title,setTitle]=useState<string>('')
  const [price,setPrice]=useState<string>('')
  const [size,setSize]=useState<string>('')
  const [features,setFeatures]=useState<string>('')
  const [dependents_count,setDependents_count]=useState<string>('')
  const [description,setDesc]=useState<string>('')
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const {add,response}=usePost()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
   "title":title,
   "price":price,
   "size":size,
   "description":description,
   "dependents_count":dependents_count,
   "features[0]":features
    };

    add(`${url}/plan`, data,true);
    
  };

  return (
    <div dir="rtl" className="container md:w-[50%] bg-white/90 mx-auto px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <h1 className="text-2xl font-semibold text-center text-[#41BC4C]">
          إضافة باقة
        </h1>
{
  response && <h1 className="text-red-500">
    {response}
  </h1>
}
        <Input type="text" value={title??''} onChange={(e:any)=>setTitle(e.target.value)} name="title" label="عنوان الباقة" />
        <Input type="text" name="price" label="سعر الباقة" value={price??''} onChange={(e:any)=>setPrice(e.target.value)}/>
        <Input type="text" name="size" label="الوصف " value={description??''} onChange={(e:any)=>setDesc(e.target.value)}/>
        <Input type="text" name="size" label="dependents_count" value={dependents_count??''} onChange={(e:any)=>setDependents_count(e.target.value)}/>
        <Input type="text" name="size" label="features " value={features??''} onChange={(e:any)=>setFeatures(e.target.value)}/>
        <Input type="text" name="size" label="حجم االباقة " value={size??''} onChange={(e:any)=>setSize(e.target.value)}/>

        <button
          type="submit"
          className="w-full bg-[#41BC4C] text-white font-medium hover:bg-[#37a640] transition duration-200 h-[45px] rounded-xl shadow-md"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default withAuth(Page)