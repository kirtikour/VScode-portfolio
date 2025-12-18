import React from 'react';

export default function EditorMockupBg() {
  return (
    <div style={{
      position: 'absolute', top: '10%', left: '10%', width: '80%', height: '60%',
      zIndex: 0, pointerEvents: 'none', opacity: 0.09, borderRadius: 16,
      background: '#23272e', boxShadow: '0 8px 32px 0 #0004'
    }}>
      <div style={{
        height: 32, background: '#18181b', borderTopLeftRadius: 16, borderTopRightRadius: 16,
        display: 'flex', alignItems: 'center', paddingLeft: 16
      }}>
        <span style={{width: 12, height: 12, borderRadius: 6, background: '#f87171', marginRight: 6, display: 'inline-block'}} />
        <span style={{width: 12, height: 12, borderRadius: 6, background: '#facc15', marginRight: 6, display: 'inline-block'}} />
        <span style={{width: 12, height: 12, borderRadius: 6, background: '#4ade80', display: 'inline-block'}} />
      </div>
      <pre style={{
        color: '#61dafb', fontFamily: 'Fira Mono, monospace', fontSize: 22, margin: 0, padding: 24
      }}>
        {`function Portfolio() {\n  return <Awesome />;\n}`}
      </pre>
    </div>
  );
} 