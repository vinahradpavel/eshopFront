import React from 'react';
import styles from './style.module.css';

export default function Logo({ url = '/', brandName = 'NoName' }) {
  return (
    <a href={url} className={styles.Logo}>{brandName}</a>
  );
}
