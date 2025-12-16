import React from 'react';
import { FaBolt, FaBrain, FaServer, FaLeaf } from 'react-icons/fa';

const SkillBar = ({ skills, level, color, width }) => (
  <div style={{ marginBottom: 25 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: '"Fira Code", monospace', fontSize: '0.9rem', color: '#e5e7eb' }}>
      <span>{skills}</span>
      <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>[{level}]</span>
    </div>
    <div style={{
      height: 6,
      background: '#2d2d2d',
      borderRadius: 3,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        width: width,
        background: color,
        borderRadius: 3,
        boxShadow: `0 0 10px ${color}40`
      }} />
    </div>
  </div>
);

const DnaItem = ({ icon, title, sub, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ color: color, fontSize: 20 }}>{icon}</div>
    <div style={{ fontFamily: '"Fira Code", monospace' }}>
      <div style={{ color: '#e5e7eb', fontSize: '0.95rem', fontWeight: 600 }}>{title}</div>
      {sub && <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginTop: 2 }}>({sub})</div>}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', paddingTop: 20 }}>
      {/* Terminal Box */}
      <div style={{
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 8,
        padding: 24,
        position: 'relative'
      }}>
        {/* Terminal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div> {/* Red */}
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div> {/* Yellow */}
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div> {/* Green */}
          </div>
          <div style={{ color: '#9ca3af', fontFamily: '"Fira Code", monospace', fontSize: '0.9rem' }}>
            nvim skill_matrix.json
          </div>
          <div style={{ width: 52 }}></div> {/* Spacer for center alignment */}
        </div>

        {/* Skill Bars */}
        <div style={{ marginBottom: 40 }}>
          <SkillBar
            skills="Python / C++ / Java / JavaScript"
            level="Expert"
            color="#3b82f6"
            width="100%"
          />
          <SkillBar
            skills="React / Next.js / Tailwind CSS"
            level="Advanced"
            color="#06b6d4"
            width="90%"
          />
          <SkillBar
            skills="Node.js / Express / MongoDB / Django"
            level="Advanced"
            color="#22c55e"
            width="85%"
          />
          <SkillBar
            skills="TensorFlow / PyTorch / NLP"
            level="Intermediate"
            color="#eab308"
            width="75%"
          />
          <SkillBar
            skills="Pandas / NumPy / Scikit-learn"
            level="Intermediate"
            color="#f97316"
            width="70%"
          />
          <SkillBar
            skills="Git / GitHub / Docker / Postman"
            level="Intermediate"
            color="#ef4444"
            width="65%"
          />
        </div>

        {/* Technical DNA */}
        <div>
          <h3 style={{
            color: '#e5e7eb',
            fontFamily: '"Fira Code", monospace',
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 24
          }}>
            Technical DNA
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24
          }}>
            <DnaItem
              icon={<FaBolt />}
              title="Problem Solving"
              sub="DSA & Logic"
              color="#facc15"
            />
            <DnaItem
              icon={<FaBrain />}
              title="Deep Learning"
              sub="Neural Networks"
              color="#a855f7"
            />
            <DnaItem
              icon={<FaServer />}
              title="Backend Eng"
              sub="Scalable Systems"
              color="#3b82f6"
            />
            <DnaItem
              icon={<FaLeaf />}
              title="Data Science"
              sub="Analytics"
              color="#4ade80"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;