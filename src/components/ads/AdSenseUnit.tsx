'use client';

import React from 'react';

interface AdSenseUnitProps {
  type: 'leaderboard' | 'rectangle' | 'in-article' | 'mobile-rectangle';
  className?: string;
}

const adSlots: Record<string, string> = {
  'leaderboard': '2623046574772198',
  'rectangle': '2623046574772198', 
  'in-article': '2623046574772198',
  'mobile-rectangle': '2623046574772198',
};

const AdSenseUnit: React.FC<AdSenseUnitProps> = ({ type = 'rectangle', className = '' }) => {
  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2623046574772198"
      data-ad-slot={adSlots[type]}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSenseUnit;
