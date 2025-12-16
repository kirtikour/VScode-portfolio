import React from 'react';
import { VscChevronRight, VscHome } from 'react-icons/vsc';

const Breadcrumbs = ({ activeTab }) => {
    // Map sections to realistic file paths
    const getPath = (tab) => {
        switch (tab) {
            case 'home': return ['portfolio', 'src', 'Home.jsx'];
            case 'about': return ['portfolio', 'src', 'About.jsx']; // Or readaboutme.md
            case 'skills': return ['portfolio', 'src', 'Skills.jsx'];
            case 'projects': return ['portfolio', 'src', 'Projects.jsx'];
            case 'contact': return ['portfolio', 'src', 'Contact.jsx'];
            case 'certifications': return ['portfolio', 'src', 'Certifications.jsx'];
            case 'resume': return ['portfolio', 'public', 'Resume.pdf'];
            case 'github': return ['portfolio', 'src', 'Github.jsx'];
            case 'help': return ['docs', 'UserGuide.md'];
            default: return ['portfolio', 'src', 'Home.jsx'];
        }
    };

    const path = getPath(activeTab);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '4px 16px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            userSelect: 'none'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 5 }}>
                <VscHome size={14} />
            </div>

            {path.map((item, index) => (
                <React.Fragment key={index}>
                    <VscChevronRight size={14} style={{ color: 'var(--text-secondary)', margin: '0 4px', opacity: 0.7 }} />
                    <span style={{
                        color: index === path.length - 1 ? 'var(--text-primary)' : 'inherit',
                        cursor: 'pointer'
                    }}>
                        {item}
                    </span>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
