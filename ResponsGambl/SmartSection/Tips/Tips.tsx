import React from 'react';
import { gamblingTips } from '@/constants/responsegambl/gamblingTips';

interface TipsProps {
  className?: string;
}

export const Tips: React.FC<TipsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[14px]  ${className || ''}`} >
      <h3 className="text-white font-proxima font-bold text-[24px] leading-[29px] text-left">
        6 Tips For Effective <br className="block lg:hidden" /> Management Of Your{' '}
        <br className="block lg:hidden" /> Gambling Activities
      </h3>

      <div className="flex flex-col items-center gap-[10px] lg:flex-row lg:flex-wrap lg:gap-[14px]">
        {gamblingTips.map((tip, index) => {
          const isScalesIcon = tip.icon.name === 'Scales';

            return (
              
            <div
              key={index}
              className="flex p-[20px] gap-[14px]  bg-[#292D32] rounded-[8px] w-full  lg:w-[305px] lg:h-[156px]"
            >
              <span className="w-[36px] h-[36px] flex justify-center items-center bg-[#01C6B2] p-[9px] rounded-[4px] mt-[8px]">
                <div className={`w-[28px] ${isScalesIcon ? 'h-[17px]' : 'h-[28px]'}`}>
                  <tip.icon />
                </div>
              </span>
              <p className="text-white font-inter font-medium text-[14px] leading-[19px] text-left w-[218px]">
                {tip.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
