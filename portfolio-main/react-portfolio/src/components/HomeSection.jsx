import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `const HomePage = () => {\n  const [isLoaded, setIsLoaded] = useState(true);\n  const developerInfo = {\n    name: 'Kirti Kour',\n    role: 'Full Stack Developer',\n    bio: 'Building modern web experiences'\n  };\n  useEffect(() => {\n    document.title = \`${'${developerInfo.name}'} | Portfolio\`;\n    setIsLoaded(true);\n  }, []);\n  return (\n    <main className=\"hero-container\">\n      <h1>{developerInfo.name}</h1>\n      <p>{developerInfo.role}</p>\n      <div className=\"cta\">\n        <Link href=\"/projects\">View Projects</Link>\n      </div>\n    </main>\n  );\n};\nexport default HomePage;`;

const ACCENT = '#f87171';

export default function HomeSection({ onViewProjects }) {
  const [activeLine, setActiveLine] = useState(1);
  const codeLines = codeString.split('\n');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine(l => (l % codeLines.length) + 1);
    }, 1100);
    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', gap: 48 }}>
      {/* Left: Code Editor Panel */}
      <div style={{
        background: '#23272e',
        borderRadius: 18,
        boxShadow: '0 4px 32px #0002',
        padding: '32px 0 32px 0',
        fontFamily: 'Fira Mono,monospace',
        minWidth: 340,
        maxWidth: 520,
        flex: '1 1 340px',
        margin: '0 0 24px 0',
        position: 'relative',
        overflow: 'auto',
        borderLeft: `4px solid ${ACCENT}`
      }}
        className="hide-scrollbar"
      >
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers
          wrapLines
          lineProps={lineNumber => {
            let style = { display: 'block' };
            if (lineNumber === activeLine) {
              style.background = 'rgba(248,113,113,0.13)';
              style.borderRadius = '6px';
            }
            return { style };
          }}
          lineNumberStyle={lineNumber => ({
            minWidth: 32,
            textAlign: 'right',
            color: lineNumber === activeLine ? '#fff' : '#6b7280',
            background: lineNumber === activeLine ? ACCENT : 'none',
            borderRadius: lineNumber === activeLine ? 6 : 0,
            fontWeight: lineNumber === activeLine ? 600 : 400,
            transition: 'background 0.2s,color 0.2s',
            fontSize: 13,
            lineHeight: '1.7em',
            marginRight: 8
          })}
          customStyle={{
            background: 'transparent',
            fontSize: 13,
            lineHeight: '1.7em',
            margin: 0,
            padding: 0,
            minHeight: 0,
            maxHeight: 'calc(1.7em * ' + codeLines.length + ')',
            overflowY: 'auto',
            borderRadius: 0,
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none',  // IE 10+
          }}
          codeTagProps={{ className: 'hide-scrollbar' }}
          className="hide-scrollbar"
        >
          {codeString}
        </SyntaxHighlighter>
        <div style={{ position: 'absolute', top: 18, right: 18, opacity: 0.13, fontSize: 48 }}>&#123;&#125;</div>
      </div>
      {/* Right: Info */}
      <div className="slide-in-right" style={{ minWidth: 320, maxWidth: 480, flex: '1 1 340px', padding: '0 12px' }}>
        <h1 className="fade-up delay-100" style={{ fontSize: '3.2rem', fontWeight: 700, marginBottom: 0, color: 'var(--text-primary)', lineHeight: 1.1 }}>
          Kirti <span style={{ color: ACCENT }}>Kour</span>
        </h1>
        <div className="fade-up delay-200" style={{ fontSize: '1.7rem', color: '#61dafb', fontWeight: 600, marginBottom: 18 }}>Full Stack Web Developer</div>
        <div className="fade-up delay-300" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: 40 }}>
          I build elegant, responsive web applications with modern technologies. Focused on clean code and intuitive user experiences.
        </div>
        <button onClick={onViewProjects} className="zoom-in delay-400" style={{
          padding: '10px 28px',
          fontSize: '1.05rem',
          fontFamily: 'Fira Mono,monospace',
          fontWeight: 700,
          borderRadius: 10,
          background: ACCENT,
          color: '#fff',
          border: 'none',
          boxShadow: '0 4px 24px #f8717140, 0 2px 8px #0002',
          cursor: 'pointer',
          transition: 'background 0.2s,transform 0.2s',
          letterSpacing: '0.01em',
          minWidth: 120
        }}>
          View Projects &rarr;
        </button>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 