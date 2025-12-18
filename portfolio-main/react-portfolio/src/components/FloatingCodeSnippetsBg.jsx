import React, { useEffect, useState } from 'react';

const keywords = [
  'function', 'const', 'let', 'return', 'if', 'else', 'import', 'export', 'class', '=>', 'useState', 'React'
];

function randomPos() {
  return {
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 10,
    size: Math.random() * 1.2 + 1,
    opacity: Math.random() * 0.3 + 0.2,
    keyword: keywords[Math.floor(Math.random() * keywords.length)],
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  };
}

export default function FloatingCodeSnippetsBg() {
  const [snippets, setSnippets] = useState(Array.from({length: 12}, randomPos));
  useEffect(() => {
    const interval = setInterval(() => {
      setSnippets(snips => snips.map(s =>
        Math.random() > 0.95 ? randomPos() : s
      ));
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}}>
      {snippets.map((s, i) => (
        <span key={i}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}rem`,
            color: '#61dafb',
            opacity: s.opacity,
            fontFamily: 'Fira Mono, monospace',
            transition: `all ${s.duration}s linear`,
            userSelect: 'none',
          }}>
          {s.keyword}
        </span>
      ))}
    </div>
  );
} 