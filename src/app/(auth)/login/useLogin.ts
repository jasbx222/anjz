'use client'
import axios from "axios";
import { useState } from "react";

export default function useLogin() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const login = async (url: string, data: any) => {
    try {
      const res = await axios.post(url, data);
 const token = res.data?.token;
    if (token) {
      localStorage.setItem("token", token);
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
