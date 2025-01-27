// import { PanelTopClose } from "lucide-react";
import React from "react";
import { Label } from "recharts";

const SyllabusAnalysis = () => {
  const tests = [
    { Label: "HTML Tools, Forms, History", percentage: 80, color: "blue" },
    { Label: "Tags & Refrence in HTML", percentage: 50, color: "orange" },
    { Label: "Tables & Refrence in HTML", percentage: 24, color: "red" },
    { Label: "Tables & CSS Basics", percentage: 96, color: "green" },
  ];
  return (
    <div className="px-6 py-4 shadow">
      <h2>Syllabus Wise Ananlysis</h2>
      {tests.map((test, index) => (
        <div key={index} className="space-y-2">
          <div>{test.Label}</div>
          <span>
            <div className="pt-2 mt-4 w-80 bg-gray-200 rounded-full h-3 relative"></div>
            <div
              className={`h-3 rounded-full  ${test.color}`}
              style={{ width: `${test.percentage}%` }}
            ></div>
          </span>
          <span className="">{test.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
