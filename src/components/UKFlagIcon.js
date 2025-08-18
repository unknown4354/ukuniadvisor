import React from 'react';

const UKFlagIcon = ({ width = 32, height = 24, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 24"
      className={`uk-flag-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="United Kingdom Flag"
    >
      {/* Blue background */}
      <rect width="32" height="24" fill="#012169" />
      
      {/* White diagonal crosses */}
      <path
        d="M0 0 L32 24 M32 0 L0 24"
        stroke="#ffffff"
        strokeWidth="2.5"
      />
      
      {/* Red diagonal crosses */}
      <path
        d="M0 0 L32 24 M32 0 L0 24"
        stroke="#c8102e"
        strokeWidth="1.5"
      />
      
      {/* White horizontal and vertical crosses */}
      <path
        d="M16 0 L16 24 M0 12 L32 12"
        stroke="#ffffff"
        strokeWidth="4"
      />
      
      {/* Red horizontal and vertical crosses */}
      <path
        d="M16 0 L16 24 M0 12 L32 12"
        stroke="#c8102e"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default UKFlagIcon;