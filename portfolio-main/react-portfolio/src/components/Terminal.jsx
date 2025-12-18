import React, { useState, useEffect, useRef } from 'react';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';

const Terminal = ({ onNavigate, onClose }) => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to KirtiOS v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState('');
    const [isMaximized, setIsMaximized] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const args = cmd.trim().split(' ');
        const command = args[0].toLowerCase();

        let response = '';

        switch (command) {
            case 'help':
                response =
                    'Available commands:\n' +
                    '  ls           - List all pages\n' +
                    '  cd [page]    - Navigate to a page\n' +
                    '  whoami       - Display info about the developer\n' +
                    '  clear        - Clear the terminal screen\n' +
                    '  date         - Show current date\n';
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'ls':
                response = 'src/  home  about  skills  projects  contact  certifications';
                break;
            case 'whoami':
                response = 'User: Visitor\nRole: Reviewer\nAccess: Guest';
                break;
            case 'date':
                response = new Date().toString();
                break;
            case 'cd':
                if (!args[1]) {
                    response = 'Usage: cd [page_name]';
                } else {
                    // Normalize input: remove .js/.jsx extension, quotes, and convert to lowercase
                    const page = args[1].replace(/['"]/g, '').replace(/\.jsx?$/i, '').toLowerCase();
                    const validPages = ['home', 'about', 'skills', 'projects', 'contact', 'certifications', 'github'];

                    if (validPages.includes(page)) {
                        onNavigate(page);
                        response = `Navigating to ${page}...`;
                    } else {
                        response = `bash: cd: ${args[1]}: No such file or directory`;
                    }
                }
                break;
            case '':
                break;
            default:
                response = `bash: ${command}: command not found`;
        }

        setHistory(prev => [
            ...prev,
            { type: 'command', content: cmd },
            { type: 'output', content: response }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div
            className="slide-in-right"
            onClick={() => inputRef.current?.focus()}
            style={{
                height: isMaximized ? 450 : 200,
                transition: 'height 0.3s ease',
                background: '#1e1e1e',
                borderTop: '1px solid var(--border-color)',
                fontFamily: 'Consolas, monospace',
                fontSize: 14,
                padding: 10,
                overflowY: 'auto',
                color: '#cccccc',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid #333', paddingBottom: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 600 }}>TERMINAL</span>
                <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{ cursor: 'pointer' }} onClick={() => setIsMaximized(!isMaximized)}>
                        {isMaximized ? <VscChevronDown /> : <VscChevronUp />}
                    </div>
                    <span style={{ fontSize: 12, cursor: 'pointer', lineHeight: '14px' }} onClick={onClose}>x</span>
                </div>
            </div>

            <div style={{ flex: 1 }}>
                {history.map((line, i) => (
                    <div key={i} style={{ marginBottom: 4, whiteSpace: 'pre-wrap', lineHeight: 1.4, color: line.type === 'command' ? '#ffffff' : '#a2a2a2' }}>
                        {line.type === 'command' ? (
                            <span>
                                <span style={{ color: '#00ff00' }}>➜</span> <span style={{ color: '#58a6ff' }}>~</span> {line.content}
                            </span>
                        ) : (
                            line.content
                        )}
                    </div>
                ))}

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#00ff00', marginRight: 8 }}>➜</span>
                    <span style={{ color: '#58a6ff', marginRight: 8 }}>~</span>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            flex: 1,
                            outline: 'none'
                        }}
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
