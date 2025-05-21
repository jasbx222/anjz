"use client";

import usePost from "@/app/components/hooks/usePost";
import React, { useState } from "react";
import { Input } from "./Inputs";
import { withAuth } from "@/app/components/withAuth";
const Page = () => {
  const [whatsApp, setWhatsApp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [main_app_version, setMainAppVersion] = useState("");
  const [main_app_version_ios, setMainAppVersionIos] = useState("");
  const [app_android_link, setAppAndroidLink] = useState("");
  const [app_android_direct_link, setAppAndroidDirectLink] = useState("");
  const [app_ios_link, setAppIosLink] = useState("");
  const [policy_and_privacy, setPolicyAndPrivacy] = useState("");
  const [communication_with_support, setEmail] = useState("");
  const [ios_test, setIosTest] = useState("");
  const { add, response } = usePost();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      whatsApp: whatsApp,
      facebook: facebook,
      instagram: instagram,
      main_app_version: main_app_version,
      main_app_version_ios: main_app_version_ios,
      app_android_link: app_android_link,
      app_android_direct_link: app_android_direct_link,
      app_ios_link: app_ios_link,
      policy_and_privacy: policy_and_privacy,
      communication_with_support: communication_with_support,
      ios_test: ios_test,
    };
    add(`${process.env.NEXT_PUBLIC_BASE_URL}/system-parameter`, data, false);
  };

  return (
    <div dir="rtl" className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">إعدادات التطبيق</h1>
      <h1>{response && response}</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          value={communication_with_support}
          onChange={(e: any) => setEmail(e.target.value)}
          label="  communication_with_support "
        />
        <Input
          type="url"
          value={instagram}
          onChange={(e: any) => setInstagram(e.target.value)}
          label="   instgarm"
        />
        <Input
          type="text"
          value={main_app_version}
          onChange={(e: any) => setMainAppVersion(e.target.value)}
          label="  setMainAppVersion "
        />
        <Input
          type="txt"
          value={main_app_version_ios}
          onChange={(e: any) => setMainAppVersionIos(e.target.value)}
          label="   setMainAppVersionIos"
        />
        <Input
          type="url"
          value={app_android_link}
          onChange={(e: any) => setAppAndroidLink(e.target.value)}
          label="  setAppAndroidLink "
        />
        <Input
          type="url"
          value={app_android_direct_link}
          onChange={(e: any) => setAppAndroidDirectLink(e.target.value)}
          label="setAppAndroidDirectLink   "
        />
        <Input
          type="url"
          value={app_ios_link}
          onChange={(e: any) => setAppIosLink(e.target.value)}
          label="setAppIosLink  "
        />
        <Input
          type="url"
          value={policy_and_privacy}
          onChange={(e: any) => setPolicyAndPrivacy(e.target.value)}
          label="setPolicyAndPrivacy   "
        />
        <Input
          type="url"
          value={whatsApp}
          onChange={(e: any) => setWhatsApp(e.target.value)}
          label="whatsapp   "
        />
        <Input
          type="url"
          value={facebook}
          onChange={(e: any) => setFacebook(e.target.value)}
          label="facebook  "
        />
        <Input
          type="text"
          value={ios_test}
          onChange={(e: any) => setIosTest(e.target.value)}
          label="setIosTest   "
        />

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-md"
        >
          send
        </button>
      </form>
    </div>
  );
};
export default withAuth(Page)