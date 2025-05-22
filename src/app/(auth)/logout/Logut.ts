'use client'
import { getToken } from "@/app/context/getToken";
import axios from "axios";
import { useRouter } from "next/navigation";
 const logoutAction = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const route=useRouter();
  try {
    const token =getToken("token");

    if (!token) {
      console.log("No token found");
      return;
    }

 await axios.get(`${url}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  } catch (error: any) {
    console.log("Logout error:", error.message);
  }
};
export default logoutAction