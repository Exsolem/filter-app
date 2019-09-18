import React, {useEffect} from 'react';
import { NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';
import uuid from 'uuid'

const Li = styled.li`
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
`
const CategoriesList = ({ category, getFilteredProducts, getCurrentCategory , location: {search} }) => {
  const getProducts = () => {
    getCurrentCategory(category);
    getFilteredProducts();
  }

  return (
  <NavLink
    to={{
      pathname:`/${category}`,
      search:`${search}`,
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
    onLoad = {() => getCurrentCategory(category)}
  >
    <Li>
      {category}
    </Li>
  </NavLink>)
}
export default withRouter(CategoriesList);