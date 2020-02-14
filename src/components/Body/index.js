import React from 'react';
import styles from './style.module.css';
import { Container } from '../Container';


export function Body() {
    return (
        <body className={styles.Body}>
            <Container />
        </body>
    );
};