import axios from "axios";
export const logoutAction = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      return;
    }

    const res = await axios.get(`${url}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status >= 200) {
      localStorage.removeItem("token");
    }
  } catch (error: any) {
    console.log("Logout error:", error.message);
  }
};
