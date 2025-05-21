import { useEffect, useState } from "react";

export const getToken = (key: string) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem(key);
      setToken(storedToken);
    }
  }, [key]);

  return token;
};
