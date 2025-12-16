import React from 'react';
import { FaCode, FaMusic } from 'react-icons/fa';
import styles from './BackgroundToggle.module.css';

const BackgroundToggle = ({ mode, onToggle }) => (
  <div className={styles.toggle}>
    <button
      className={mode === 'code' ? styles.active : ''}
      onClick={() => onToggle('code')}
      title="Code Symbols Background"
    >
      <FaCode />
    </button>
    <button
      className={mode === 'piano' ? styles.active : ''}
      onClick={() => onToggle('piano')}
      title="Piano Tiles Background"
    >
      <FaMusic />
    </button>
  </div>
);

export default BackgroundToggle; 