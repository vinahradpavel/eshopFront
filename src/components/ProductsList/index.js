import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.module.css';
import { Select } from '../Select';
import { limitItems } from '../../constants';
import { Button } from '../Button';
import { Input } from '../Input/';

import { ProductCard } from '../ProductCard';

export function ProductsList() {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [name, setName] = useState(null);

    const onChangePage = useCallback(() => page === 1 ? null : setPage(page - 1), [page]);
    const onChangeLimit = useCallback((e) => setLimit(e.target.value), []);
    const onChangeName = useCallback((e) => setName(e.target.value), []);
    const isDisabled = page === 1;

    useEffect(() => {
        try {
            fetch(`/products?page=${page}&limit=${limit}`).then(it => it.json()).then(it => setProducts(it.products));
        }
        catch (error) {
            console.log(error);
        }
    }, [page, limit]);

    useEffect(() => {
        try {
            if (name) {
                fetch(`/products?page=${page}&limit=${limit}&name=${name}`).then(it => it.json()).then(it => setProducts(it.products));
            }
        }
        catch (error) {
            console.log(error);
        }
    }, [page, limit, name]);

    if (!products) {
        return "loading...";
    }

    return (
        <div className={styles.ProductsList}>
            <Input onChange={onChangeName} />
            <Select limitItems={limitItems} onChange={onChangeLimit} />
            <Button disabled={isDisabled} onClick={onChangePage}>Prev Page</Button>
            {products.map(product => <ProductCard key={product._id} product={product} />)}
            <Button onClick={() => setPage(page + 1)}>Next Page</Button>
        </div>

    );
};