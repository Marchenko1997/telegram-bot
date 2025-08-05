import { termsOfService } from '@/constants/termsofservice/termsOfService';
import React from 'react';

interface TermsPointsProps {
  className?: string;
}

export const TermsPoints: React.FC<TermsPointsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      {termsOfService.map((item, index) => (
        <div key={index} className="flex flex-col gap-[14px] w-[342px] lg:w-[1000px]">
          {/* Заголовок */}
          <p className="text-white font-proxima font-bold text-[20px] leading-[24px] text-left">
            {item.title}
          </p>

          {/* Основной текст */}
          {item.text && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left whitespace-pre-line">
              {item.text}
            </p>
          )}

          {/* Списки (всегда без точек и без паддинга слева) */}
          {item.list && (
            <ul className="list-none flex flex-col gap-[14px] text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          )}

          {/* Дополнительный текст */}
          {item.additionalText && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] whitespace-pre-line">
              {item.additionalText}
            </p>
          )}

          {/* Нижний текст */}
          {item.bottomText && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] whitespace-pre-line">
              {item.bottomText}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
