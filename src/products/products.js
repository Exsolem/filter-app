import React from 'react';
import PropTypes from 'prop-types'

import Product from './product/product';
import Search from './search/search'
import {ProductsDiv, ProductsUl} from "../styled/styledComponents";

export const Products = ({
  searchedProducts, getCurrentCategory, search, filteredProducts, getSearchedProducts,
  getSearchValue, products, history: {location: {pathname}}
}) => {
    getCurrentCategory(pathname);
    // TODO: move to a separate func
    const showProductsList = () => {
        if (search.length !== 0) {
           return searchedProducts.map(product => <Product  product={product}/>);
        } else if (filteredProducts.length > 0) {
            return filteredProducts.map(product => <Product  product={product}/>);
        } else {
            return products.map(product => <Product  product={product}/>);
        }
    };

    return (
        <ProductsDiv className='col-md-9'>
            <Search
                getSearchValue={getSearchValue}
                getSearchedProducts={getSearchedProducts}
                search={search}
            />
            <ProductsUl className='col-md-12'>
                {showProductsList()}
            </ProductsUl>
        </ProductsDiv>
    )
};

Products.propTypes = {
    searchedProducts: PropTypes.array,
    filteredProducts: PropTypes.array,
    products: PropTypes.array,
    getCurrentCategory: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    getSearchValue: PropTypes.func,
    search: PropTypes.string,
    pathname: PropTypes.string
};
export default Products;
