import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
    font-size: 3vmin;   
`
const Li = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
`
const Img = styled.img`
    max-width: 30vw;
    max-heigth: 30vh;
`
const Products = (props) => {
    return <ul className='col-lg-9'>
        {props.products
    .map(product => <Li>
        <Img src={product.img} alt="product" className='col-lg-3'/>
        <Span className='col-lg-3'>{product.price} GBP</Span>
        <Span className='col-lg-3'>{product.name}</Span>
    </Li>)}
    </ul>
}
export default Products;