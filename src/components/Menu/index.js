import React from 'react';
import styles from './style.module.css'

const Menu = (props) => (
<div className={styles.Menu}>
    <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/products'>products</a></li>
        <li><a href='/contacts'>contacts</a></li>
    </ul>
</div>
)

export default Menu;
