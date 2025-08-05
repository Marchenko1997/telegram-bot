import React from 'react';
import { introducingTools } from '../../../../constants/responsegambl/introducingTools';

interface IntroducingToolsProps {
  className?: string;
}

export const IntroducingTools: React.FC<IntroducingToolsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      <h3 className="text-white font-proxima font-bold text-[24px] leading-[29px] text-left">
        Introducing Our Responsible Gambling Tools
      </h3>

      <div className="flex flex-col gap-[14px]">
        {introducingTools.map((item, index) => {
          const isGamblingControl = item.title === 'Gambling Control Tools';
          const isSelfExclusion = item.title === 'Self-Exclusion';
          const isBreakInPlay = item.title === 'Break in Play';

          return (
            <div key={index} className="flex flex-col gap-[8px]">
              {/* Заголовок с разными размерами */}
              <p
                className={`text-white font-proxima font-bold ${
                  isSelfExclusion || isBreakInPlay
                    ? 'text-[14px] leading-[17px]'
                    : isGamblingControl
                    ? 'text-[20px] leading-[24px]'
                    : 'text-[20px] leading-[24px]'
                } text-left`}
              >
                {item.title}
              </p>

              {/* Обычный текст */}
              {item.text && (
                <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[17px] text-left">
                  {item.text}
                </p>
              )}

              {/* Подпункты для Gambling Control Tools */}
              {item.subItems && (
                <div className="flex flex-col gap-[28px]">
                  {item.subItems.map((sub, idx) => (
                    <div key={idx} className="flex flex-col gap-[4px]">
                      <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left">
                        {sub.subTitle}
                      </p>
                      <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[17px] text-left">
                        {sub.subText}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Заголовок для списка периодов только для Self-Exclusion */}
              {isSelfExclusion && item.durations && (
                <p className="text-white font-inter font-medium text-[14px] leading-[17px] text-left mt-[28px]">
                  Self-Exclusion Durations Available:
                </p>
              )}

              {/* Список периодов */}
              {item.durations && (
                <ul className="list-none flex flex-col gap-[28px] text-[#A3A3A3] font-inter font-medium text-[14px] leading-[17px]">
                  {item.durations.map((duration, i) => (
                    <li key={i}>{duration}</li>
                  ))}
                </ul>
              )}

              {/* Indefinitely текст */}
              {/* Indefinitely текст */}
              {item.indefinitely && (
                <>
                  <p className="text-white font-proxima font-bold text-[14px] leading-[17px] text-left mt-[28px]">
                    Indefinitely
                  </p>
                  <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[17px] text-left">
                    {item.indefinitely}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
