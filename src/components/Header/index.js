import React from 'react';
import styles from './style.module.css'

const Header = (props) => (
<div className={styles.myClass}>{props.text}</div>
)

export default Header;
