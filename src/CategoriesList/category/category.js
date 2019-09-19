import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';
import uuid from 'uuid'
import queryString from 'query-string'
import { CategoryLi} from '../../styled/styledComponents'


const Category = (props) => {
  const getProducts = () => {
    props.getCurrentCategory(props.category);
    props.getFilteredProducts();
    props.getSearchedProducts();
  }
  if (props.search.length > 0) {
    let newSearch = queryString.parse(props.search);
    props.getSearchValue(newSearch.search);
  }
  const searchedProducts = () => {
    if (props.search.length > 0) {
      let newSearch = queryString.parse(props.search); 
      props.getSearchValue(newSearch.search);
    }
    props.getSearchedProducts();
  }

  return (
    <NavLink
      to={{
        pathname: `/${props.category}`,
        search: `${props.search}`,
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
      {props.category}
      </CategoryLi>
    </NavLink>)
}
export default Category;