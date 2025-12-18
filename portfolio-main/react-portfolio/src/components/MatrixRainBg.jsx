import React, { useEffect, useRef } from 'react';

const symbols = '{}[]()</>/* */'.split('');
const fontSize = 18, speed = 0.7;

export default function MatrixRainBg({ sidebarOnly }) {
  const canvasRef = useRef();
  const dropsRef = useRef([]);
  const columnsRef = useRef(40);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    function resize() {
      let width, height;
      if (sidebarOnly) {
        width = canvas.parentElement.offsetWidth;
        height = canvas.parentElement.offsetHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      canvas.width = width;
      canvas.height = height;
      // Dynamically set columns based on width
      const columns = Math.floor(width / fontSize);
      columnsRef.current = columns;
      dropsRef.current = Array(columns).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const width = canvas.width;
      const height = canvas.height;
      const columns = columnsRef.current;
      const drops = dropsRef.current;
      ctx.fillStyle = 'rgba(24,24,27,0.18)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px Fira Mono, monospace`;
      ctx.fillStyle = '#61dafb';
      for (let i = 0; i < columns; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [sidebarOnly]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none', opacity: 0.5,
      }}
    />
  );
} 