import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStat from "@/components/QuickStat";
import SkillTest from "@/components/SkillTest";


const skilltest = () => {
  return (
    <div className="">
      <h3 className="py-4 shadow">Skill Test</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* //////////////////// */}

        {/* Skill Test */}
        <div className="">
          {/* Skill Test header */}
          <div>
            <SkillTest />
          </div>

          {/* Quick Statistic */}
          <div>
            <QuickStat />
          </div>

          {/* Comparison Graph */}
          <div>
            <ComparisonGraph />
          </div>
        </div>

        {/* Syllabus Wise & Question Analysis */}
        <div>
          {/* Syllabus Wise Analysis */}
          <div>
            <h2>Syllabus Wise Analysis</h2>
          </div>
          {/* Question Analysis */}
          <div>
            <QuestionAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skilltest;
