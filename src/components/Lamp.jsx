import React, { useState } from 'react';

const Lamp = () => {
    const [lampOn, setLampOn] = useState(false);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                right: 35, // Positioned to align with window controls (dots)
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none'
            }}
            onClick={() => setLampOn(on => !on)}
        >
            {/* Cord */}
            <div style={{ width: 2, height: 60, background: '#e5e7eb', marginBottom: 0, marginTop: 0, borderRadius: 1, opacity: 0.5, zIndex: 2 }}></div>
            {/* Lamp Body */}
            <span style={{
                display: 'inline-block',
                willChange: 'transform',
                position: 'relative',
                zIndex: 3,
                marginTop: -4,
            }}>
                <svg width="60" height="90" viewBox="0 0 54 100" style={{ display: 'block', position: 'relative', zIndex: 3 }}>
                    <path d="M10 40 Q27 10 44 40 Q27 30 10 40 Z" fill={lampOn ? '#f3f4f6' : '#64748b'} stroke="#bcbcbc" strokeWidth="1.5" />
                    <ellipse cx="27" cy="40" rx="17" ry="4" fill={lampOn ? '#e5e7eb' : '#bcbcbc'} opacity="0.9" />
                    <rect x="25" y="2" width="4" height="18" rx="2" fill="#bcbcbc" />
                </svg>
                {/* Spotlight */}
                {lampOn && (
                    <svg width="180" height="270" style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 10 }}>
                        <defs>
                            <linearGradient id="lampSpotMain" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#fde047" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <polygon points="90,0 0,270 180,270" fill="url(#lampSpotMain)" />
                    </svg>
                )}
            </span>
            <style>{`
        @keyframes lampGlow {
          0% { filter: drop-shadow(0 0 8px #fde047); }
          100% { filter: drop-shadow(0 0 24px #fde047); }
        }
      `}</style>
        </div>
    );
};

export default Lamp;
