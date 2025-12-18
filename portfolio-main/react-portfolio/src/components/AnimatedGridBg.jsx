import React from 'react';

export default function AnimatedGridBg() {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 100 100"
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none', opacity: 0.13,
        animation: 'pulseGrid 6s ease-in-out infinite alternate'
      }}
    >
      {[...Array(11)].map((_, i) => (
        <line key={i} x1={i*10} y1="0" x2={i*10} y2="100" stroke="#61dafb" strokeWidth="0.5"/>
      ))}
      {[...Array(11)].map((_, i) => (
        <line key={i} x1="0" y1={i*10} x2="100" y2={i*10} stroke="#61dafb" strokeWidth="0.5"/>
      ))}
    </svg>
  );
} 