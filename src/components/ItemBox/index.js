import React from 'react';
import styles from './style.module.css';

const ItemBox = ({product})=>(
<div className={styles.myClass}>
    <img></img>
    <h2>{product.name}</h2>
    <h3>{product.article}</h3>
    <h3>{product.price}</h3>
</div>
)

export default ItemBox;
