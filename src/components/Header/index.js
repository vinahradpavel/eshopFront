import React from 'react';
import styles from './style.module.css';
import { Navigation } from '../Navigation';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { navItems } from '../../constants';

const Header = () => (
    <header className={styles.Header}>
        <Container>
            <Logo brandName="PashaShop" />
            <Navigation navItems={navItems} />
        </Container>
    </header>
)

export default Header;