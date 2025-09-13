import React from 'react';

interface FacilityMetricsProps {
  onReportClick?: () => void;
}

export const FacilityMetrics: React.FC<FacilityMetricsProps> = ({ onReportClick }) => {
  const metrics = [
    { title: 'Accounts', value: '10' },
    { title: 'Pending', value: '0' },
    { title: 'Review Result', value: 'PASS', valueColor: 'text-[#467D20]' }
  ];

  return (
    <div className="self-stretch flex min-w-60 min-h-[68px] items-stretch gap-4 flex-wrap my-auto max-md:max-w-full">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`border whitespace-nowrap ${
            index === 0 ? 'w-[104px]' : index === 1 ? 'w-[95px]' : 'w-[139px]'
          } bg-white p-4 rounded-lg border-solid border-[#E2E2E2]`}
        >
          <div className="text-[#555] text-base font-normal leading-[26px]">
            {metric.title}
          </div>
          <div className={`text-lg font-bold leading-7 ${metric.valueColor || 'text-[#181818]'}`}>
            {metric.value}
          </div>
        </div>
      ))}
      
      <button
        onClick={onReportClick}
        className="justify-center items-center flex gap-1 text-base text-[#0077B5] font-bold whitespace-nowrap text-center leading-none bg-[rgba(255,255,255,0.00)] px-6 py-2.5 rounded-[99px] border-2 border-solid border-[#0077B5] hover:bg-blue-50 transition-colors max-md:px-5"
      >
        <div className="text-[#0077B5] self-stretch my-auto">
          Report
        </div>
      </button>
    </div>
  );
};
