import Image from "next/image";

const header = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-4 shadow">
      <div className="flex items-center ">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="ml-3 text-xl font-bold">WhatByte</h1>
      </div>

      <div className="flex items-center ">
        <Image
          src="/ProfilePicture.svg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className=" ml-1 text-lg font-semibold">Timilehin Amolegbe</p>
      </div>
    </div>
  );
};

export default header;
