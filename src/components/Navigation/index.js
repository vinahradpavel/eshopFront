import React from 'react';
import Menu from './../Menu'
import styles from './style.module.css';


const Navigation = (props) => (
<div className={styles.Container}>
    <h1>{props.text}</h1>
    <Menu/>
</div>
)

export default Navigation;
