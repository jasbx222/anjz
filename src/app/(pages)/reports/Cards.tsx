"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardData {
  title: string;
  value: number;
  color: string;
  icon?: StaticImageData;
}

const Cards = ({ title, icon, value, color }: CardData) => {
  return (
    <div
      className={`shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-white ${color}`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="mb-4"
        />
      )}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Cards;
