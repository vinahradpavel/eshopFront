import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import styles from './style.module.css';
import { contactsList } from '../../constants';
import { ProductsList } from '../ProductsList';
import { BrandsList } from '../BrandsList';
import { ContactsList } from '../ContactsList';

export function Body() {

    return (
        <div className={styles.Body}>
            <Switch>
                <Route path="/products">
                    <ProductsList />
                </Route>
                <Route path="/brands">
                    <BrandsList />
                </Route>
                <Route path="/contacts">
                    <ContactsList contactsList={contactsList} />
                </Route>
            </Switch>
        </div>
    );
};