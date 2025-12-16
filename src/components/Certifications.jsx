import React, { useEffect, useState } from 'react';
import { FaCertificate, FaLinkedin, FaCheckCircle, FaTerminal } from 'react-icons/fa';

const initialCertifications = [
  {
    title: 'Intro to Web Development',
    fullName: 'Introduction to Web Development with HTML, CSS, JavaScript',
    provider: 'IBM',
    date: 'Feb 2024',
    id: 'D62C0E38',
    link: 'https://coursera.org/share/d62c0e3891b61b3bb5bea3981df8fc81',
    color: '#0562C1', // IBM Blue
    logo: 'I',
    tech: ['HTML5', 'CSS3', 'JS']
  },
  {
    title: 'Python for Everybody',
    fullName: 'Programming for Everybody (Getting Started with Python)',
    provider: 'Univ. Michigan',
    date: '2024',
    id: 'A061EBBF',
    link: 'https://coursera.org/share/a061ebbfb835b8c8f34940219385da0f',
    color: '#FFCB05', // Maize
    logo: 'M',
    tech: ['Python3', 'Syntax']
  },
  {
    title: 'AI For Everyone',
    fullName: 'AI For Everyone',
    provider: 'DeepLearning.AI',
    date: 'Jan 2025',
    id: 'B2965943',
    link: 'https://coursera.org/share/b2965943137ef8930485d5ba6810bef3',
    color: '#0057E7', // DL Blue
    logo: 'DL',
    tech: ['AI', 'ML', 'Strategy']
  },
  {
    title: 'React Basics',
    fullName: 'React Basics',
    provider: 'Meta',
    date: '2024',
    id: '63BA878F',
    link: 'https://coursera.org/share/63ba878ff9ca9b3956c31176dbfbdc9f',
    color: '#61dafb', // React Cyan
    logo: '⚛',
    tech: ['React', 'Components']
  },
  {
    title: 'Programming with JS',
    fullName: 'Programming with JavaScript',
    provider: 'Meta',
    date: '2024',
    id: 'E949656C',
    link: 'https://coursera.org/share/e949656cabfef5b1aec42b0352ecc104',
    color: '#F7DF1E', // JS Yellow
    logo: 'JS',
    tech: ['ES6+', 'DOM']
  },
];

const Certifications = () => {
  const [certifications, setCertifications] = useState(initialCertifications);

  useEffect(() => {
    // Load custom certifications from LocalStorage
    const storedCerts = localStorage.getItem('custom_certs');
    if (storedCerts) {
      try {
        const parsed = JSON.parse(storedCerts);
        setCertifications([...initialCertifications, ...parsed]);
      } catch (e) {
        console.error("Failed to parse custom certs", e);
      }
    }

    // Listen for storage events (allows preview to update real-time if in same window context?)
    // Actually, storage event only fires on other tabs. We can use a custom event.
    const handleUpdate = () => {
      const updated = localStorage.getItem('custom_certs');
      if (updated) {
        setCertifications([...initialCertifications, ...JSON.parse(updated)]);
      }
    };

    window.addEventListener('certsUpdated', handleUpdate);
    return () => window.removeEventListener('certsUpdated', handleUpdate);
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', paddingTop: 40, paddingBottom: 60 }}>

      {/* Programmer Header */}
      <div style={{ marginBottom: 50, textAlign: 'center' }}>
        <h2 style={{
          color: '#e6edf3',
          fontSize: '2rem',
          marginBottom: 10,
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span style={{ color: '#facc15' }}>function</span>
          <span>getCertifications()</span>
          <span style={{ color: '#8b949e' }}>{'{'}</span>
        </h2>
        <p style={{ color: '#8b949e', fontFamily: 'monospace', fontSize: '0.9rem' }}>
          return verified_credentials.filter(c ={'>'} c.status === 'certified');
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 25,
        padding: '0 20px'
      }}>
        {certifications.map((cert, index) => (
          <TechBadge key={index} cert={cert} />
        ))}
      </div>

      <div style={{ marginTop: 60, textAlign: 'center' }}>
        <p style={{ color: '#8b949e', marginBottom: 20, fontFamily: 'monospace' }}>
          {'}'} // End of certifications
        </p>
        <a
          href="https://linkedin.com/in/kirtikour"
          target="_blank"
          rel="noreferrer"
          className="linkedin-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 28px',
            borderRadius: 100,
            background: '#0a66c2',
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)'
          }}
        >
          <FaLinkedin size={20} /> Connect on LinkedIn
        </a>
      </div>

      <style>{`
        .linkedin-btn:hover { 
          background: #004182 !important; 
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(10, 102, 194, 0.4) !important;
        }
      `}</style>
    </div>
  );
};

export const TechBadge = ({ cert }) => {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      className="tech-badge"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 12,
        overflow: 'hidden',
        textDecoration: 'none',
        position: 'relative',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        minHeight: 320 // Ensure consistent height for preview
      }}
    >
      {/* Top Decoration Line */}
      <div style={{ height: 4, background: cert.color, width: '100%' }}></div>

      {/* Content Area */}
      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Header: Logo & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div style={{
            width: 50,
            height: 50,
            background: '#161b22',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: cert.color,
            border: `1px solid ${cert.color}40`,
            boxShadow: `0 0 15px ${cert.color}20`
          }}>
            {cert.logo}
          </div>
          <div style={{
            fontSize: '0.7rem',
            background: 'rgba(56, 139, 253, 0.1)',
            color: '#58a6ff',
            padding: '4px 8px',
            borderRadius: 4,
            fontFamily: 'monospace',
            border: '1px solid rgba(56, 139, 253, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}>
            <FaCheckCircle size={10} /> VERIFIED
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.1rem',
          color: '#e6edf3',
          margin: '0 0 8px 0',
          fontWeight: 600,
          lineHeight: 1.4
        }}>
          {cert.title}
        </h3>

        <div style={{ fontSize: '0.85rem', color: '#8b949e', marginBottom: 20 }}>
          {cert.provider}
        </div>

        {/* Tech Specs (Programmer Touch) */}
        <div style={{
          marginTop: 'auto',
          background: '#161b22',
          borderRadius: 8,
          padding: 12,
          border: '1px solid #30363d',
          fontFamily: 'monospace',
          fontSize: '0.75rem'
        }}>
          <div style={{ color: '#8b949e', marginBottom: 4 }}>// specs</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <span style={{ color: '#79c0ff' }}>id:</span>
            <span style={{ color: '#a5d6ff' }}>"{cert.id}"</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <span style={{ color: '#79c0ff' }}>issued:</span>
            <span style={{ color: '#a5d6ff' }}>"{cert.date}"</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#79c0ff' }}>stack:</span>
            <span style={{ color: '#a5d6ff' }}>[{cert.tech ? cert.tech.join(', ') : ''}]</span>
          </div>
        </div>

      </div>

      {/* Hover Glow Effect */}
      <style>{`
        .tech-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
          border-color: ${cert.color};
        }
        .tech-badge:hover h3 {
          color: ${cert.color};
        }
      `}</style>
    </a>
  );
};

export default Certifications;