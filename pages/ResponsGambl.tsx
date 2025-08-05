'use client';

import { GambleSideBar } from '@/components/ResponsGambl/GambleSideBar/GambleSideBar';
import { SmartSection } from '@/components/ResponsGambl/SmartSection/SmartSection';
import React, { useState } from 'react';

interface ResponsGamblProps {
  className?: string;
}

export const ResponsGambl: React.FC<ResponsGamblProps> = ({ className }) => {
      const [activeTab, setActiveTab] = useState<'smart' | 'signs' | 'faq'>('smart');
    return <div className="flex flex-col lg:flex-row gap-[10px] w-full lg:w-[1280px]">
        <GambleSideBar active={activeTab} onChange={setActiveTab} />
      {activeTab === 'smart' && <SmartSection />}
  </div>;
};