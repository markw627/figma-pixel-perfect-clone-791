import React, { useState } from 'react';

interface ReviewTypeSelectorProps {
  activeType?: string;
  onTypeChange?: (type: string) => void;
}

export const ReviewTypeSelector: React.FC<ReviewTypeSelectorProps> = ({
  activeType = 'Trauma Activation',
  onTypeChange
}) => {
  const reviewTypes = [
    'Trauma Activation',
    'Imaging Procedures',
    'Patient Request'
  ];

  return (
    <section className="w-full text-base text-[#6F6F6F] font-bold text-center leading-none mt-4 max-md:max-w-full">
      <div className="flex w-full items-center max-md:max-w-full">
        <div className="min-w-60 items-center border self-stretch flex w-full gap-1 overflow-hidden flex-wrap flex-1 shrink basis-[0%] bg-white my-auto p-1 rounded-[99px] border-solid border-[rgba(255,255,255,0.00)] max-md:max-w-full">
          {reviewTypes.map((type) => (
            <button
              key={type}
              onClick={() => onTypeChange?.(type)}
              className={`justify-center items-center self-stretch flex min-w-60 min-h-8 gap-2 flex-1 shrink basis-[0%] my-auto px-6 py-0 rounded-[99px] transition-colors max-md:max-w-full max-md:px-5 ${
                activeType === type
                  ? 'text-white bg-[#0077B5]'
                  : 'text-[#6F6F6F] hover:bg-gray-100'
              }`}
            >
              <div className="self-stretch my-auto">
                {type}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
