'use client';
import { PolicySection } from '@/components/TermsOfService/PolicySection/PolicySection';
import { PrivacyPolicy } from '@/components/TermsOfService/PrivacyPolicy/PrivacyPolicy';
import { TermsSection } from '@/components/TermsOfService/TermsSection/TermsSection';
import { TermsSidebar } from '@/components/TermsOfService/TermsSidebar/TermsSidebar';
import React, { useState } from 'react';

interface TermsOfServiceProps {
  className?: string;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'policy'>('privacy');
  return (
    <div className="flex flex-col lg:flex-row gap-[10px] w-full lg:w-[1280px]">
      <TermsSidebar active={activeTab} onChange={setActiveTab} />
          {activeTab === 'privacy' && <PrivacyPolicy />}
          {activeTab === 'terms' && <TermsSection />}
          {activeTab === 'policy' && <PolicySection/>}
    </div>
  );
};