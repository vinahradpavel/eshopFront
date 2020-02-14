 
import React from 'react';
import styles from './style.module.css';
import Navigation from '../Navigation';
import Menu from '../Menu';



const Header = (props) => (
<div className={styles.Header}>
    <Navigation>  
        <Menu/>
    </Navigation>
</div>
)

export default Header;