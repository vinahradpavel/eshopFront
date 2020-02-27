import React from 'react';
import styles from './style.module.css';

export default function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
}
