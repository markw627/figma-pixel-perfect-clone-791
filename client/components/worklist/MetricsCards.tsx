import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  timeframe: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, timeframe }) => (
  <div className="justify-center items-stretch shadow-[0_2px_3px_0_rgba(57,57,57,0.10)] flex min-w-60 flex-col flex-1 shrink basis-[0%] bg-white px-4 py-2 rounded-lg">
    <div className="text-gray-600 text-sm font-normal leading-[22px]">
      {label}
    </div>
    <div className="text-foreground text-[32px] font-extrabold leading-10">
      {value}
    </div>
    <div className="text-gray-600 text-xs font-medium leading-[18px]">
      {timeframe}
    </div>
  </div>
);

interface MetricsCardsProps {
  visible?: boolean;
}

export const MetricsCards: React.FC<MetricsCardsProps> = ({ visible = true }) => {
  if (!visible) return null;

  const metrics = [
    { label: 'Accounts Worked', value: 34, timeframe: 'This Week' },
    { label: 'Lines Worked', value: 226, timeframe: 'This Week' },
    { label: 'Lines Added', value: 16, timeframe: 'This Week' },
    { label: 'Lines Removed', value: 7, timeframe: 'This Week' }
  ];

  return (
    <section className="flex w-full items-stretch gap-2 text-gray-600 flex-wrap mt-4 max-md:max-w-full">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          label={metric.label}
          value={metric.value}
          timeframe={metric.timeframe}
        />
      ))}
    </section>
  );
};