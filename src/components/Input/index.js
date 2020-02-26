import React from 'react';
import styles from './style.module.css';

export function Input({ imputText = 'search:',
    type = 'search',
    size = 15,
    placeholder = 'search...',
    onChange }) {

    return (
        <div className={styles.Input}>
            <label>{imputText}</label>
            <input type={type} size={size} placeholder={placeholder} onChange={onChange} />
        </div>
    )
};