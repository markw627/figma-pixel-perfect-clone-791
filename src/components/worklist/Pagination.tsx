import React, { useState } from 'react';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  itemsPerPage = 15,
  totalItems = 10,
  onPageChange,
  onItemsPerPageChange
}) => {
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(e.target.value);
    setSelectedItemsPerPage(newValue);
    onItemsPerPageChange?.(newValue);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="self-center flex w-full max-w-[1347px] items-center gap-[40px_100px] justify-between flex-wrap mt-4 max-md:max-w-full">
      <div className="self-stretch flex min-w-60 items-center gap-6 my-auto">
        <div className="items-center self-stretch flex min-w-60 gap-2 my-auto">
          <div className="items-center self-stretch flex min-w-60 gap-3 my-auto">
            <label className="text-[#181818] text-base font-normal leading-[26px] self-stretch my-auto">
              Results per Page
            </label>
            
            <div className="self-stretch whitespace-nowrap my-auto">
              <select
                value={selectedItemsPerPage}
                onChange={handleItemsPerPageChange}
                className="items-center border flex gap-1 overflow-hidden bg-white px-2 py-0.5 rounded-lg border-solid border-[#858585] text-[#181818] text-base font-normal leading-[26px] appearance-none"
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
            
            <div className="self-stretch flex items-center text-base text-[#181818] font-normal leading-loose my-auto">
              <div className="text-[#181818] text-base leading-[26px] self-stretch my-auto">
                {startItem}-{endItem} of {totalItems}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="items-center border self-stretch flex gap-0.5 text-xl font-light whitespace-nowrap text-center leading-[1.3] bg-[#E2E2E2] my-auto p-1 rounded-[99px] border-solid border-[rgba(255,255,255,0.00)]">
        <button
          onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`justify-center items-center self-stretch flex min-h-8 flex-col w-8 my-auto rounded-[99px] ${
            currentPage <= 1 
              ? 'text-[#9B9B9B] cursor-not-allowed' 
              : 'text-[#181818] hover:bg-white'
          }`}
        >
          <div className="text-xl leading-[26px]">
            navigate_before
          </div>
        </button>
        
        <div className="justify-center items-center self-stretch flex min-h-8 flex-col text-base text-white font-bold leading-none w-[51px] bg-[#0077B5] my-auto px-4 py-0 rounded-[99px]">
          <div className="text-white">
            {currentPage}
          </div>
        </div>
        
        <button
          onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`justify-center items-center self-stretch flex min-h-8 flex-col w-8 my-auto rounded-[99px] ${
            currentPage >= totalPages 
              ? 'text-[#9B9B9B] cursor-not-allowed' 
              : 'text-[#181818] hover:bg-white'
          }`}
        >
          <div className="text-xl leading-[26px]">
            navigate_next
          </div>
        </button>
      </nav>
    </div>
  );
};
