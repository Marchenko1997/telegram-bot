import React from 'react';
import { gamblingSupportInfo } from '../../../../constants/responsegambl/gamblingSupportInfo';

interface RecognizingSignsProps {
  className?: string;
}

export const RecognizingSigns: React.FC<RecognizingSignsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      {gamblingSupportInfo.map((item, index) => (
        <div key={index} className="flex flex-col gap-[14px]">
          {/* Заголовок */}
          <p className="text-white font-proxima font-bold text-[20px] leading-[24px] text-left">
            {item.title}
          </p>

          {/* Основное описание */}
          {item.description && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
              {item.description}
            </p>
          )}

          {/* Вступительный текст к списку (если есть) */}
          {item.listIntro && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
              {item.listIntro}
            </p>
          )}

          {/* Список */}
          {item.list && (
            <ul className="list-disc pl-5 text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          )}

          {/* Дополнительный текст (если есть) */}
          {item.paragraph && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
              {item.paragraph}
            </p>
          )}

          {/* Нижний текст */}
          {item.bottomText && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
              {item.bottomText}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
