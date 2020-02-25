import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import styles from './style.module.css';
import { ProductsList } from '../ProductsList';
import { BrandsList } from '../BrandsList';


export function Body({ children }) {
    return (
        <div className={styles.Body}>
            <Switch>
                <Route exact path="/">
                    <div> HELLO</div>
                </Route>
                <Route path="/products">
                    <ProductsList />
                </Route>
                <Route path="/brands">
                    <BrandsList />
                </Route>
                <Route path="/contacts">
                    <ProductsList />
                </Route>
            </Switch>
        </div>
    );
};

