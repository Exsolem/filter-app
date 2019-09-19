import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';
import uuid from 'uuid'
import queryString from 'query-string'

const CategoryLi = styled.li`
  text-align: left;
  border: 1px solid black;
  width: 20vw;
  list-style-type: none;
  font-size: 1.75vw;
  padding-left: 1vmin;
  &:hover { 
    background-color: rgba(0, 107, 54, 0.6);
    text-decoration: none;
    color: #dfe3e6;
  };
`;
const Category = ({ category, getSearchValue, getSearchedProducts, getFilteredProducts, getCurrentCategory, location: { search } }) => {
  const getProducts = () => {
    getCurrentCategory(category);
    getFilteredProducts();
    getSearchedProducts();
  };
  if (search.length > 0) {
    let newSearch = queryString.parse(search);
    getSearchValue(newSearch.search);
  }
  const searchedProducts = () => {
    if (search.length > 0) {
      let newSearch = queryString.parse(search); 
      getSearchValue(newSearch.search);
    }
    getSearchedProducts();
  };

  return (
    <NavLink
      to={{
        pathname: `/${category}`,
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
      onLoad = { searchedProducts }
    >
      <CategoryLi>
        {category}
      </CategoryLi>
    </NavLink>)
};
export default withRouter(Category);