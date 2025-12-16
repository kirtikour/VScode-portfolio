import React, { useState } from 'react';
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscChevronDown,
  VscChevronRight,
  VscEllipsis,
  VscRefresh,
  VscCollapseAll,
  VscCloudDownload,
  VscCheck
} from 'react-icons/vsc';
import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaCertificate,
  FaFileAlt
} from 'react-icons/fa';
import styles from './Sidebar.module.css';

const explorerStructure = [
  {
    type: 'folder',
    name: 'src',
    children: [
      { type: 'file', key: 'home', label: 'Home.jsx', icon: <FaHtml5 color="#e34c26" /> },
      { type: 'file', key: 'about', label: 'readaboutme.md', icon: <FaFileAlt color="#4d5f7f" /> },
      { type: 'file', key: 'skills', label: 'Skills.jsx', icon: <FaTools color="#facc15" /> },
      { type: 'file', key: 'projects', label: 'Projects.jsx', icon: <FaProjectDiagram color="#4ade80" /> },
      { type: 'file', key: 'contact', label: 'Contact.jsx', icon: <FaEnvelope color="#a78bfa" /> },
      { type: 'file', key: 'certifications', label: 'Certifications.jsx', icon: <FaCertificate color="#facc15" /> },
      { type: 'file', key: 'resume', label: 'Resume.pdf', icon: <FaFileAlt color="#e34c26" /> },
      { type: 'file', key: 'github', label: 'github.md', icon: <FaGithub color="#c9d1d9" /> },
    ],
  },
];

function Folder({ name, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 2 }}>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--text-primary)', padding: '2px 0 2px 4px', userSelect: 'none', fontSize: 13, fontWeight: 'bold' }}
        onClick={() => setOpen(o => !o)}
      >
        {open ? <VscChevronDown style={{ marginRight: 4 }} /> : <VscChevronRight style={{ marginRight: 4 }} />}
        <span>{name}</span>
      </div>
      {open && <div style={{ paddingLeft: 12 }}>{children}</div>}
    </div>
  );
}

