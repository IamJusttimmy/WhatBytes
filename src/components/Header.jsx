import Image from "next/image";

const header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow">
      <div className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="ml-3 text-xl font-bold">WhatByte</h1>
      </div>

      <div className="flex items-center">
        <Image
          src="/ProfilePicture.svg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className=" ml-1 text-lg font-semibold">Timilehin Amolegbe</span>
      </div>
    </div>
  );
};

export default header;
