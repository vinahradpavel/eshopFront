import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

export function Navigation({ navItems = [] }) {
    const history = useHistory();
    return (<div className={styles.Nav}>
        <ul>
            {navItems.map(({ id, title, url }) => (
                <li key={id} onClick={() => history.push({ url })}>
                    <a href={url}>{title}</a>
                </li>
            ))}
        </ul>
    </div >
    )
};

