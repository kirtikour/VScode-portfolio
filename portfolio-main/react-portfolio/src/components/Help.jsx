import React from 'react';
import { VscTerminal, VscExtensions, VscFiles, VscColorMode } from 'react-icons/vsc';

const Help = () => {
    return (
        <div style={{ maxWidth: 800, margin: '0 auto', color: 'var(--text-primary)', padding: '20px' }}>
            <h1 className="fade-up" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: 10, marginBottom: 30 }}>
                Welcome to KirtiOS Portfolio Guide
            </h1>

            <div className="fade-up delay-100">
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    This portfolio is designed to mimic the **Visual Studio Code** environment.
                    Here is how you can navigate and interact with the interface:
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 30 }}>

                {/* Navigation */}
                <div className="fade-up delay-200" style={{ background: 'var(--bg-secondary)', padding: 20, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15, color: 'var(--accent-color)' }}>
                        <VscFiles size={24} />
                        <h3 style={{ margin: 0 }}>Explorer & Files</h3>
                    </div>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: 20, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>
                            Use the <strong style={{ color: 'var(--text-primary)' }}>Sidebar</strong> to navigate between files.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Click <strong style={{ color: 'var(--text-primary)' }}>Home.jsx</strong> to see the landing page.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Explore <strong style={{ color: 'var(--text-primary)' }}>Projects.jsx</strong> to see my work.
                        </li>
                        <li>
                            Active files appear as <strong style={{ color: 'var(--text-primary)' }}>Tabs</strong> at the top.
                        </li>
                    </ul>
                </div>

                {/* Extensions / Themes */}
                <div className="fade-up delay-300" style={{ background: 'var(--bg-secondary)', padding: 20, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15, color: 'var(--accent-color)' }}>
                        <VscExtensions size={24} />
                        <h3 style={{ margin: 0 }}>Themes</h3>
                    </div>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: 20, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>
                            Click the <strong style={{ color: 'var(--text-primary)' }}>Extensions Icon</strong> (4th in sidebar).
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Choose a theme like <strong style={{ color: '#bd93f9' }}>Dracula</strong> or <strong style={{ color: '#61afef' }}>One Dark Pro</strong>.
                        </li>
                        <li>
                            The entire portfolio's <strong style={{ color: 'var(--text-primary)' }}>Colors & Syntax</strong> will update instantly!
                        </li>
                    </ul>
                </div>

                {/* Terminal */}
                <div className="fade-up delay-400" style={{ background: 'var(--bg-secondary)', padding: 20, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15, color: 'var(--accent-color)' }}>
                        <VscTerminal size={24} />
                        <h3 style={{ margin: 0 }}>Terminal</h3>
                    </div>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: 20, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>
                            Toggle with <strong style={{ color: 'var(--text-primary)' }}>Terminal</strong> in the top menu.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Type <strong style={{ color: '#a3e635' }}>ls</strong> to list pages.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Type <strong style={{ color: '#a3e635' }}>cd projects</strong> to navigate.
                        </li>
                        <li>
                            Use <strong style={{ color: 'var(--text-primary)' }}>^</strong> arrow to resize the panel.
                        </li>
                    </ul>
                </div>

                {/* Status Bar - Replaces Admin */}
                <div className="fade-up delay-500" style={{ background: 'var(--bg-secondary)', padding: 20, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 15, color: 'var(--accent-color)' }}>
                        <VscColorMode size={24} />
                        <h3 style={{ margin: 0 }}>Status Bar</h3>
                    </div>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: 20, margin: 0 }}>
                        <li style={{ marginBottom: 8 }}>
                            Located at the <strong style={{ color: 'var(--text-primary)' }}>Bottom</strong> of the screen.
                        </li>
                        <li style={{ marginBottom: 8 }}>
                            Shows your current <strong style={{ color: 'var(--text-primary)' }}>Git Branch</strong> (master).
                        </li>
                        <li>
                            Displays <strong style={{ color: 'var(--text-primary)' }}>Language Mode</strong> and Prettier status.
                        </li>
                    </ul>
                </div>

            </div>

            <div className="fade-up delay-500" style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                "Every great developer needs a great IDE."
            </div>
        </div>
    );
};

export default Help;
