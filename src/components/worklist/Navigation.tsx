import React, { useState } from 'react';

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeTab = 'Work List', 
  onTabChange 
}) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'worklist', label: 'Work List' },
    { id: 'reporting', label: 'Reporting' },
    { id: 'admin', label: 'Admin' }
  ];

  return (
    <header className="items-center shadow-[0_2px_4px_0_rgba(25,25,25,0.20)] flex min-h-14 w-full gap-4 flex-wrap bg-[#03173E] px-8 py-0 border-b-[rgba(255,255,255,0.00)] border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="items-center self-stretch flex min-w-60 gap-4 font-bold my-auto pr-4">
        <div className="text-white text-base leading-[26px] self-stretch my-auto">
          RIAS
        </div>
        <nav className="self-stretch flex min-w-60 items-center text-sm text-[#B0B0B0] leading-loose my-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.label)}
              className={`justify-center items-center self-stretch flex min-h-14 gap-1 whitespace-nowrap my-auto px-2 py-4 ${
                activeTab === tab.label
                  ? 'text-white border-b-2 border-b-[#0077B5] border-solid'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              <div className="self-stretch flex min-h-6 items-center justify-center my-auto">
                <div className="text-sm leading-[22px] self-stretch my-auto">
                  {tab.label}
                </div>
              </div>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="self-stretch flex min-w-60 w-[761px] shrink h-14 gap-2.5 flex-1 basis-4" />
      
      <div className="items-center self-stretch flex min-h-14 gap-1 my-auto">
        <div className="items-center self-stretch flex gap-1 my-auto">
          <div className="self-stretch flex gap-2.5 w-8 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/227971b0d58f457ca3802aa80684f851/e0ba8ac0aeb1d50443e7aaa5f1624fed069c9bf8?placeholderIfAbsent=true"
              alt="User avatar"
              className="aspect-[1] object-contain w-8 rounded-[100px]"
            />
          </div>
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="text-white text-right text-sm font-normal leading-[22px] self-stretch my-auto hover:text-gray-200"
          >
            Username
          </button>
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="text-[#6F6F6F] text-xl font-light leading-[22px] self-stretch my-auto hover:text-gray-400"
          >
            keyboard_arrow_down
          </button>
        </div>
        
        <button className="self-stretch relative flex flex-col font-normal whitespace-nowrap text-center my-auto hover:opacity-80">
          <div className="text-[#B0B0B0] text-2xl leading-none z-0">
            notifications
          </div>
          <div className="absolute z-0 flex text-sm text-white leading-loose w-[22px] h-[22px] bg-[#CC3435] px-2 py-0 rounded-[20px] -right-1.5 -top-2">
            <div className="text-white">1</div>
          </div>
        </button>
      </div>
    </header>
  );
};
