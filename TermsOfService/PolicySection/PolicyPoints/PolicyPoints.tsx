import { complianceInfo } from '@/constants/termsofservice/complianceInfo';
import React from 'react';

interface PolicyPointsProps {
  className?: string;
}

export const PolicyPoints: React.FC<PolicyPointsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      {complianceInfo.map((item, index) => (
        <div key={index} className="flex flex-col gap-[14px] w-[342px] lg:w-[1000px]">
          {/* Заголовок */}
          <p className="text-white font-proxima font-bold text-[20px] leading-[24px] text-left">
            {item.title}
          </p>

          {/* Основной текст с разбиением */}
          {item.text && (
            <div className="flex flex-col gap-[14px]">
              {item.text.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left"
                >
                  {line.trim()}
                </p>
              ))}
            </div>
          )}

          {/* Списки (всегда без точек и без паддинга слева) */}
          {item.list && (
            <ul className="list-none flex flex-col gap-[14px] text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          )}

          {/* Дополнительный текст с разбиением */}
          {item.additionalText && (
            <div className="flex flex-col gap-[14px]">
              {item.additionalText.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left"
                >
                  {line.trim()}
                </p>
              ))}
            </div>
          )}

          {/* Нижний текст */}
          {item.bottomText && (
            <div className="flex flex-col gap-[14px]">
              {item.bottomText.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left"
                >
                  {line.trim()}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
