import React from 'react';
import styles from './style.module.css';

export function ProductCard({ product }) {

    return (
        <div className={styles.ProductCard}>
            <h4>{product.name}</h4>
            <p>{product.price} руб.</p>
        </div>
    )
};