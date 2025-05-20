import axios from "axios";
import { useState } from "react";

export default function useUpdateEmpoyee() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const update = async (url: string, data: any) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
         
            Authorization: `Bearer ${localStorage.getItem("token")}`,
     
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return { update, response, loading };
}
