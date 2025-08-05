import { privacyPolicy } from '@/constants/termsofservice/privacyPolicy';
import React from 'react';

interface PolicyPointsProps {
  className?: string;
}

export const PolicyPoints: React.FC<PolicyPointsProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-[28px] ${className || ''}`}>
      {privacyPolicy.map((item, index) => {
        const isPersonalInfo = item.title === '2. Personal Information We Collect';

        return (
          <div key={index} className="flex flex-col gap-[14px] w-[342px] lg:w-[1000px]">
            {/* Заголовок */}
            <p className="text-white font-proxima font-bold text-[20px] leading-[24px] text-left ">
              {item.title}
            </p>

            {/* Основной текст */}
            {item.text && (
              <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
                {item.text}
              </p>
            )}

            {/* Обработка блока Personal Information */}
            {isPersonalInfo ? (
              <div className="flex flex-col gap-[28px]">
                {/* Список без точек и с отступами 28px */}
                {item.list && (
                  <ul className="list-none flex flex-col gap-[28px] text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}

                {/* Блок AdditionalText, разбиваем строки вручную */}
                <div className="flex flex-col gap-[28px] text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
                  <p>This information may be gathered through:</p>
                  <p>Account registration processes</p>
                  <p>Direct communications with our support or compliance team</p>
                </div>
              </div>
            ) : (
              <>
                {/* Обычные списки с точками */}
                {item.list && (
                  <ul className="list-disc pl-5 text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px]">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}

                {/* AdditionalText для других блоков */}
                {item.additionalText && (
                  <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] whitespace-pre-line">
                    {item.additionalText}
                  </p>
                )}
              </>
            )}

            {/* Нижний текст (если есть) */}
            {item.bottomText && (
              <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] whitespace-pre-line">
                {item.bottomText}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
