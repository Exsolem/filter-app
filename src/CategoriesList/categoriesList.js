import React from 'react';
import {withRouter} from "react-router-dom";
import uuid from 'uuid';
import Category from './category/category';
import queryString from 'query-string';
import PropTypes from 'prop-types'


const CategoriesList = ({categories, getSearchValue, getSearchedProducts, getFilteredProducts, getCurrentCategory, location: {search}}) => {
    if (search.length > 0) {
        let newSearch = queryString.parse(search);
        getSearchValue(newSearch.search);
    }
    return <>
        {categories.map((category, index) => <Category
                index={index}
                key={uuid()}
                category={category}
                getSearchValue={getSearchValue}
                getCurrentCategory={getCurrentCategory}
                getFilteredProducts={getFilteredProducts}
                getSearchedProducts={getSearchedProducts}
                search={search}
            />
        )}</>

};

CategoriesList.propTypes = {
    categories: PropTypes.array,
    getSearchValue: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    getFilteredProducts: PropTypes.func,
    getCurrentCategory: PropTypes.func,
    search: PropTypes.string
};

export default withRouter(CategoriesList);

