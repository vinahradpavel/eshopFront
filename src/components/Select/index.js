import React from 'react';
import styles from './style.module.css';



export function Select({ limitItems = [], onChange }) {
    return (
        <div>
            <p>Количество записей</p>
            <select onChange={onChange} className={styles.Select}>
                {limitItems.map(({ id, limit }) => (
                    <option key={id}>
                        {limit}
                    </option>
                ))}
            </select>
        </div>
    )
};