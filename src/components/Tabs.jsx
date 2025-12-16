import React from 'react';
import { FaReact } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';
import styles from './Tabs.module.css';

// Using a safe fallback function to ensure icon is always valid
const getIcon = (key) => {
  // You can add specific mapping back later once verified
  return <FaReact color="#61dafb" />;
};

const fileExtensions = {
  home: 'html',
  about: 'jsx',
  skills: 'jsx',
  projects: 'jsx',
  contact: 'css',
  certifications: 'jsx',
  testimonials: 'jsx',
  cv: 'cv'
};

export default function Tabs({ openTabs, activeTab, onTabChange, onTabClose, sectionLabels }) {
  if (!openTabs) return null;

  return (
    <div className={styles.tabsContainer}>
      {openTabs.map((tabKey) => {
        const isActive = activeTab === tabKey;
        const icon = getIcon(tabKey);
        const label = sectionLabels[tabKey] || tabKey;
        const ext = fileExtensions[tabKey] || 'jsx';

        return (
          <div
            key={tabKey}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => onTabChange(tabKey)}
            title={`${label}.${ext}`}
          >
            <span className={styles.icon}>
              {icon}
            </span>
            <span className={styles.label}>
              {label}.{ext}
            </span>
            <span
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation(); // critical to prevent activating tab when closing
                onTabClose(tabKey, e);
              }}
              role="button"
              aria-label="Close"
            >
              <VscClose />
            </span>
          </div>
        );
      })}
    </div>
  );
}