import React from 'react';
import { VscCloudDownload } from 'react-icons/vsc';

const Resume = () => {
    return (
        <div style={{ height: 'calc(100vh - 140px)', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                padding: '8px 15px',
                borderBottom: '1px solid var(--border-color)',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                background: 'var(--bg-secondary)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span>Resume.pdf</span>
                <a
                    href="/Resume.pdf"
                    download="KirtiKour_Resume.pdf"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    title="Download Resume"
                >
                    <VscCloudDownload size={16} />
                    <span>Download</span>
                </a>
            </div>
            <iframe
                src="/Resume.pdf"
                style={{ flex: 1, width: '100%', border: 'none', background: '#333' }}
                title="Resume"
            />
        </div>
    );
};

export default Resume;
