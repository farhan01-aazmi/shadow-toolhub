'use client';

import React from 'react';

interface AdSenseUnitProps {
  type: 'leaderboard' | 'rectangle' | 'in-article';
  className?: string;
}

const AdSenseUnit: React.FC<AdSenseUnitProps> = ({ type, className = '' }) => {
  // CLS Fix: Min-heights to hold space while ad loads
  const minHeight = type === 'leaderboard' ? '90px' : type === 'rectangle' ? '250px' : '280px';
  const maxWidth = type === 'leaderboard' ? '728px' : type === 'rectangle' ? '300px' : '100%';

  return (
    <div 
      className={`ad-container ${className}`}
      style={{
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        maxWidth: maxWidth,
        minHeight: minHeight,
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px dashed rgba(255, 255, 255, 0.05)',
        position: 'relative',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <span style={{ 
        position: 'absolute', 
        top: '2px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        fontSize: '10px', 
        color: 'rgba(255, 255, 255, 0.1)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'monospace'
      }}>
        Advertisement
      </span>

      {/* Placeholder content to maintain layout */}
      <div 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'rgba(255, 255, 255, 0.03)',
          fontSize: '11px',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}
        className="ad-slot"
      >
      </div>

      {/* 
          TODO: When AdSense is approved, inject the actual script tags here:
          <ins className="adsbygoogle" ... />
      */}
    </div>
  );
};

export default AdSenseUnit;
