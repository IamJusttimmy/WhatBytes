import Image from "next/image";

const skilltest = () => {
  return (
    <div className="">
      <h3 className="py-4 shadow">Skill Test</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* //////////////////// */}

        {/* Skill Test */}
        <div className="">
          {/* Skill Test header */}
          <div className="flex justify-between items-center shadow py-4">
            <div className="flex items-center">
              <Image src="/html.png" alt="html" width={50} height={50} />
            </div>
            <div className="flex flex-col items-center">
              <h2>Hyper Test Markup Language</h2>
              <p>Question: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-900 rounded">Update</button>
            </div>
          </div>
          {/* Quick Statistic */}
          <div>
            <h2>Qucik Stat</h2>
          </div>
          {/* Comparison Graph */}
          <div>
            <h2>Graph</h2>
          </div>
        </div>

        {/* //////////////////////////////// */}

        {/* Syllabus Wise & Question Analysis */}
        <div>
          {/* Syllabus Wise Analysis */}
          <div>
            <h2>Syllabus Wise Analysis</h2>
          </div>
          {/* Question Analysis */}
          <div>
            <h2>Question Analysis</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skilltest;
