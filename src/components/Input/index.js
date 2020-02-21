import React from 'react';
import styles from './style.module.css';



export function Input({ imputText = 'find:',
    type = 'search',
    size = 15,
    placeholder = 'find...',
    onChange }) {
    return (
        <div>
            <label>{imputText}</label>
            <input type={type} size={size} placeholder={placeholder} onChange={onChange} />
        </div>
    )
};