import React from 'react';
import styles from './style.module.css'

export function Logo({ url = '/', brandName = 'NoName' }) {
    return (
        <a href={url} className={styles.Logo}>{brandName}</a>
    )
}