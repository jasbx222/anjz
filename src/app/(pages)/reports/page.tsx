import React from 'react';
import Cards from './Cards';
import { Table } from './Table';
import users from './../../../../public/icons/users.png';
import seling from './../../../../public/icons/seling.png';
import rev from './../../../../public/icons/revenuse.png';
import { StaticImageData } from 'next/image';

interface CardData {
  title: string;
  value: number;
  color: string;
  icon?: StaticImageData;
}

const dataCards: CardData[] = [
  {
    title: 'عدد المستخدمين',
    value: 100,
    color: 'bg-blue-500',
    icon: users,
  },
  {
    title: 'عدد الباقات',
    value: 300,
    color: 'bg-red-500',
    icon: rev,
  },
  {
    title: 'عدد المبيعات',
    value: 400,
    color: 'bg-yellow-500',
    icon: seling,
  },
];

const Page: React.FC = () => {
  return (
    <div className="container mx-auto w-full bg-white/90">
      <Cards data={dataCards} />
      <Table />
    </div>
  );
};

export default Page;
