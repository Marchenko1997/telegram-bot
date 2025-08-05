'use client';

import React, { useState } from 'react';

interface TermsSidebarProps {
  className?: string;
  active: 'privacy' | 'terms' | 'policy';
  onChange: (tab: 'privacy' | 'terms' | 'policy') => void;
}


export const TermsSidebar: React.FC<TermsSidebarProps> = ({ className, active, onChange }) => {
  return (
    <div
      className={`relative flex flex-col gap-[10px] p-[18px] w-full 
      lg:w-[201px] lg:h-[185px]  lg:px-[20px] lg:pt-[20px] lg:pb-[20px] rounded-[8px] bg-[#1C1F22] ${className}`}
    >
      <div
        className="absolute left-0 transition-all duration-300"
        style={{
          width: '4px',
          height: '28px',
          borderRadius: '0px 1111px 1111px 0px',
          background: 'rgb(1, 198, 178)',
          top: active === 'privacy' ? '24px' : active === 'terms' ? '79px' : '124px',
        }}
      ></div>

      <div
        onClick={() => onChange('privacy')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px] lg:w-[161px] cursor-pointer
          ${active === 'privacy' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova']
            ${active === 'privacy' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          Privacy Policy
        </p>
      </div>

      <div
        onClick={() => onChange('terms')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px] lg:w-[161px] cursor-pointer
          ${active === 'terms' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova']
            ${active === 'terms' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          Terms of Service
        </p>
      </div>
      <div
        onClick={() => onChange('policy')}
        className={`flex items-center px-[15px] w-full h-[45px] rounded-[8px] lg:w-[161px] cursor-pointer
    ${active === 'policy' ? 'bg-[#0F1112]' : 'bg-transparent'}`}
      >
        <p
          className={`font-bold text-[16px] leading-[19px] text-left font-['Proxima_Nova']
      ${active === 'policy' ? 'text-white' : 'text-[#A3A3A3]'}`}
        >
          AML Policy
        </p>
      </div>
    </div>
  );
};
