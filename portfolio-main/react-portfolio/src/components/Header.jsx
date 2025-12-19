import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import styles from './Header.module.css';

const Header = ({ onToggleTerminal, onNavigate, onToggleSidebar, onOpenView }) => {
    const [activeMenu, setActiveMenu] = React.useState(null);
    const menuRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleAction = (action) => {
        setActiveMenu(null);
        if (action.label === 'Terminal') onToggleTerminal();
        else if (action.nav) onNavigate(action.nav);
        else if (action.view) onOpenView(action.view);
        else if (action.href) window.open(action.href, '_blank');
        else {
            // Simulated action feedback
            console.log(`Action: ${action.label}`);
            alert(`Action triggered: ${action.label}`);
        }
    };

    const menus = {
        File: [
            { label: 'Home.jsx', nav: 'home' },
            { label: 'readaboutme.md', nav: 'about' },
            { label: 'Projects.jsx', nav: 'projects' },
            { label: 'Skills.jsx', nav: 'skills' },
            { label: 'Contact.jsx', nav: 'contact' },
            { label: 'resume.pdf', nav: 'resume' },
            { type: 'separator' },
            { label: 'Exit', action: () => window.close() }
        ],
        Edit: [
            { label: 'Undo', shortcut: 'Ctrl+Z' },
            { label: 'Redo', shortcut: 'Ctrl+Y' },
            { type: 'separator' },
            { label: 'Preferences', action: () => onOpenView('settings') }
        ],
        View: [
            { label: 'Explorer', view: 'explorer', shortcut: 'Ctrl+Shift+E' },
            { label: 'Search', view: 'search', shortcut: 'Ctrl+Shift+F' },
            { label: 'Source Control', view: 'git', shortcut: 'Ctrl+Shift+G' },
            { label: 'Run', view: 'debug', shortcut: 'Ctrl+Shift+D' },
            { label: 'Extensions', view: 'extensions', shortcut: 'Ctrl+Shift+X' },
            { type: 'separator' },
            { label: 'Terminal', action: onToggleTerminal, shortcut: 'Ctrl+`' }
        ],
        Go: [
            { label: 'Go to File...', shortcut: 'Ctrl+P' },
            { type: 'separator' },
            { label: 'Back', shortcut: 'Alt+Left' },
            { label: 'Forward', shortcut: 'Alt+Right' }
        ],
        Run: [
            { label: 'Start Debugging', view: 'debug', shortcut: 'F5' },
            { label: 'Run Without Debugging', shortcut: 'Ctrl+F5' }
        ]
    };

    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <div
                    onClick={onToggleSidebar}
                    className={styles.menuButton}
                >
                    <VscMenu size={18} />
                </div>
                <div className={styles.icon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21H16.2L11.4 13.8L9 16.2V21H4V3H9V10.2L15.6 3H20.4L12.6 11.4L21 21Z" fill="#3fb950" />
                    </svg>
                </div>
                <div className={styles.menuBar} ref={menuRef}>
                    {Object.keys(menus).map((menuName) => (
                        <div key={menuName} style={{ position: 'relative' }}>
                            <span
                                className={`${styles.menuItem} ${activeMenu === menuName ? styles.active : ''}`}
                                onClick={() => handleMenuClick(menuName)}
                            >
                                {menuName}
                            </span>
                            {activeMenu === menuName && (
                                <div className={styles.dropdown}>
                                    {menus[menuName].map((item, index) => (
                                        item.type === 'separator' ? (
                                            <div key={index} className={styles.separator} />
                                        ) : (
                                            <div
                                                key={index}
                                                className={styles.dropdownItem}
                                                onClick={() => {
                                                    if (item.action) {
                                                        item.action();
                                                        setActiveMenu(null);
                                                    } else {
                                                        handleAction(item);
                                                    }
                                                }}
                                            >
                                                <span>{item.label}</span>
                                                {item.shortcut && <span className={styles.shortcut}>{item.shortcut}</span>}
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div style={{ position: 'relative' }}>
                        <span
                            className={styles.menuItem}
                            onClick={() => onNavigate('help')}
                            style={{ cursor: 'pointer' }}
                        >
                            Help
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.title}>KirtiKour- Visual Studio Code</div>
            <div className={styles.controls}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
        </div>
    );
};

export default Header;
