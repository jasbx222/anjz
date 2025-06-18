"use client";
import React, { FormEvent, useState } from "react";
import Input from "./Inputs";
import logo from "../../../../public/icons/logo.png";
import Image from "next/image";
import useLogin from "./useLogin";
import { loginSchema } from "./validate/LoginScehma";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setErr] = useState<any>("");
  const [showPassword, setShowPassword] = useState(false);

  const data = { email, password };
  const { login, loading } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const validate = loginSchema.safeParse(data);
      if (!validate.success) {
        const errors = validate.error.flatten();
        setErr(errors.fieldErrors);
        return;
      }
      login(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, data);
    } catch (error: any) {
      setErr(error.message);
    }
  };

  return (
    <div className="container max-w-md mx-auto mt-20 px-6">
      <div className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl p-8 space-y-6">
        <div className="flex justify-center bg-blue-500/90 rounded-full">
          <Image src={logo} width={120} height={120} alt="logo" className="object-contain" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              label="الايميل"
              type="email"
              name="email"
            />
            {error.email && <p className="text-sm text-red-500 mt-1">{error.email[0]}</p>}
          </div>

          <div className="relative">
            <Input
              onChange={(e: any) => setPass(e.target.value)}
              value={password}
              label="كلمة المرور"
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-[42px] text-gray-500 hover:text-gray-700 transition"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {error.password && <p className="text-sm text-red-500 mt-1">{error.password[0]}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#0177FB] hover:bg-[#0177fbcc] text-white text-sm font-semibold py-2.5 rounded-xl transition shadow-md"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
