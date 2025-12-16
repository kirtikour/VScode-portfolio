import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import styles from './Header.module.css';

const Header = ({ onToggleTerminal, onNavigate, onToggleSidebar }) => {
    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                <div
                    onClick={onToggleSidebar}
                    className={styles.menuButton}
                >
                    <VscMenu size={18} />
                </div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="VS Code Icon"
                    className={styles.icon}
                />
                <div className={styles.menuBar}>
                    <span className={styles.menuItem}>File</span>
                    <span className={styles.menuItem}>Edit</span>
                    <span className={styles.menuItem}>View</span>
                    <span className={styles.menuItem}>Go</span>
                    <span className={styles.menuItem}>Run</span>
                    <span
                        className={styles.menuItem}
                        onClick={onToggleTerminal}
                        style={{ cursor: 'pointer' }}
                    >
                        Terminal
                    </span>
                    <span
                        className={styles.menuItem}
                        onClick={() => onNavigate('help')}
                        style={{ cursor: 'pointer' }}
                    >
                        Help
                    </span>
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
