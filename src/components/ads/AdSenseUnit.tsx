'use client';

import React from 'react';

interface AdSenseUnitProps {
  type: 'leaderboard' | 'rectangle' | 'in-article';
  className?: string;
}

/**
 * AdSenseUnit component
 * Temporarily disabled to meet AdSense quality standards by removing all ad placeholders.
 * Once the site is approved, the logic for rendering actual ads will be restored here.
 */
const AdSenseUnit: React.FC<AdSenseUnitProps> = () => {
  return null;
};

export default AdSenseUnit;
