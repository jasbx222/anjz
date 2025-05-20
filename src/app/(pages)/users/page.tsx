"use client";
import { useState, ChangeEvent } from "react";
import { Add } from "./Add";
import Search, { Clear } from "./Components";
import { Table } from "./Table";
interface Obj {
  name: string;
}
const Page = () => {
  const users = [{ name: "jassim" }];

  const [query, setQ] = useState<string>("");
  const [filtered, setFiltered] = useState<Obj[]>([]);

  // فلترة المستخدمين بناءً على النص
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    const filterResult = users.filter((us) =>
      us.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filterResult);
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 flex flex-col justify-center items-center w-full gap-8">
     
  <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
        <Add />

      <Search onChange={handleFilter} value={query} />
<Clear/>
  </div>
 

      <Table />
    </div>
  );
};

export default Page;
