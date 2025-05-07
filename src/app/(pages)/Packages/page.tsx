import React from 'react';
import { Add } from './Add';
import { Table } from './Table';

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center w-full gap-8">
      <Add />
      <Table />
    </div>
  );
};

export default Page;
