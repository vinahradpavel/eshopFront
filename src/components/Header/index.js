import React from 'react';
import styles from './style.module.css'

const Header = (props) => (
<div className={styles.Header}>
    <h1 className={styles.Header_ul}>Eshop</h1>
    <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/products'>products</a></li>
        <li><a href='/contacts'>contacts</a></li>
    </ul>
</div>
)

export default Header;
