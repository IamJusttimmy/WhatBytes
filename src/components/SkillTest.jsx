import Image from "next/image";

const SkillTest = () => {
  return (
    <div className="flex justify-between items-center shadow py-4">
      <div className="flex items-center">
        <Image src="/html.png" alt="html" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-sm font-bold">Hyper Test Markup Language</h2>
        <p className="text-sm">
          Question: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <div className="flex items-center">
        <button className="bg-blue-900 rounded text-[10px] font-bold py-2 px-4 mr-1 text-white">
          Update
        </button>
      </div>
    </div>
  );
};

export default SkillTest;
