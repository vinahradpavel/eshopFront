import React from 'react';
import styles from './style.module.css';

export default function Input({
  imputText = 'search:',
  type = 'search',
  size = 15,
  placeholder = 'search...',
  onChange,
}) {
  return (
    <div className={styles.Input}>
      <p>{imputText}</p>
      <input type={type} size={size} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
