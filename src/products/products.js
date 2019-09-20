import React from 'react';
import PropTypes from 'prop-types'
import Product from './product/product';
import Search from './search/search'
import uuid from 'uuid';
import {ProductsDiv, ProductsUl} from "../styled/styledComponents";

const Products = ({searchedProducts, getCurrentCategory, search, filteredProducts, getSearchedProducts, getSearchValue, products, history: {location: {pathname}}}) => {
    getCurrentCategory(pathname);
    let productsList = [];
    if (search.length !== 0) {
        productsList = searchedProducts.map(product => <Product key={uuid()} product={product}/>);

    } else if (filteredProducts.length > 0) {
        productsList = filteredProducts.map(product => <Product key={uuid()} product={product}/>);
    } else {
        productsList = products.map(product => <Product key={uuid()} product={product}/>);
    }

    return <ProductsDiv className='col-md-9'>
        <Search
            getSearchValue={getSearchValue}
            getSearchedProducts={getSearchedProducts}
            search={search}
        />
        <ProductsUl className='col-md-12'>
            {productsList}
        </ProductsUl>
    </ProductsDiv>
};

Products.propTypes = {
    searchedProducts: PropTypes.array,
    filteredProducts: PropTypes.array,
    products: PropTypes.array,
    getCurrentCategory: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    getSearchValue: PropTypes.func,
    search: PropTypes.string,
    pathname:PropTypes.string
};
export default Products;

