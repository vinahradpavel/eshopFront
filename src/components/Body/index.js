import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.module.css';
import { ProductCard } from '../ProductCard';

export function Body() {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1);

    const onChangePage = useCallback(() => page === 1 ? null : setPage(page - 1), [page]);
    const isDisabled = page === 1;

    useEffect(() => {
        try {
            fetch(`/products?page=${page}`).then(it => it.json()).then(it => setProducts(it.products));
        }
        catch (error) {
            console.log(error)
        }
    }, [page]);

    if (!products) {
        return "loading...";
    }


    return (
        <div className={styles.Body}>
            <button disabled={isDisabled} onClick={onChangePage}>Prev Page</button>
            {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
            <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
    );
};