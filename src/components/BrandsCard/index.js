import React from 'react';
import styles from './style.module.css';

export default function BrandsCard({ brand }) {
  return (
    <div className={styles.BrandsCard}>
      <h4>{brand.name}</h4>
    </div>
  );
}