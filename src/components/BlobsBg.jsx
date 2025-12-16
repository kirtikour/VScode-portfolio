import React from 'react';

export default function BlobsBg() {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      zIndex: 0, pointerEvents: 'none', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #61dafb 0%, transparent 70%)',
        filter: 'blur(60px)', opacity: 0.25, left: '10%', top: '10%',
        animation: 'blobMove1 12s ease-in-out infinite alternate'
      }} />
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle at 70% 60%, #facc15 0%, transparent 70%)',
        filter: 'blur(60px)', opacity: 0.18, left: '60%', top: '40%',
        animation: 'blobMove2 14s ease-in-out infinite alternate'
      }} />
    </div>
  );
} 