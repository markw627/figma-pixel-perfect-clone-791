import React, { useState } from 'react';

interface FilterControlsProps {
  onSearchChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
  onActionChange?: (value: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  onSearchChange,
  onStatusChange,
  onActionChange
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [statusValue, setStatusValue] = useState('Content');
  const [actionValue, setActionValue] = useState('Content');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange?.(value);
  };

  return (
    <div className="items-center flex w-full gap-4 flex-wrap bg-[#F3F7FD] px-4 py-2 max-md:max-w-full">
      <div className="min-w-32 self-stretch min-h-[68px] font-normal grow shrink w-[259px] gap-1 my-auto">
        <div className="flex w-full gap-1 text-sm text-[#181818] leading-loose">
          <label className="text-[#181818] text-sm leading-[22px]">
            Patient Search
          </label>
        </div>
        <div className="w-full overflow-hidden text-xl text-[#6F6F6F] whitespace-nowrap leading-[1.3] mt-1">
          <div className="items-center border flex min-h-10 w-full gap-1 overflow-hidden bg-white px-3 py-0 rounded-lg border-solid border-[#858585]">
            <div className="text-[#6F6F6F] text-xl leading-[26px] self-stretch my-auto">
              search
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search patients..."
              className="flex-1 bg-transparent border-none outline-none text-[#181818] text-base"
            />
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex min-w-60 items-center gap-4 whitespace-nowrap my-auto max-md:max-w-full">
        <div className="self-stretch min-w-32 w-[188px] my-auto">
          <div className="flex w-full justify-between">
            <div className="flex gap-1 text-sm text-[#181818] font-normal leading-loose flex-1 shrink basis-6">
              <label className="text-[#181818] text-sm leading-[22px]">
                Status
              </label>
            </div>
            <button className="justify-center items-center flex min-h-6 gap-2 text-xs text-[#0077B5] font-bold text-center px-3 py-[3px] rounded-[99px] hover:bg-blue-50">
              <div className="text-[#0077B5] self-stretch my-auto">
                Clear
              </div>
            </button>
          </div>
          <div className="w-full overflow-hidden mt-1">
            <select
              value={statusValue}
              onChange={(e) => {
                setStatusValue(e.target.value);
                onStatusChange?.(e.target.value);
              }}
              className="min-w-32 items-center border flex min-h-10 w-full gap-1 overflow-hidden bg-white px-3 py-0 rounded-lg border-solid border-[#858585] text-[#181818] text-base font-normal leading-[26px] appearance-none"
            >
              <option value="Content">Content</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
        </div>
        
        <div className="self-stretch min-w-32 w-32 my-auto">
          <div className="flex w-full justify-between">
            <div className="flex gap-1 text-sm text-[#181818] font-normal leading-loose flex-1 shrink basis-6">
              <label className="text-[#181818] text-sm leading-[22px]">
                Action
              </label>
            </div>
            <button className="justify-center items-center flex min-h-6 gap-2 text-xs text-[#0077B5] font-bold text-center px-3 py-[3px] rounded-[99px] hover:bg-blue-50">
              <div className="text-[#0077B5] self-stretch my-auto">
                Clear
              </div>
            </button>
          </div>
          <div className="w-full overflow-hidden mt-1">
            <select
              value={actionValue}
              onChange={(e) => {
                setActionValue(e.target.value);
                onActionChange?.(e.target.value);
              }}
              className="min-w-32 items-center border flex min-h-10 w-full gap-1 overflow-hidden bg-white px-3 py-0 rounded-lg border-solid border-[#858585] text-[#181818] text-base font-normal leading-[26px] appearance-none"
            >
              <option value="Content">Content</option>
              <option value="Review">Review</option>
              <option value="Approve">Approve</option>
            </select>
          </div>
        </div>
        
        <div className="self-stretch min-w-32 w-32 my-auto">
          <div className="flex w-full justify-between">
            <div className="flex gap-1 text-sm text-[#181818] font-normal leading-loose flex-1 shrink basis-6">
              <label className="text-[#181818] text-sm leading-[22px]">
                Status
              </label>
            </div>
            <button className="justify-center items-center flex min-h-6 gap-2 text-xs text-[#0077B5] font-bold text-center px-3 py-[3px] rounded-[99px] hover:bg-blue-50">
              <div className="text-[#0077B5] self-stretch my-auto">
                Clear
              </div>
            </button>
          </div>
          <div className="w-full overflow-hidden mt-1">
            <select
              className="min-w-32 items-center border flex min-h-10 w-full gap-1 overflow-hidden bg-white px-3 py-0 rounded-lg border-solid border-[#858585] text-[#181818] text-base font-normal leading-[26px] appearance-none"
            >
              <option value="Content">Content</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
