import React from 'react';
import PropTypes from 'prop-types'
import Product from './product/product';
import { InputGroup, FormControl } from 'react-bootstrap';
import uuid from 'uuid';
import { ProductsDiv, ProductsUl } from "../styled/styledComponents";

const Products = ({ match, ...props }) => {
    props.getCurrentCategory(props.history.location.pathname);
    let products = [];
    if (props.search.length !== 0) {
        products = props.searchedProducts.map( product => <Product key={uuid()} product={product} />);

    }
    else if( props.filteredProducts.length > 0 ){
        products = props.filteredProducts.map( product => <Product key={uuid()}  product={product} />);
    }
    else{
        products = props.products.map( product => <Product key={uuid()}  product={product} />);
    }
    
    const inputHandler = (e) => {
        props.getSearchValue(e.target.value);
        props.getSearchedProducts();
        if(e.target.value){
            props.history.push(`${props.history.location.pathname}?search=${e.target.value}`);
        }
        else{ props.history.push(`${props.history.location.pathname}`)}
    }
    return <ProductsDiv className='col-md-9'>
        <InputGroup className="mb-12"
            style={{
                margin: '2vmin 0',
                padding: 0
            }}>
            <FormControl onChange={inputHandler} value={props.search}/>
        </InputGroup>
        <ProductsUl className='col-md-12'>
            {products}
        </ProductsUl>
    </ProductsDiv>
};

Products.propTypes = {
    match: PropTypes.object,

};

export default Products;

