import React from 'react';
import {withRouter} from "react-router-dom";
import uuid from 'uuid';
import Category from './category/category';
import queryString from 'query-string';


const CategoriesList = ({ categories, getSearchValue, getSearchedProducts, getFilteredProducts, getCurrentCategory, location: { search } }) => {

  if (search.length > 0) {
    let newSearch = queryString.parse(search);
    getSearchValue(newSearch.search);

  }
  return categories.map((category, index) => <Category
              index={index}
              key={uuid()}
              category={category}
              getSearchValue={getSearchValue}
              getCurrentCategory={getCurrentCategory}
              getFilteredProducts={getFilteredProducts}
              getSearchedProducts={getSearchedProducts}
              search={search}
          />
      )
};

export default withRouter(CategoriesList);