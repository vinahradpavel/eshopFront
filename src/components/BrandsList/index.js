import React, { useEffect, useState, useCallback } from 'react';
import styles from './style.module.css';
import Select from '../Select';
import { limitItems } from '../../constants';
import Button from '../Button';
import Input from '../Input';

import BrandsCard from '../BrandsCard';

export default function BrandsList() {
  const [brands, setBrands] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [name, setName] = useState(null);

  const onChangePage = useCallback(() => (page === 1 ? null : setPage(page - 1)), [page]);
  const onChangeLimit = useCallback((e) => setLimit(e.target.value), []);
  const onChangeName = useCallback((e) => setName(e.target.value), []);
  const isDisabled = page === 1;

  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      fetch(`/brands?page=${page}&limit=${limit}`)
        .then((it) => it.json())
        .then((it) => setBrands(it.brands));
    } catch (error) {
      console.log(error);
    }
  }, [page, limit]);

  useEffect(() => {
    try {
      if (name) {
        fetch(`/brands?page=${page}&limit=${limit}&name=${name}`)
          .then((it) => it.json())
          .then((it) => setBrands(it.products));
      }
    } catch (error) {
      console.log(error);
    }
  }, [page, limit, name]);

  if (!brands) {
    return 'loading...';
  }

  return (
    <div className={styles.BrandsList}>
      <Input onChange={onChangeName} />
      <Select limitItems={limitItems} onChange={onChangeLimit} />
      <Button disabled={isDisabled} onClick={onChangePage}>Prev Page</Button>
      {brands.map((brand) => <BrandsCard key={brand._id} brand={brand} />)}
      <Button onClick={() => setPage(page + 1)}>Next Page</Button>
    </div>
  );
}
