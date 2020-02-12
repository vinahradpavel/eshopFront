import React from 'react';
import styles from './style.module.css';
import ItemBox from '../../components/ItemBox';
import products from '../../products';
 
const Body = (props) => (
<div className={styles.myClass}>
    {products.map(prod => <ItemBox product={prod}/>)}
</div>
)



export default Body;
