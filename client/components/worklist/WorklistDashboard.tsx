import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { WorklistHeader } from './WorklistHeader';
import { MetricsCards } from './MetricsCards';
import { ReviewTypeSelector } from './ReviewTypeSelector';
import { FilterControls } from './FilterControls';
import { FacilityMetrics } from './FacilityMetrics';
import { DataTable } from './DataTable';
import { Pagination } from './Pagination';

export const WorklistDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Work List');
  const [showMetrics, setShowMetrics] = useState(true);
  const [activeReviewType, setActiveReviewType] = useState('Trauma Activation');
  const [activeFacility, setActiveFacility] = useState('Summit Medical Center');

  const facilities = [
    { name: 'Summit Medical Center', completion: '50% Complete', active: true },
    { name: 'Centennial Medical Center', completion: '0% Complete', active: false },
    { name: 'Skyline Medical Center', completion: '20% Complete', active: false },
    { name: 'Stonecrest Medical Center', completion: '30% Complete', active: false },
    { name: 'Hendersonville Medical Center', completion: '100% Complete', active: false, completionColor: 'text-status-green' }
  ];

  const handleViewClick = (patientId: string) => {
    console.log('View patient:', patientId);
  };

  const handleReportClick = () => {
    console.log('Generate report');
  };

  const handleSearchChange = (value: string) => {
    console.log('Search:', value);
  };

  const handleStatusChange = (value: string) => {
    console.log('Status filter:', value);
  };

  const handleActionChange = (value: string) => {
    console.log('Action filter:', value);
  };

  return (
    <div className="justify-center items-stretch flex flex-col overflow-hidden w-[1400px] bg-surface-muted">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex w-full flex-col items-stretch px-6 py-4 max-md:max-w-full max-md:px-5">
        <WorklistHeader 
          showMetrics={showMetrics} 
          onToggleMetrics={() => setShowMetrics(!showMetrics)} 
        />
        
        <MetricsCards visible={showMetrics} />
        
        <ReviewTypeSelector 
          activeType={activeReviewType} 
          onTypeChange={setActiveReviewType} 
        />
        
        <section className="items-stretch shadow-[0_5px_8px_0_rgba(57,57,57,0.13)] flex w-full flex-col overflow-hidden bg-white mt-4 rounded-lg max-md:max-w-full">
          <header className="justify-center items-center flex w-full gap-2.5 text-2xl text-brand-navy font-bold leading-none bg-gray-200 px-4 py-2 rounded-[8px_8px_0_0] border-b-gray-200 border-b border-solid max-md:max-w-full">
            <h2 className="text-brand-navy text-2xl leading-8 self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              {activeReviewType} Accounts for Review
            </h2>
          </header>
          
          <nav className="flex items-center flex-wrap max-md:max-w-full">
            {facilities.map((facility) => (
              <button
                key={facility.name}
                onClick={() => setActiveFacility(facility.name)}
                className={`justify-center items-stretch self-stretch flex flex-col my-auto p-4 ${
                  activeFacility === facility.name 
                    ? 'border-b-2 border-b-primary border-solid' 
                    : ''
                }`}
              >
                <div className={`flex min-h-6 items-center text-sm font-bold leading-loose justify-center ${
                  activeFacility === facility.name ? 'text-primary' : 'text-gray-500'
                }`}>
                  <div className="text-sm leading-[22px] self-stretch my-auto">
                    {facility.name}
                  </div>
                </div>
                <div className={`text-center text-xs font-medium leading-[18px] ${
                  facility.completionColor || 'text-gray-500'
                }`}>
                  {facility.completion}
                </div>
              </button>
            ))}
          </nav>
          
          <FilterControls 
            onSearchChange={handleSearchChange}
            onStatusChange={handleStatusChange}
            onActionChange={handleActionChange}
          />
          
          <div className="items-center flex w-full gap-4 flex-wrap bg-blue-50 px-4 py-2 max-md:max-w-full">
            <div className="flex-1" />
            <FacilityMetrics onReportClick={handleReportClick} />
          </div>
          
          <DataTable onViewClick={handleViewClick} />
        </section>
        
        <Pagination 
          currentPage={1}
          totalPages={1}
          itemsPerPage={15}
          totalItems={10}
          onPageChange={(page) => console.log('Page change:', page)}
          onItemsPerPageChange={(items) => console.log('Items per page:', items)}
        />
      </main>
    </div>
  );
};