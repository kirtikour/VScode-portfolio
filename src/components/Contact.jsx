import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaFileDownload } from 'react-icons/fa';

const InputGroup = ({ label, name, value, onChange, placeholder, textarea }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
    <label style={{ color: '#e6edf3', fontSize: '0.9rem', fontWeight: 600 }}>{label}</label>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        style={{
          background: '#010409',
          border: '1px solid #30363d',
          borderRadius: 6,
          padding: 12,
          color: '#e6edf3',
          fontFamily: 'inherit',
          fontSize: '0.95rem',
          outline: 'none',
          resize: 'vertical',
          transition: 'border-color 0.2s'
        }}
        onFocus={e => e.target.style.borderColor = '#58a6ff'}
        onBlur={e => e.target.style.borderColor = '#30363d'}
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          background: '#010409',
          border: '1px solid #30363d',
          borderRadius: 6,
          padding: 12,
          color: '#e6edf3',
          fontFamily: 'inherit',
          fontSize: '0.95rem',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
        onFocus={e => e.target.style.borderColor = '#58a6ff'}
        onBlur={e => e.target.style.borderColor = '#30363d'}
      />
    )}
  </div>
);

const SocialBtn = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    style={{
      width: 40, height: 40,
      borderRadius: 8,
      background: '#21262d',
      border: '1px solid #30363d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#8b949e',
      transition: 'all 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.color = '#58a6ff';
      e.currentTarget.style.borderColor = '#58a6ff';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.color = '#8b949e';
      e.currentTarget.style.borderColor = '#30363d';
    }}
  >
    {icon}
  </a>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    alert('Message sent! (Simulation)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 40, paddingBottom: 40 }}>

      <div className="contact-card" style={{
        display: 'flex',
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
        flexWrap: 'wrap'
      }}>

        {/* LEFT: Contact Info */}
        <div className="contact-left" style={{
          flex: 1,
          minWidth: 300,
          background: '#161b22',
          padding: 40,
          borderRight: '1px solid #30363d',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#e6edf3', marginBottom: 12 }}>Get in Touch</h2>
            <p style={{ color: '#8b949e', lineHeight: 1.6, marginBottom: 30 }}>
              I'm available for freelance projects and full-time opportunities.
              Let's build something amazing together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#e6edf3' }}>
                <div style={{
                  width: 40, height: 40, background: '#238636', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
                }}>
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>Email Me</div>
                  <div style={{ fontWeight: 600 }}>katariakirti2003@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: 16 }}>Connect with me</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <SocialBtn icon={<FaGithub />} href="https://github.com/kirtikour" label="GitHub" />
              <SocialBtn icon={<FaLinkedin />} href="https://linkedin.com/in/kirtikour" label="LinkedIn" />
              <SocialBtn icon={<FaEnvelope />} href="mailto:kirtikourkatari@gmail.com" label="Email" />
            </div>

            <div style={{ marginTop: 30, paddingTop: 30, borderTop: '1px solid #30363d' }}>
              <a
                href="/kirtikourkatariaCv.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  background: '#238636',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: 6,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: '1px solid rgba(240,246,252,0.1)',
                  transition: 'background 0.2s',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
                }}
                onMouseOver={e => e.currentTarget.style.background = '#2ea043'}
                onMouseOut={e => e.currentTarget.style.background = '#238636'}
              >
                <FaFileDownload /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-right" style={{ flex: 1.5, minWidth: 300, padding: 40, background: '#0d1117' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="contact-row" style={{ display: 'flex', gap: 20 }}>
              <InputGroup label="Name" name="name" placeholder="Karan Kumar" value={form.name} onChange={handleChange} />
              <InputGroup label="Email" name="email" placeholder="abc@example.com" value={form.email} onChange={handleChange} />
            </div>
            <InputGroup label="Message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} textarea />

            <button
              type="submit"
              className="send-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#238636',
                color: '#ffffff',
                border: '1px solid rgba(240,246,252,0.1)',
                borderRadius: 6,
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginTop: 10
              }}
            >
              <FaPaperPlane size={14} /> Send Message
            </button>
          </form>
        </div>

      </div>
      <style>{`
        .send-btn:hover { background: #2ea043 !important; }
        
        @media (max-width: 768px) {
          .contact-container { padding-top: 20px !important; padding-bottom: 20px !important; }
          .contact-card { flex-direction: column !important; }
          .contact-left, .contact-right { padding: 20px !important; min-width: 100% !important; }
          .contact-row { flex-direction: column !important; gap: 10px !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;