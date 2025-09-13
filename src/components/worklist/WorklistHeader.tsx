import React from 'react';

interface WorklistHeaderProps {
  showMetrics?: boolean;
  onToggleMetrics?: () => void;
}

export const WorklistHeader: React.FC<WorklistHeaderProps> = ({
  showMetrics = true,
  onToggleMetrics
}) => {
  return (
    <div className="self-center w-full max-w-[1344px] max-md:max-w-full">
      <div className="flex w-full gap-2 max-md:max-w-full">
        <div className="flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="self-stretch text-[#03173E] leading-none my-auto">
            <div className="flex items-center gap-4">
              <div className="text-[#03173E] text-[40px] font-normal leading-[50px] self-stretch w-10 my-auto">
                checklist
              </div>
              <h1 className="text-[#03173E] text-[32px] font-extrabold leading-10 self-stretch my-auto">
                Work List
              </h1>
            </div>
          </div>
          
          <button
            onClick={onToggleMetrics}
            className="justify-center items-center self-stretch flex gap-2 text-[#0077B5] my-auto pl-6 pr-4 py-2.5 rounded-[99px] hover:bg-blue-50 transition-colors max-md:pl-5"
          >
            <div className="text-[#0077B5] text-center text-base font-bold leading-none self-stretch my-auto">
              {showMetrics ? 'Hide Metrics' : 'Show Metrics'}
            </div>
            <div className="text-[#0077B5] text-xl font-normal leading-none self-stretch my-auto">
              {showMetrics ? 'visibility_off' : 'visibility'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
