import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.module.css';
import { Select } from '../Select';
import { ProductCard } from '../ProductCard';
import { limitItems } from '../../constants';
import { Button } from '../Button';


export function Body() {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);

    const onChangePage = useCallback(() => page === 1 ? null : setPage(page - 1), [page]);
    const isDisabled = page === 1;

    useEffect(() => {
        try {
            fetch(`/products?page=${page}&limit=${limit}`).then(it => it.json()).then(it => setProducts(it.products));
        }
        catch (error) {
            console.log(error)
        }
    }, [page, limit]);

    if (!products) {
        return "loading...";
    }


    return (
        <div className={styles.Body}>
            <Button disabled={isDisabled} onClick={onChangePage}>Prev Page</Button>
            {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
            <Button onClick={() => setPage(page + 1)}>Next Page</Button>
            <Select limitItems={limitItems} onChange={(e) => setLimit(e.target.value)} />
        </div>

    );
};