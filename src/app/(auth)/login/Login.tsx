"use client";
import React, { FormEvent, useState } from "react";
import Input from "./Inputs";
import logo from "../../../../public/icons/logo.png";
import Image from "next/image";
import useLogin from "./useLogin";
import { loginSchema } from "./validate/LoginScehma";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setErr] = useState<any>("");
  const data = {
    email: email,
    password: password,
  };

  const { login, loading } = useLogin();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const validate = loginSchema.safeParse(data);

      if (!validate.success) {
        const errors = validate.error.flatten();
        setErr(errors.fieldErrors);
        console.log(error);
      }

      login(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, data);
    } catch (error: any) {
      setErr(error.message);
    }
  };
  return (
    <div className="container max-w-md mx-auto bg-white/90 rounded-3xl  h-[400px] shadow border-2 border-blue-200  p-6 mt-10">
      <div className="text-center mb-6 bg-[#0177FB]  shadow-2xl  flex justify-center items-center rounded-xl">
        {logo && <Image src={logo} width={200} height={200} alt="logo" />}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 relative top-5"
      >
        <Input
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
          label={"الايميل"}
          type={"email"}
          name={"email"}
        />
        {error.email && <p className="text-red-500">{error.email[0]}</p>}

        <Input
          onChange={(e: any) => setPass(e.target.value)}
          value={password}
          label={"الباسورد"}
          type={"password"}
          name={"password"}
        />
        {error.password && <p className="text-red-500">{error.password[0]}</p>}

        <button
          type="submit"
          className="bg-[#0177FB] relative top-5 text-white py-2 rounded hover:bg-[#0176fb73] transition"
        >
          {loading ? "انتضر دقيقة " : "    تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
};

export default Login;
