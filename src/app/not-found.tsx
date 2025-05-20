'use client';

import LoadingThreeDotsJumping from "./components/ui/Loading";


const Notfound = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center space-y-4">
      <h1 className="text-6xl text-green-500">Page</h1>
  
      <h2 className="text-5xl text-[#0177FB]">
        NOT <span className="text-[#0177FB]">FOUND</span>
      </h2>
      <LoadingThreeDotsJumping/>
    </div>
  );
};

export default Notfound;
