import React from 'react';
import { SmartImg } from './SmartImg/SmartImg';
import { Tips } from './Tips/Tips';
import { IntroducingTools } from './IntroducingTools/IntroducingTools';

interface SmartSectionProps {
  className?: string;
}

export const SmartSection: React.FC<SmartSectionProps> = ({ className }) => {
    return (
      <div className="flex flex-col w-full lg:w-[1280px] p-[18px] lg:p-[28px] bg-[#1C1F22] rounded-[8px] gap-[28px]">
        <SmartImg />
        <div className="flex flex-col gap-[14px]">
          <h3 className="text-white font-proxima font-bold text-[20px] leading-[24px] tracking-[0%] text-left">
            Mission Statement
          </h3>
          <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] tracking-[0%] text-left">
            Brand is committed to promoting responsible gambling among all users of our platform and
            within our community. We aim to educate our customers about the available responsible
            gambling tools, encourage gambling as a form of entertainment, and empower individuals
            to make informed choices about their gambling behavior.
          </p>
            </div>
            <Tips />
            <IntroducingTools />
      </div>
    );
};