// "use server";

// import axios from "axios";
// import { cookies } from "next/headers";

// export const useLogin = async (formData: FormData) => {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   try {
//   const res:any =  await axios
//       .post("https://back.kadrapp.com/admin/v1/auth/login", {
//    email: email,
//     password: password,
//       })
      
//      const token = res.data?.token;

//     if (token) {
//        const cookieStore = await cookies();
//       cookieStore.set('token', token, {
//          httpOnly: true,
//          path: "/",
//          secure: true,
//          sameSite: "strict",
//          maxAge: 60 * 60 * 24 * 7, // 7 أيام
//        });
//     }
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };
