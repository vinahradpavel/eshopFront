import React, { Children } from 'react';
import styles from './style.module.css';



export function Button({ children }) {
    return (
        <button className={styles.Button}>
            {children}
        </button>
    );
};