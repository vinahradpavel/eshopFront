import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { ProductCard } from '../ProductCard';


export function Body() {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`/products?page=${page}`).then(it => it.json()).then(it => setProducts(it.products));
    }, [page]);

    if (!products) {
        return "loading...";
    }

    return (
        <div className={styles.Body}>
            <button onClick={() => setPage(page - 1)}>Prev Page</button>
            {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
            <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
    );
};