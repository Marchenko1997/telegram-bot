import React from 'react';
import { FAQImg } from './FAQImg/FAQImg';
import { FAQinfo } from './FAQinfo/FAQinfo';

interface GamblingFAQProps {
  className?: string;
}

export const GamblingFAQ: React.FC<GamblingFAQProps> = ({ className }) => {
  return (
    <div className="flex flex-col w-full lg:w-[1280px] p-[18px] lg:p-[28px] bg-[#1C1F22] rounded-[8px] gap-[28px]">
      <FAQImg />
      <div className="flex flex-col gap-[14px]">
        <h3 className="text-white font-proxima font-bold text-[24px] leading-[29px] text-left">
          RRecognizing the Signs of Gambling Dependency
        </h3>
        <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
          While it may be easier to notice signs of gambling problems in others, recognizing when
          your own gambling habits have become harmful can be much more difficult. Gambling-related
          harm isn’t limited to financial issues — it can affect your mental health, relationships,
          and overall quality of life.
        </p>
        <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
          Gambling dependency (also referred to as gambling addiction or gambling disorder) can
          gradually take control without obvious warning signs. At Brand, we encourage all players
          to stay informed and self-aware to ensure gambling remains a safe, fun, and entertaining
          activity.
        </p>
          </div>
          <FAQinfo />
    </div>
  );
};