function File({ label, icon, active, onClick }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '4px 0 4px 20px',
        color: active ? '#ffffff' : 'var(--text-secondary)',
        background: active ? 'var(--hover-bg)' : 'transparent',
        fontSize: 13,
        whiteSpace: 'nowrap'
      }}
      onClick={onClick}
      title={label}
      className={styles.fileItem}
    >
      <span style={{ marginRight: 8, display: 'flex', alignItems: 'center', width: 16 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

// --- Sidebar Views ---

const ExplorerView = ({ activeSection, onSectionChange }) => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  return (
    <div className={styles.explorer}>
      <div className={styles.sidebarHeader}>
        <span style={{ fontSize: '0.8rem' }}>EXPLORER</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <VscEllipsis />
        </div>
      </div>

      <div className={styles.sectionHeader} onClick={() => setPortfolioOpen(!portfolioOpen)}>
        {portfolioOpen ? <VscChevronDown className={styles.chevron} /> : <VscChevronRight className={styles.chevron} />}
        <span style={{ fontWeight: 700 }}>PORTFOLIO</span>
      </div>

      {portfolioOpen && (
        <div className={styles.sectionContent}>
          {explorerStructure.map((item) => (
            <Folder key={item.name} name={item.name}>
              {item.children.map(child => (
                <File
                  key={child.key}
                  label={child.label}
                  icon={child.icon}
                  active={activeSection === child.key}
                  onClick={() => onSectionChange(child.key)}
                />
              ))}
            </Folder>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchView = ({ onSectionChange }) => {
  const [query, setQuery] = useState('');

  const results = explorerStructure[0].children.filter(child =>
    child.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.explorer}>
      <div className={styles.sidebarHeader}>SEARCH</div>
      <div style={{ padding: '10px 15px' }}>
        <div style={{
          background: '#3c3c3c',
          border: '1px solid #3c3c3c',
          padding: '4px 6px',
          display: 'flex',
          marginBottom: 10
        }}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              width: '100%',
              outline: 'none',
              fontSize: '13px'
            }}
          />
        </div>
        {query && (
          <div>
            <div style={{ fontSize: '0.8rem', color: '#ccc', marginBottom: 8 }}>
              {results.length} results found
            </div>
            {results.map(child => (
              <File
                key={child.key}
                label={child.label}
                icon={child.icon}
                onClick={() => onSectionChange(child.key)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const GitView = () => (
  <div className={styles.explorer}>
    <div className={styles.sidebarHeader}>SOURCE CONTROL</div>
    <div style={{ padding: '10px 15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Repositories</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <VscRefresh style={{ cursor: 'pointer' }} />
          <VscCheck style={{ cursor: 'pointer' }} />
          <VscEllipsis style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ background: '#3c3c3c', padding: 6, marginBottom: 10, display: 'flex' }}>
        <input
          placeholder="Message (Ctrl+Enter to commit on 'master')"
          style={{ background: 'transparent', border: 'none', color: '#ccc', fontSize: '12px', width: '100%', outline: 'none' }}
        />
      </div>

      <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        <span>Changes</span>
        <span style={{ background: '#3c3c3c', padding: '0 6px', borderRadius: 10, fontSize: '0.75rem' }}>1</span>
      </div>

      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', color: '#85d085' }}>
        <span style={{ color: '#c9d1d9' }}>M</span> kirtikourkatariaCv.pdf
        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#8b949e' }}>U</span>
      </div>
    </div>
  </div>
);

const DebugView = () => (
  <div className={styles.explorer}>
    <div className={styles.sidebarHeader}>RUN AND DEBUG</div>
    <div style={{ padding: '10px 15px' }}>

      {/* VARIABLES */}
      <div style={{ marginBottom: 15 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 5 }}>
          <VscChevronDown style={{ marginRight: 5 }} /> VARIABLES
        </div>
        <div style={{ marginLeft: 15, fontFamily: 'Consolas, monospace', fontSize: '12px' }}>
          <div style={{ color: '#569cd6' }}>location: <span style={{ color: '#ce9178' }}>"Pakistan"</span></div>
          <div style={{ color: '#569cd6' }}>role: <span style={{ color: '#ce9178' }}>"Software Engineer"</span></div>
          <div style={{ color: '#569cd6' }}>experience: <span style={{ color: '#b5cea8' }}>2.5</span></div>
          <div style={{ color: '#569cd6' }}>react: <span style={{ color: '#ce9178' }}>"Expert"</span></div>
          <div style={{ color: '#569cd6' }}>node: <span style={{ color: '#ce9178' }}>"Advanced"</span></div>
        </div>
      </div>

      {/* WATCH */}
      <div style={{ marginBottom: 15 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 5 }}>
          <VscChevronDown style={{ marginRight: 5 }} /> WATCH
        </div>
        <div style={{ marginLeft: 15, fontFamily: 'Consolas, monospace', fontSize: '12px' }}>
          <div style={{ color: '#9cdcfe' }}>coffeeLevels: <span style={{ color: '#b5cea8' }}>98%</span></div>
          <div style={{ color: '#9cdcfe' }}>bugsFixed: <span style={{ color: '#b5cea8' }}>Infinity</span></div>
          <div style={{ color: '#9cdcfe' }}>learning: <span style={{ color: '#569cd6' }}>true</span></div>
        </div>
      </div>

      {/* CALL STACK */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 5 }}>
          <VscChevronDown style={{ marginRight: 5 }} /> CALL STACK
        </div>
        <div style={{ marginLeft: 15, fontSize: '12px', color: 'var(--text-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e34c26' }}></div>
            Current Project
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#facc15' }}></div>
            Freelancing
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#58a6ff' }}></div>
            University Grad
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4, opacity: 0.5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8b949e' }}></div>
            Hello World
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: 10, background: 'var(--bg-secondary)', borderLeft: '3px solid #dcdcaa', fontSize: '11px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
        "Debugging is like being the detective in a crime movie where you are also the murderer."
      </div>

    </div>
  </div>
);

const ExtensionsView = () => {
  const themes = [
    {
      name: 'GitHub Dark Dimmed',
      author: 'GitHub',
      colors: {
        '--bg-primary': '#0d1117',
        '--bg-secondary': '#161b22',
        '--bg-sidebar': '#0d1117',
        '--border-color': '#30363d',
        '--text-primary': '#c9d1d9',
        '--text-secondary': '#8b949e',
        '--accent-color': '#58a6ff'
      }
    },
    {
      name: 'Dracula',
      author: 'Dracula Theme',
      colors: {
        '--bg-primary': '#282a36',
        '--bg-secondary': '#44475a',
        '--bg-sidebar': '#21222c',
        '--border-color': '#6272a4',
        '--text-primary': '#f8f8f2',
        '--text-secondary': '#bd93f9',
        '--accent-color': '#ff79c6'
      }
    },
    {
      name: 'One Dark Pro',
      author: 'Binaryify',
      colors: {
        '--bg-primary': '#282c34',
        '--bg-secondary': '#21252b',
        '--bg-sidebar': '#21252b',
        '--border-color': '#3e4451',
        '--text-primary': '#abb2bf',
        '--text-secondary': '#5c6370',
        '--accent-color': '#61afef'
      }
    },
    {
      name: 'Monokai Pro',
      author: 'Monokai',
      colors: {
        '--bg-primary': '#2d2a2e',
        '--bg-secondary': '#403e41',
        '--bg-sidebar': '#2d2a2e',
        '--border-color': '#727072',
        '--text-primary': '#fcfcfa',
        '--text-secondary': '#939293',
        '--accent-color': '#ffd866'
      }
    },
    {
      name: 'Night Owl',
      author: 'Sarah Drasner',
      colors: {
        '--bg-primary': '#011627',
        '--bg-secondary': '#0b2942',
        '--bg-sidebar': '#011627',
        '--border-color': '#5f7e97',
        '--text-primary': '#d6deeb',
        '--text-secondary': '#7fdbca',
        '--accent-color': '#82aaff'
      }
    },
  ];

  const applyTheme = (theme) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.sidebarHeader}>EXTENSIONS</div>
      <div style={{ padding: 10 }}>
        <input
          type="text"
          placeholder="Search Extensions..."
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            padding: '6px',
            color: 'var(--text-primary)',
            width: '100%',
            outline: 'none',
            fontSize: '13px',
            marginBottom: 15
          }}
        />

        <div style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: 8, color: 'var(--text-secondary)' }}>INSTALLED - THEMES</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {themes.map((theme, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: 10, alignItems: 'center', cursor: 'pointer' }}
              onClick={() => applyTheme(theme)}
            >
              <div style={{ width: 32, height: 32, background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                T
              </div>
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--text-primary)' }}>{theme.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{theme.author}</div>
              </div>
              <div style={{ background: '#238636', color: '#fff', padding: '2px 8px', fontSize: '11px', borderRadius: 2 }}>
                Set
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccountView = () => (
  <div className={styles.explorer}>
    <div className={styles.sidebarHeader}>ACCOUNTS</div>
    <div style={{ padding: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#58a6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
          K
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px' }}>Kirti Kour</div>
          <div style={{ fontSize: '11px', color: '#8b949e' }}>GitHub Account</div>
        </div>
      </div>
      <div style={{ marginTop: 20, fontSize: '12px', color: '#8b949e' }}>
        Synced
      </div>
    </div>
  </div>
);

import { TechBadge } from './Certifications';
import { ProjectCard } from './Projects';

const SettingsView = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('projects'); // projects | certs

  // Content Generators State
  const [projectForm, setProjectForm] = useState({ title: 'New Project', desc: 'Description of your awesome project...', tags: 'React, Node', link: 'https://github.com/kirtikour', accent: '#3fb950' });
  const [certForm, setCertForm] = useState({ title: 'New Certification', provider: 'Coursera', date: '2024', id: 'ID123', link: '#', tags: 'Skill 1, Skill 2', color: '#58a6ff', logo: 'C' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Access Denied: Invalid Credentials');
    }
  };

  const handleAddProject = () => {
    if (!window.confirm("Are you sure you want to add this Project to your portfolio?")) return;

    const newItem = {
      title: projectForm.title,
      desc: projectForm.desc,
      tech: projectForm.tags.split(',').map(t => t.trim()),
      links: [{ label: 'GitHub', url: projectForm.link }],
      accent: projectForm.accent,
      iconBg: `${projectForm.accent}20`
    };

    const existing = JSON.parse(localStorage.getItem('custom_projects') || '[]');
    const updated = [...existing, newItem];
    localStorage.setItem('custom_projects', JSON.stringify(updated));

    // Trigger update
    window.dispatchEvent(new Event('projectsUpdated'));
    alert('Project Added successfully locally!');
  };

  const handleAddCert = () => {
    if (!window.confirm("Are you sure you want to add this Certification to your portfolio?")) return;

    const newItem = {
      title: certForm.title,
      provider: certForm.provider,
      date: certForm.date,
      id: certForm.id,
      link: certForm.link,
      color: certForm.color,
      logo: certForm.logo,
      tech: certForm.tags.split(',').map(t => t.trim())
    };

    const existing = JSON.parse(localStorage.getItem('custom_certs') || '[]');
    const updated = [...existing, newItem];
    localStorage.setItem('custom_certs', JSON.stringify(updated));

    // Trigger update
    window.dispatchEvent(new Event('certsUpdated'));
    alert('Certification Added successfully locally!');
  };

  if (!authenticated) {
    return (
      <div className={styles.explorer}>
        <div className={styles.sidebarHeader}>SETTINGS (PROTECTED)</div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 15 }}>
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div style={{ background: 'var(--bg-secondary)', width: 60, height: 60, borderRadius: '50%', margin: '0 auto 15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <VscSettingsGear size={30} color="var(--accent-color)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Admin Access</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Enter password to manage content.</p>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: 4,
                marginBottom: 10,
                outline: 'none'
              }}
            />
            {error && <div style={{ color: '#f85149', fontSize: '0.75rem', marginBottom: 10 }}>{error}</div>}
            <button
              type="submit"
              className={styles.adminBtn}
              style={{ width: '100%', background: '#238636' }}
            >
              Unlock Dashboard
            </button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.sidebarHeader}>CONTENT MANAGER</div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
        <div
          onClick={() => setActiveTab('projects')}
          style={{ flex: 1, padding: 10, textAlign: 'center', cursor: 'pointer', fontSize: '0.8rem', background: activeTab === 'projects' ? 'var(--bg-secondary)' : 'transparent', borderBottom: activeTab === 'projects' ? '2px solid var(--accent-color)' : 'none', color: activeTab === 'projects' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
        >
          Add Project
        </div>
        <div
          onClick={() => setActiveTab('certs')}
          style={{ flex: 1, padding: 10, textAlign: 'center', cursor: 'pointer', fontSize: '0.8rem', background: activeTab === 'certs' ? 'var(--bg-secondary)' : 'transparent', borderBottom: activeTab === 'certs' ? '2px solid var(--accent-color)' : 'none', color: activeTab === 'certs' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
        >
          Add Cert
        </div>
      </div>

      <div style={{ padding: 15, overflowY: 'auto', height: 'calc(100% - 90px)' }}>

        {activeTab === 'projects' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', marginTop: 10 }}>DETAILS</div>
            <input placeholder="Project Title" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} className={styles.adminInput} />
            <textarea placeholder="Description" value={projectForm.desc} onChange={e => setProjectForm({ ...projectForm, desc: e.target.value })} className={styles.adminInput} style={{ height: 60, fontFamily: 'sans-serif' }} />
            <input placeholder="Tags (comma separated)" value={projectForm.tags} onChange={e => setProjectForm({ ...projectForm, tags: e.target.value })} className={styles.adminInput} />
            <input placeholder="GitHub Link" value={projectForm.link} onChange={e => setProjectForm({ ...projectForm, link: e.target.value })} className={styles.adminInput} />

            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', marginTop: 10 }}>PREVIEW</div>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center', marginBottom: -10 }}>
              <ProjectCard proj={{
                title: projectForm.title || 'Title',
                desc: projectForm.desc || 'Description',
                tech: projectForm.tags.split(',').map(t => t.trim()),
                links: [{ label: 'GitHub', url: projectForm.link }],
                accent: projectForm.accent,
                iconBg: `${projectForm.accent}20`
              }} />
            </div>

            <button onClick={handleAddProject} className={styles.adminBtn} style={{ marginTop: 10 }}>Confirm & Add Project</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', marginTop: 10 }}>DETAILS</div>
            <input placeholder="Cert Title" value={certForm.title} onChange={e => setCertForm({ ...certForm, title: e.target.value })} className={styles.adminInput} />
            <input placeholder="Provider" value={certForm.provider} onChange={e => setCertForm({ ...certForm, provider: e.target.value })} className={styles.adminInput} />
            <input placeholder="Date" value={certForm.date} onChange={e => setCertForm({ ...certForm, date: e.target.value })} className={styles.adminInput} />
            <input placeholder="Link" value={certForm.link} onChange={e => setCertForm({ ...certForm, link: e.target.value })} className={styles.adminInput} />
            <input placeholder="Tags" value={certForm.tags} onChange={e => setCertForm({ ...certForm, tags: e.target.value })} className={styles.adminInput} />
            <div style={{ display: 'flex', gap: 10 }}>
              <input placeholder="Logo Char" maxLength={2} value={certForm.logo} onChange={e => setCertForm({ ...certForm, logo: e.target.value })} className={styles.adminInput} style={{ width: 60 }} />
              <input type="color" value={certForm.color} onChange={e => setCertForm({ ...certForm, color: e.target.value })} style={{ height: 35, width: 50, border: 'none', background: 'transparent' }} />
            </div>

            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', marginTop: 10 }}>PREVIEW</div>
            <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
              <TechBadge cert={{
                title: certForm.title || 'Title',
                provider: certForm.provider || 'Provider',
                date: certForm.date || 'Date',
                id: certForm.id || 'ID',
                link: certForm.link,
                color: certForm.color,
                logo: certForm.logo,
                tech: certForm.tags.split(',').map(t => t.trim())
              }} />
            </div>

            <button onClick={handleAddCert} className={styles.adminBtn}>Confirm & Add Cert</button>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Main Sidebar Component ---

const Sidebar = ({ activeSection, onSectionChange, isOpen, isMobile }) => {
  const [activeView, setActiveView] = useState('explorer'); // explorer, search, git, debug, extensions, account, settings

  return (
    <aside
      className={`${styles.sidebarContainer} ${isMobile && !isOpen ? styles.mobileHidden : ''}`}
      style={{ position: 'absolute', left: 0, top: 0, height: '100%', minHeight: '100%', zIndex: 100 }}
    >
      {/* Activity Bar */}
      <div className={styles.activityBar}>
        <div
          className={`${styles.activityIcon} ${activeView === 'explorer' ? styles.active : ''}`}
          onClick={() => setActiveView('explorer')}
          title="Explorer (Ctrl+Shift+E)"
        >
          <VscFiles size={24} />
        </div>
        <div
          className={`${styles.activityIcon} ${activeView === 'search' ? styles.active : ''}`}
          onClick={() => setActiveView('search')}
          title="Search (Ctrl+Shift+F)"
        >
          <VscSearch size={24} />
        </div>
        <div
          className={`${styles.activityIcon} ${activeView === 'git' ? styles.active : ''}`}
          onClick={() => setActiveView('git')}
          title="Source Control (Ctrl+Shift+G)"
        >
          <VscSourceControl size={24} />
        </div>
        <div
          className={`${styles.activityIcon} ${activeView === 'debug' ? styles.active : ''}`}
          onClick={() => setActiveView('debug')}
          title="Run and Debug (Ctrl+Shift+D)"
        >
          <VscDebugAlt size={24} />
        </div>
        <div
          className={`${styles.activityIcon} ${activeView === 'extensions' ? styles.active : ''}`}
          onClick={() => setActiveView('extensions')}
          title="Extensions (Ctrl+Shift+X)"
        >
          <VscExtensions size={24} />
        </div>

        <div className={styles.activitySpacer} />

        <div
          className={`${styles.activityIcon} ${activeView === 'account' ? styles.active : ''}`}
          onClick={() => setActiveView('account')}
          title="Accounts"
        >
          <VscAccount size={24} />
        </div>
        <div
          className={`${styles.activityIcon} ${activeView === 'settings' ? styles.active : ''}`}
          onClick={() => setActiveView('settings')}
          title="Manage & Settings"
        >
          <VscSettingsGear size={24} />
        </div>
      </div>

      {/* Sidebar Content Pane */}
      {activeView === 'explorer' && <ExplorerView activeSection={activeSection} onSectionChange={onSectionChange} />}
      {activeView === 'search' && <SearchView onSectionChange={onSectionChange} />}
      {activeView === 'git' && <GitView />}
      {activeView === 'debug' && <DebugView />}
      {activeView === 'extensions' && <ExtensionsView />}
      {activeView === 'account' && <AccountView />}
      {activeView === 'settings' && <SettingsView />}

    </aside>
  );
};

export default Sidebar;