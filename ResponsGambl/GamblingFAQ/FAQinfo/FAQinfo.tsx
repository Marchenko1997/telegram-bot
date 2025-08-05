import { gamblingFAQ } from '@/constants/responsegambl/gamblingFAQ';
import React from 'react';

interface FAQinfoProps {
  className?: string;
}

export const FAQinfo: React.FC<FAQinfoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      {gamblingFAQ.map((item, index) => (
        <div key={index} className="flex flex-col gap-[14px]">
          {/* Вопрос */}
          <p className="text-white font-proxima font-bold text-[20px] leading-[24px] text-left">
            {item.question}
          </p>

          {/* Ответ */}
          {item.answer && (
            <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
              {item.answer}
            </p>
          )}

          {/* Список (если есть) */}
          {item.list && (
            <ul className="list-disc pl-5 text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
