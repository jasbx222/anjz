import axios from "axios";
export const AddStaff = async (formData: FormData) => {
  const email = formData.get("email"); // الحصول على جميع القيم المختارة
  const password = formData.get("password");

  const token = localStorage.getItem("token");

  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!token) {
    alert("login requierd");
    return;
  }

  try {
    const res = await axios.post(
      `${url}/employee`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status >= 200) {
      alert("done");
    }
  } catch (error: any) {
    console.log(error.message);
    alert(error.message);
  }
};
