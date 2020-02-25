import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

export function Navigation({ navItems = [] }) {
    const history = useHistory();
    return (<div className={styles.Nav}>
        {/* <ul>
            <li onClick={() => history.push('/')}>
                <a href="#">/</a>
            </li>
            <li onClick={() => history.push('/products')}>
                <a href="#null">products</a>
            </li>
            <li onClick={() => history.push('/brands')}>
                brands
                </li>
            <li onClick={() => history.push('/contacts')}>

                contacts
                </li>
        </ul> */}

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

