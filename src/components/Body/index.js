import React from 'react';
import styles from './style.module.css';

const Body = (props) => (
<div className={styles.myClass}>{props.text}</div>
)

export default Body;
