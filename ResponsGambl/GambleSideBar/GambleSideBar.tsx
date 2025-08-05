'use client';

import React, { useState } from 'react';

interface GambleSideBarProps {
  className?: string;
  active: 'smart' | 'signs' | 'faq';
  onChange: (tab: 'smart' | 'signs' | 'faq') => void;
}

export const GambleSideBar: React.FC<GambleSideBarProps> = ({ className, active, onChange }) => {
  return (
    <div
      className={`relative flex flex-col gap-[10px] p-[18px] w-full 
      lg:w-[271px] lg:h-[185px]  lg:px-[20px] lg:pt-[20px] lg:pb-[20px] rounded-[8px] bg-[#1C1F22] ${className}`}
    >
      <div
        className="absolute left-0 transition-all duration-300"
        style={{
          width: '4px',
          height: '28px',
          borderRadius: '0px 1111px 1111px 0px',
          background: 'rgb(1, 198, 178)',
          top: active === 'smart' ? '24px' : active === 'signs' ? '79px' : '124px',
        }}
      ></div>

      <div
        onClick={() => onChange('smart')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px]  cursor-pointer
          ${active === 'smart' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova']
            ${active === 'smart' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          Name Smart
        </p>
      </div>

      <div
        onClick={() => onChange('signs')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px]  cursor-pointer
          ${active === 'signs' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova'] whitespace-nowrap
            ${active === 'signs' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          Recognize the Signs
        </p>
      </div>
      <div
        onClick={() => onChange('faq')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px]  cursor-pointer
    ${active === 'faq' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova'] whitespace-nowrap
      ${active === 'faq' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          Responsible Gambling FAQ
        </p>
      </div>
    </div>
  );
};
