import React from 'react';
import Product from './product/product';
import { InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import uuid from 'uuid';

const Div = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
const Ul = styled.ul`
    margin: 0;
    padding: 0;
`
const Products = ({ match, ...props }) => {
    props.getCurrentCategory(props.history.location.pathname);
    let products = [];

    if (props.search.length !== 0) {
        products = props.searchedProducts.map( product => <Product key={uuid()} product={product} />);

    }
    else if( props.filteredProducts.length > 0 ){
        products = props.filteredProducts.map( product=> <Product key={uuid()}  product={product} />);
    }
    else{
        products = props.products.map( product=> <Product key={uuid()}  product={product} />);
    }
    

    const inputHandler = (e) => {
        props.getSearchValue(e.target.value);
        props.getSearchedProducts();
        if(e.target.value){
            props.history.push(`${props.history.location.pathname}?search=${e.target.value}`);
        }
        else{ props.history.push(`${props.history.location.pathname}`)};
    }
    return <Div className='col-md-9'>
        <InputGroup className="mb-12"
            style={{
                margin: '2vmin 0',
                padding: 0
            }}>
            <FormControl onChange={inputHandler} />
        </InputGroup>
        <Ul className='col-md-12'>
            {products}
        </Ul>
    </Div>
}
export default Products;