import React from 'react';

export default function WaveBg() {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 1440 320"
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none', opacity: 0.18,
        animation: 'waveMove 12s linear infinite alternate'
      }}
    >
      <path
        fill="#61dafb"
        fillOpacity="0.4"
        d="M0,160L60,170C120,180,240,200,360,197.3C480,195,600,169,720,154.7C840,140,960,138,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
  );
} 