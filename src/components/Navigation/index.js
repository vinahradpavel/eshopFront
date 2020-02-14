import React from 'react';
import styles from './style.module.css';


const Navigation = (props) => (
<div className={styles.Container}>
    <h1>{props.text}</h1>
</div>
)

export default Navigation;