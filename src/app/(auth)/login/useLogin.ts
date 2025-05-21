'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLogin() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
const route=useRouter();
  const login = async (url: string, data: any) => {
    try {
      const res = await axios.post(url, data);
 const token = res.data?.token;
    if (token) {
      localStorage.setItem("token", token);
      window.location.href='/home'
    }
    } catch (error: any) {
      console.error(" فشل الإرسال:", error);
      setResponse(" 🥺 حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };

  return { login, response, loading };
}
