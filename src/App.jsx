import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import BackgroundToggle from './components/BackgroundToggle';
import styles from './App.module.css';

import HomeSection from './components/HomeSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Github from './components/Github';
import Header from './components/Header';
import Lamp from './components/Lamp';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import Help from './components/Help';
import Breadcrumbs from './components/Breadcrumbs';
import Resume from './components/Resume';

const SECTION_LABELS = {
  home: 'Home',
  about: 'readaboutme.md',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact',
  certifications: 'Certifications',
  resume: 'resume.pdf',
  github: 'github.md',
  help: 'UserGuide.md'
};

function AnimatedCodeSymbolsBg() {
  // Each symbol has: text, base x/y, drift amplitude, speed, and color
  const symbols = [
    { text: '{', x: 60, y: 120, color: '#61dafb', size: 80, amp: 30, speed: 0.18 },
    { text: '>', x: 800, y: 500, color: '#e2e8f0', size: 80, amp: 40, speed: 0.13 },
    { text: '</>', x: 400, y: 300, color: '#facc15', size: 120, amp: 50, speed: 0.09 },
    { text: '()', x: 200, y: 500, color: '#a3e635', size: 60, amp: 25, speed: 0.15 },
    { text: '[]', x: 700, y: 200, color: '#f472b6', size: 60, amp: 35, speed: 0.11 },
    { text: '{}', x: 600, y: 100, color: '#38bdf8', size: 40, amp: 20, speed: 0.21 },
    { text: '/* */', x: 100, y: 400, color: '#fbbf24', size: 40, amp: 28, speed: 0.17 },
  ];
  const [t, setT] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    let running = true;
    function animate() {
      setT(t => t + 0.016);
      if (running) rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'none', zIndex: 0, opacity: 1, pointerEvents: 'none' }}>
      <svg className={styles.backgroundCodeSymbols} width="100%" height="100%" viewBox="0 0 900 600" preserveAspectRatio="none" style={{ opacity: 0.11 }}>
        {symbols.map((s, i) => {
          // Animate x/y with sine/cosine drift
          const dx = s.x + Math.sin(t * s.speed + i) * s.amp;
          const dy = s.y + Math.cos(t * s.speed + i) * s.amp;
          return (
            <text key={i} x={dx} y={dy} fontSize={s.size} fill={s.color} style={{ transition: 'none' }}>{s.text}</text>
          );
        })}
      </svg>
    </div>
  );
}

function PianoTilesBg() {
  const rows = 5, cols = 8;
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      tiles.push({ key: `${r}-${c}`, r, c });
    }
  }
  function playSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = 220 + Math.random() * 600;
    o.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.13);
    o.onended = () => ctx.close();
  }
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'none', zIndex: 0, opacity: 1, pointerEvents: 'none' }}>
      <div className={styles.backgroundPianoTiles} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gridTemplateRows: `repeat(${rows},1fr)`, width: '100%', height: '100%', opacity: 0.15 }}>
        {tiles.map(tile => (
          <div
            key={tile.key}
            style={{
              border: '1px solid #e5e7eb',
              background: '#e5e7eb',
              opacity: 0.5,
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
              borderRadius: '4px',
              margin: '2px',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  // Tabs state: openTabs is an array of section keys, activeTab is the current section key
  const [openTabs, setOpenTabs] = useState(['home']);
  const [activeTab, setActiveTab] = useState('home');

  // Open or activate a tab
  const handleSectionChange = (section) => {
    setOpenTabs((tabs) =>
      tabs.includes(section) ? tabs : [...tabs, section]
    );
    setActiveTab(section);
  };

  // Close a tab
  const handleTabClose = (section, e) => {
    e.stopPropagation();
    setOpenTabs((tabs) => {
      const idx = tabs.indexOf(section);
      const newTabs = tabs.filter((t) => t !== section);
      // If the closed tab was active, activate the next most recent tab
      if (section === activeTab) {
        const nextIdx = idx > 0 ? idx - 1 : 0;
        setActiveTab(newTabs[nextIdx] || 'home');
      }
      return newTabs.length ? newTabs : ['home'];
    });
  };

  // Handler to switch to contact section (for AboutAndSkills)
  const handleContactClick = () => handleSectionChange('contact');

  // Render content for the active tab
  const renderContent = (section) => {
    switch (section) {
      case 'home':
        return <HomeSection onViewProjects={() => handleSectionChange('projects')} />;
      case 'about':
        return <About onContactClick={handleContactClick} />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'certifications':
        return <Certifications />;
      case 'resume':
        return <Resume />;
      case 'github':
        return <Github />;
      case 'help':
        return <Help />;

      default:
        return null;
    }
  };

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const toggleTerminal = () => setIsTerminalOpen(!isTerminalOpen);

  // Mobile Sidebar Logic
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(true);
      else if (mobile && !isSidebarOpen) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={styles.appContainer}>
      <Header onToggleTerminal={toggleTerminal} onNavigate={handleSectionChange} onToggleSidebar={toggleSidebar} />

      <div className={styles.vscodeLayout + ' d-flex'} style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Mobile Overlay */}
        {isMobile && isSidebarOpen && (
          <div
            className={`${styles.sidebarOverlay} ${styles.visible}`}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar
          activeSection={activeTab}
          onSectionChange={(section) => {
            handleSectionChange(section);
            if (isMobile) setIsSidebarOpen(false); // Close on selection
          }}
          isOpen={isSidebarOpen}
          isMobile={isMobile}
        />

        <div
          className={styles.mainArea + ' flex-grow-1'}
          style={{
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            marginLeft: isMobile ? 0 : 220, // Match sidebar width exactly
            display: 'flex',
            flexDirection: 'column',
            transition: 'margin-left 0.3s ease'
          }}
        >
          <Lamp />
          <Tabs
            openTabs={openTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onTabClose={handleTabClose}
            sectionLabels={SECTION_LABELS}
          />
          <Breadcrumbs activeTab={activeTab} />
          <div className={styles.contentArea + ' p-4'} style={{ flex: 1, overflowY: 'auto' }}>
            <div key={activeTab} className="fade-enter">
              {renderContent(activeTab)}
            </div>
          </div>
          {isTerminalOpen && <Terminal onNavigate={handleSectionChange} onClose={() => setIsTerminalOpen(false)} />}
        </div>
      </div>
      {!isMobile && <StatusBar />}
      <style>{`
        @media (max-width: 768px) {
          .d-none-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
