import React from 'react';
import styles from './style.module.css';

export function ProductCard({ product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
};