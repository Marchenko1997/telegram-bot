import React from 'react';
import { PolicyPoints } from './PolicyPoints/PolicyPoints';

interface PrivacyPolicyProps {
  className?: string;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ className }) => {
  return (
    <div className="flex flex-col w-full lg:w-[1280px] p-[18px] lg:p-[28px] bg-[#1C1F22] rounded-[8px] gap-[28px]">
      <div className="flex flex-col gap-[14px] w-[342px] lg:w-full">
        <h3 className="text-white font-proxima font-bold text-[24px] leading-[29px] text-left">
          Privacy Policy
        </h3>
        <p className="text-[#A3A3A3] font-inter font-medium text-[14px] leading-[19px] text-left">
          This Privacy Policy outlines how Medium Rare N.V., the owner and operator of XBRANDX,
          collects, uses, and safeguards your personal information. It{' '}
          <br className="hidden lg:block" />
          applies to your use of the XBRANDX platform, including our website at https://cazyx.com
          and all associated domains, mobile applications, and services{' '}
          <br className="hidden lg:block" /> under the XBRANDX brand. We are committed to handling
          your personal data in accordance with applicable privacy laws and this Policy.
        </p>
          </div>
          <PolicyPoints/>
    </div>
  );
};