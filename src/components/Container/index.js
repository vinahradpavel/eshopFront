import React from 'react';
import styles from './style.module.css';

export function Container({ children }) {

    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
};

