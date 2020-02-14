import React from 'react';
import styles from './style.module.css';

export function Navigation({ navItems = [] }) {
    return (<nav className={styles.Nav}>
        <ul>
            {navItems.map(({ id, title, url }) => (
                <li key={id}>
                    <a href={url}>{title}</a>
                </li>
            ))}
        </ul>
    </nav>)
};

