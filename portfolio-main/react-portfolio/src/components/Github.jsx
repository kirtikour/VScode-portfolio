import React from 'react';
import { FaHeartbeat, FaBrain, FaUtensils, FaUniversity, FaComments, FaCodeBranch, FaStar, FaEye, FaJs, FaPython, FaReact } from 'react-icons/fa';

const repos = [
    {
        name: 'HEALR',
        desc: 'Deep Learning based MERN Stack healthcare platform for digital restoration of landscapes.',
        lang: 'JavaScript',
        stars: 9,
        forks: 10,
        watchers: 9,
        accent: '#facc15' // Python branding color or similar
    },
    {
        name: 'Recognise AI',
        desc: 'CNN based handwritten character recognition system.',
        lang: 'Python',
        stars: 131,
        forks: 30,
        watchers: 131,
        accent: '#3776ab'
    },
    {
        name: 'Cookify',
        desc: 'Recipe management app with smart filtering and ingredient search.',
        lang: 'JavaScript',
        stars: 1201,
        forks: 299,
        watchers: 1201,
        accent: '#f7df1e'
    },
    {
        name: 'Campus-Management',
        desc: 'Comprehensive system for student and faculty administration.',
        lang: 'Python',
        stars: 4,
        forks: 9,
        watchers: 4,
        accent: '#3776ab'
    },
    {
        name: 'python-chatbot',
        desc: 'Real-time conversational AI bot using socket.io.',
        lang: 'Python',
        stars: 6,
        forks: 1,
        watchers: 6,
        accent: '#3776ab'
    },
    {
        name: 'javascript-playground',
        desc: 'Collection of modern JS concepts and experiments.',
        lang: 'JavaScript',
        stars: 0,
        forks: 0,
        watchers: 0,
        accent: '#f7df1e'
    }
];

const ContributionGraph = () => {
    // Generate a static contribution graph visual
    // 7 rows (days), ~50 cols (weeks)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: 16,
            background: '#0d1117',
            borderRadius: 6,
            border: '1px solid #30363d',
            overflowX: 'auto'
        }}>
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(7, 10px)', gridAutoFlow: 'column', gap: 3 }}>
                {Array.from({ length: 365 }).map((_, i) => {
                    const level = Math.random() > 0.8 ? Math.floor(Math.random() * 4) : 0;
                    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                    return (
                        <div key={i} style={{
                            width: 10,
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: colors[level]
                        }} />
                    );
                })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#8b949e', marginTop: 8 }}>
                <span>Learn how we count contributions</span>
                <span>Less <span style={{ display: 'inline-block', width: 10, height: 10, background: '#161b22', margin: '0 2px' }}></span> <span style={{ display: 'inline-block', width: 10, height: 10, background: '#39d353', margin: '0 2px' }}></span> More</span>
            </div>
        </div>
    );
};

export default function Github() {
    return (
        <div style={{ maxWidth: 1000, margin: '0 auto', color: '#c9d1d9', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 16 }}>Popular Repositories</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 16,
                marginBottom: 40
            }}>
                {repos.map((repo, idx) => (
                    <div key={idx} style={{
                        background: '#0d1117',
                        border: '1px solid #30363d',
                        borderRadius: 6,
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                            <a href={`https://github.com/kirtikour/${repo.name}`} target="_blank" rel="noreferrer" style={{ color: '#58a6ff', fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>{repo.name}</a>
                            <span style={{
                                fontSize: 12,
                                color: '#8b949e',
                                border: '1px solid #30363d',
                                borderRadius: 12,
                                padding: '0 7px',
                                display: 'flex',
                                alignItems: 'center',
                                height: 20
                            }}>Public</span>
                        </div>
                        <p style={{ fontSize: 12, color: '#8b949e', marginBottom: 16, flex: 1 }}>{repo.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12, color: '#8b949e' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <span style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: repo.lang === 'JavaScript' ? '#f1e05a' : '#3572a5'
                                }}></span>
                                {repo.lang}
                            </div>
                            {repo.stars > 0 && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <FaStar /> {repo.stars}
                                </div>
                            )}
                            {repo.forks > 0 && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <FaCodeBranch /> {repo.forks}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: '16px', fontWeight: 400, marginBottom: 8 }}>358 contributions in the last year</h2>
                <ContributionGraph />
            </div>
        </div>
    );
}
