
import React, { useState } from 'react';
import Cards from './Cards';

import users from './../../../../public/icons/users.png';
import selling from './../../../../public/icons/seling.png';
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
    title: 'الإيرادات',
    value: 300,
    color: 'bg-red-500',
    icon: rev,
  },
  {
    title: 'عدد المبيعات',
    value: 400,
    color: 'bg-yellow-500',
    icon: selling,
  },
];

const Page: React.FC = () => {
 
  return (
    <div className="container mx-auto w-full bg-white/90 p-4 rounded-xl shadow-lg">
      <Cards data={dataCards}  />
  
    </div>
  );
};

export default Page;
