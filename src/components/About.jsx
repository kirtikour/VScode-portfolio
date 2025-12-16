import React from 'react';
import kirtiPic from '../assets/kirtikourpic (1).png';

const About = ({ onContactClick }) => {
    return (
        <div style={{ maxWidth: 1100, margin: '0 auto', paddingTop: 20, height: '100%', display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                {/* Visual Preview - Now Main View */}
                <div style={{
                    flex: 1,
                    maxWidth: 800,
                    background: '#0d1117',
                    padding: 40,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'radial-gradient(#1f2937 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    borderRadius: 12,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}>
                    {/* Hexagon or Modern Styling for Image */}
                    <div className="zoom-in" style={{ position: 'relative', marginBottom: 30 }}>
                        <div style={{
                            width: 160,
                            height: 160,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--border-color)',
                            boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)'
                        }}>
                            <img src={kirtiPic} alt="Kirti" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8,
                            width: 24,
                            height: 24,
                            background: '#238636',
                            borderRadius: '50%',
                            border: '4px solid var(--bg-primary)'
                        }} title="Online"></div>
                    </div>

                    <h1 className="fade-up delay-100" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, textAlign: 'center' }}>Kirti Kour</h1>
                    <h2 className="fade-up delay-200" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 32, textAlign: 'center' }}>Full Stack Developer 🇵🇰</h2>

                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: 650, lineHeight: 1.8, marginBottom: 40, fontSize: '1.05rem' }}>
                        <p className="fade-up delay-300" style={{ marginBottom: 16 }}>
                            I’m a Computer Science undergraduate and aspiring software developer with strong skills in full-stack web development and applied AI.
                        </p>
                        <p className="fade-up delay-400" style={{ marginBottom: 16 }}>
                            I enjoy building real-world products using technologies like React, Node.js, Django, and MongoDB, and working on machine learning systems such as CRNN-based handwritten text recognition. I focus on writing clean, efficient code, integrating APIs, and improving performance through thoughtful design.
                        </p>
                        <p className="fade-up delay-500">
                            I’m highly motivated to learn, experiment with emerging areas like Generative and Agentic AI, and turn ideas into practical, scalable solutions.
                        </p>
                    </div>

                    <button
                        onClick={onContactClick}
                        style={{
                            background: '#238636',
                            color: '#fff',
                            border: '1px solid rgba(240,246,252,0.1)',
                            borderRadius: 6,
                            padding: '10px 24px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 1px 0 rgba(27,31,36,0.1)'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#2ea043'}
                        onMouseLeave={e => e.currentTarget.style.background = '#238636'}
                    >
                        Contact Me
                    </button>

                </div>

            </div>
        </div>
    );
};

export default About;
