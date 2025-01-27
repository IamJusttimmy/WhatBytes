const QuickStat = () => {
    return ( 
        
        <div className="my-8 px-4 pb-4 shadow">
            <h2 className="font-bold">Qucik Statistic</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 my-5">
                <span className="">🏆</span>
                <span className="">
                  <p className="text-lg font-bold text-gray-800">1</p>
                  <p className="text-[10px] font-bold text-gray-500">
                    YOUR RANK
                  </p>
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="">📅</span>
                <span className="">
                  <p className="text-lg font-bold text-gray-800">30%</p>
                  <p className="text-[10px] font-bold text-gray-500">
                    PERCENTILE
                  </p>
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="">✅</span>
                <span className="">
                  <p className="text-lg font-bold text-gray-800">10/15</p>
                  <p className="text-[10px] font-bold text-gray-500">
                    CORRECT ANSWER
                  </p>
                </span>
              </div>
            </div>
        </div>

     );
}
 
export default QuickStat;