import React from 'react';

import { PolicyPoints } from './PolicyPoints/PolicyPoints';

interface PolicySectionProps {
  className?: string;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ className }) => {
  return (
    <div className="flex flex-col w-full lg:w-[1280px] p-[18px] lg:p-[28px] bg-[#1C1F22] rounded-[8px] gap-[28px]">
      <h3 className="text-white font-proxima font-bold text-[24px] leading-[29px] text-left">
        Anti-Money Laundering, Anti-Terrorist Financing statement
      </h3>
      <PolicyPoints />
    </div>
  );
};