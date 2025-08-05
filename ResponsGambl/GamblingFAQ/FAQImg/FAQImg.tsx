import React from 'react';
import faq1x from 'public/assets/responsgambling/faq1x.png';
import faq2x from 'public/assets/responsgambling/faq2x.png';
interface FAQImgProps {
  className?: string;
}

export const FAQImg: React.FC<FAQImgProps> = ({ className }) => {
    return (
      <div className={className}>
        <picture>
          <source media="(max-width: 1023px)" srcSet={faq2x.src} />

          <img src={faq1x.src} alt="My bets" className="w-full h-full object-contain" />
        </picture>
      </div>
    );
};