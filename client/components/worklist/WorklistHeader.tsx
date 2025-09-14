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
          <div className="self-stretch text-brand-navy leading-none my-auto">
            <div className="flex items-center gap-4">
              <div className="text-brand-navy text-[40px] font-normal leading-[50px] self-stretch w-10 my-auto">
                checklist
              </div>
              <h1 className="text-brand-navy text-[32px] font-extrabold leading-10 self-stretch my-auto">
                Work List
              </h1>
            </div>
          </div>
          
          <button
            onClick={onToggleMetrics}
            className="justify-center items-center self-stretch flex gap-2 text-primary my-auto pl-6 pr-4 py-2.5 rounded-[99px] hover:bg-blue-50 transition-colors max-md:pl-5"
          >
            <div className="text-primary text-center text-base font-bold leading-none self-stretch my-auto">
              {showMetrics ? 'Hide Metrics' : 'Show Metrics'}
            </div>
            <div className="text-primary text-xl font-normal leading-none self-stretch my-auto">
              {showMetrics ? 'visibility_off' : 'visibility'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};