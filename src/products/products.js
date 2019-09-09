import React from 'react';

const Products = (props) => {
    return <ul>
        {props.products
    .map(product => <li>
        <img src={product.img} alt="product" />
        <span>{product.price} GBP</span>
        <span>{product.name}</span>
    </li>)}
    </ul>
}
export default Products;