import React from 'react';
import styles from './style.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.Container}>
      {children}
    </div>
  );
}
