import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaHeartbeat, FaPenNib, FaUtensils, FaUniversity, FaRobot, FaJs, FaLeaf, FaSun, FaBrain, FaLayerGroup, FaComments, FaDatabase } from 'react-icons/fa';

const initialProjects = [
  {
    title: 'Solar Segmentation SSL',
    desc: 'Research-grade Geospatial Intelligence system using Self-Supervised Learning to identify solar panels in satellite imagery. Solves data scarcity via unlabelled data pre-training.',
    tech: ['Python', 'PyTorch', 'OpenCV'],
    icon: <FaSun size={28} color="#facc15" />,
    iconBg: 'rgba(250, 204, 21, 0.1)',
    accent: '#facc15',
    links: [
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Braille Recognition AI',
    desc: 'Computer Vision and Deep Learning system for recognizing Braille characters and words from images.',
    tech: ['Python', 'Deep Learning', 'OpenCV'],
    icon: <FaBrain size={28} color="#f87171" />,
    iconBg: 'rgba(248, 113, 113, 0.1)',
    accent: '#f87171',
    links: [
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'HEALR',
    desc: 'Checkup of pollution levels in various areas. Integrated with a MERN dashboard for geospatial tracking.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    views: 4512,
    icon: <FaHeartbeat size={28} color="#4ade80" />,
    iconBg: 'rgba(74, 222, 128, 0.1)',
    accent: '#4ade80',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Recognise AI',
    desc: 'AI-powered system that recognizes English handwritten characters using Convolutional Neural Networks.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    icon: <FaBrain size={28} color="#facc15" />,
    iconBg: 'rgba(250, 204, 21, 0.1)',
    accent: '#facc15',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Cookify',
    desc: 'Full-stack recipe management app with category filtering, search, and dynamic recipe rendering.',
    tech: ['React', 'Django', 'HTML'],
    icon: <FaUtensils size={28} color="#f87171" />,
    iconBg: 'rgba(248, 113, 113, 0.1)',
    accent: '#f87171',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'Campus Manager',
    desc: 'A management system for campus operations, including student, faculty, and course management.',
    tech: ['Python', 'Django', 'HTML'],
    icon: <FaUniversity size={28} color="#61dafb" />,
    iconBg: 'rgba(97, 218, 251, 0.1)',
    accent: '#61dafb',
    links: [
      { label: 'GitHub', url: 'https://github.com/kirtikour/Campus-Management-System' },
    ],
  },
  {
    title: 'ChatMe Platform',
    desc: 'A chatbot project using Python for real-time interactive conversations and automation features.',
    tech: ['Python'],
    icon: <FaComments size={28} color="#a78bfa" />,
    iconBg: 'rgba(167, 139, 250, 0.1)',
    accent: '#a78bfa',
    links: [
      { label: 'GitHub', url: 'https://github.com/kirtikour/python-chatbot' },
    ],
  },
  {
    title: 'JS Playground',
    desc: 'A dedicated codebase for learning, experimenting, and mastering modern JavaScript concepts.',
    tech: ['JavaScript'],
    icon: <FaJs size={28} color="#facc15" />,
    iconBg: 'rgba(250, 204, 21, 0.1)',
    accent: '#facc15',
    links: [
      { label: 'GitHub', url: 'https://github.com/kirtikour/javascript' },
    ],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    // Load custom projects
    const storedProjects = localStorage.getItem('custom_projects');
    if (storedProjects) {
      try {
        const parsed = JSON.parse(storedProjects);
        setProjects([...initialProjects, ...parsed]);
      } catch (e) { console.error(e); }
    }

    const handleUpdate = () => {
      const updated = localStorage.getItem('custom_projects');
      if (updated) {
        setProjects([...initialProjects, ...JSON.parse(updated)]);
      }
    };

    window.addEventListener('projectsUpdated', handleUpdate);
    return () => window.removeEventListener('projectsUpdated', handleUpdate);
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', paddingRight: 8 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <ProjectCard proj={proj} />
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <a href="https://github.com/kirtikour" target="_blank" rel="noopener noreferrer" style={{
          color: '#9ca3af',
          fontFamily: 'Fira Code, monospace',
          fontSize: '0.9rem',
          textDecoration: 'none',
          borderBottom: '1px dashed #6b7280',
          paddingBottom: 2
        }}>
          View more archives on GitHub
        </a>
      </div>
    </div>
  );
}

export const ProjectCard = ({ proj }) => {
  const handleCardClick = (e) => {
    // Prevent navigation if clicking on an inner link or button
    if (e.target.closest('a') || e.target.closest('button')) return;

    const mainLink = proj.links?.find(l => l.label === 'GitHub')?.url || proj.links?.[0]?.url;
    if (mainLink) {
      window.open(mainLink, '_blank');
    }
  };

  return (
    <div className="project-card" style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: 6,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 160,
      transition: 'border-color 0.2s',
      cursor: 'pointer'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--text-secondary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
      onClick={handleCardClick}
    >
      {/* Header: Title Link + Public Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a
            href={proj.links?.find(l => l.label === 'GitHub')?.url || '#'}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#58a6ff',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: 14,
              fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif'
            }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            {proj.title}
          </a>
        </div>
        <span style={{
          fontSize: 12,
          color: '#8b949e',
          border: '1px solid #30363d',
          borderRadius: 12,
          padding: '0 7px',
          display: 'flex',
          alignItems: 'center',
          height: 20,
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif'
        }}>Public</span>
      </div>

      {/* Description */}
      <p style={{
        fontSize: 12,
        color: '#8b949e',
        marginBottom: 16,
        flex: 1,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
        lineHeight: 1.5,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical'
      }}>
        {proj.desc}
      </p>

      {/* Footer: Tech + Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: '#8b949e', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif' }}>
        {/* Primary Tech Dot */}
        {proj.tech && proj.tech[0] && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: proj.accent || '#3fb950'
            }}></span>
            {proj.tech[0]}
          </div>
        )}

        {/* Demo Link if exists */}
        {proj.links?.find(l => l.label === 'Demo') && (
          <a
            href={proj.links.find(l => l.label === 'Demo')?.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: '#8b949e', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, zIndex: 2 }}
            onMouseEnter={e => e.currentTarget.style.color = '#58a6ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={10} /> Demo
          </a>
        )}

        {/* Star count (fake for aesthetic) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <FaGithub size={12} />
        </div>
      </div>
    </div>
  );
};