'use client';

import React, { useEffect, useState } from 'react';
import { Input } from './Inputs';
import useUpdate from '@/app/components/hooks/useUpdate';
import useGetSysParam from '@/app/components/hooks/useGetSysParam';
import { withAuth } from '@/app/components/withAuth';
import { useParams } from 'next/navigation';
import { AppSettings } from '@/app/models/types.';
import { toast } from 'react-toastify';

const fields = [
  { name: 'communication_with_support', label: 'الايميل للتواصل مع الدعم الفني', type: 'email' },
  { name: 'instagram', label: 'رابط انستجرام للتواصل مع الدعم الفني', type: 'url' },
  { name: 'main_app_version', label: 'نسخة التطبيق الرئيسية (Android)', type: 'text' },
  { name: 'main_app_version_ios', label: 'نسخة التطبيق الرئيسية (iOS)', type: 'text' },
  { name: 'app_android_link', label: 'رابط تحميل التطبيق (Android)', type: 'url' },
  { name: 'app_android_direct_link', label: 'رابط مباشر لتحميل التطبيق (Android)', type: 'url' },
  { name: 'app_ios_link', label: 'رابط تحميل التطبيق (iOS)', type: 'url' },
  { name: 'policy_and_privacy', label: 'رابط سياسة الخصوصية', type: 'url' },
  { name: 'whatsApp', label: 'رابط الواتساب للتواصل مع الدعم الفني', type: ' text' },
  { name: 'facebook', label: 'رابط الفيسبوك للتواصل مع الدعم الفني', type: 'url' },
  { name: 'ios_test', label: 'رابط اختبار التطبيق على iOS (اختياري)', type: 'text' },
];

const Page = () => {
  const { id } = useParams();
  const { update, response } = useUpdate();
  const { data,loading } = useGetSysParam<AppSettings>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/system-parameter`
  );

  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (data) {
      const initialValues: { [key: string]: string } = {};
      fields.forEach((field) => {
        initialValues[field.name] = data[field.name as keyof AppSettings] || '';
      });
      setFormData(initialValues);
    }
  }, [data]);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   await update(`${process.env.NEXT_PUBLIC_BASE_URL}/system-parameter/${id}`, formData);
      toast('تمت العملية بنجاح');
  };

  return (
    <div dir="rtl" className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">إعدادات التطبيق</h1>
      {response && <p className="text-center text-green-600">{response}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            value={formData[field.name] || ''}
            onChange={(e: any) => handleChange(field.name, e.target.value)}
            label={field.label}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-md"
        >
        {
          loading ?"جاري الارسال" :"  إرسال"
        }
        </button>
      </form>
    </div>
  );
};

export default withAuth(Page);
