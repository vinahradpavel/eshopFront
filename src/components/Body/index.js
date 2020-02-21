import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.module.css';
import { Select } from '../Select';
import { ProductCard } from '../ProductCard';
import { limitItems } from '../../constants';
import { Button } from '../Button';
import { Input } from '../Input/';


export function Body() {
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
            console.log(error)
        }
    }, [page, limit]);

    useEffect(() => {
        try {
            if (name) {
                fetch(`/products?page=${page}&limit=${limit}&name=${name}`).then(it => it.json()).then(it => setProducts(it.products));
            }
        }
        catch (error) {
            console.log(error)
        }
    }, [page, limit, name]);


    if (!products) {
        return "loading...";
    }




    return (
        <div className={styles.Body}>
            <Button disabled={isDisabled} onClick={onChangePage}>Prev Page</Button>
            {products.map(prod => <ProductCard key={prod._id} product={prod} />)}
            <Button onClick={() => setPage(page + 1)}>Next Page</Button>
            <Select limitItems={limitItems} onChange={onChangeLimit} />
            <Input onChange={onChangeName} />

        </div>

    );
};