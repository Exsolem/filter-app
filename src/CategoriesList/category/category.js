import React from 'react';
import { NavLink } from "react-router-dom";
import uuid from 'uuid'
import queryString from 'query-string'
import { CategoryLi} from '../../styled/styledComponents'
import PropTypes from 'prop-types'
import slugify from "slugify";


const Category = ({category, getCurrentCategory,getFilteredProducts, getSearchedProducts,getSearchValue, search }) => {
   const slugCategory = slugify(category.toLowerCase());
  const getProducts = () => {
    getCurrentCategory(slugCategory);
    getFilteredProducts();
    getSearchedProducts();
  }
  if (search.length > 0) {
    let newSearch = queryString.parse(search);
    getSearchValue(newSearch.search);
  }

  return (
    <NavLink
      to={{
        pathname: `/${slugCategory}`,
        search: `${search}`,
      }}
      key={uuid()}
      activeStyle={{
        color: 'white',
        backgroundColor: 'rgba(0, 107, 54, 0.6)'
      }}
      style={{
        color: 'black',
        textDecoration: 'none',
        backgroundColor: 'rgba(86, 125, 130, 1)'
      }}
      onClick={getProducts}
    >
      <CategoryLi>
      {category}
      </CategoryLi>
    </NavLink>)
};
Category.propTypes = {
    category: PropTypes.string,
    getCurrentCategory: PropTypes.func,
    getFilteredProducts: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    getSearchValue: PropTypes.func,
    search: PropTypes.string
};
export default Category;