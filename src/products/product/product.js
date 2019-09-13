import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
    font-size: 2.5vmin;   
`
const Li = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: 0.1vmin solid black;
    min-heigth: 30vh;
`
const Img = styled.img`
    max-width: 25vw;
    max-heigth: 25vh;
`
const Product = (props) =>{

    return <Li key={props.index}>
    <Img src={props.product.img} alt="product" className='col-md-4'/>
    <Span className='col-md-4'>{props.product.price} GBP</Span>
    <Span className='col-md-4'>{props.product.name}</Span>
</Li>
}
export default  Product;