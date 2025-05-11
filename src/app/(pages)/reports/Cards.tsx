'use client'
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Table } from './Table';
import Link from 'next/link';
interface CardData {
  title: string;
  value: number;
  color: string;

  icon?: StaticImageData;
}

interface CardsProps {
  data: CardData[];

}

const Cards: React.FC<CardsProps> = ({ data}) => {
  const [show,setShow]= useState<boolean>(false)

  const handleTables=()=>{
    setShow(!show)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((card, index) => (
          <button
          onClick={handleTables}
            key={index}
            className={`card ${card.color} shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-white`}
          >
            {card.icon && (
              <Image
                src={card.icon}
                alt={card.title}
                width={100}
                height={150}
                className="mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
  
              <p className="text-3xl font-bold">{card.value}</p>

          </button>
        ))}
      </div>
{
  show ? <Table /> : ''
}
    </div>
  );
};

export default Cards;
