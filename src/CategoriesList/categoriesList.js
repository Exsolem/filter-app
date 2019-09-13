import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import styled from 'styled-components';

const Li = styled.li`
  text-align: left;
  border: 1px solid black;
  width: 20vw;
  list-style-type: none;
  font-size: 2.5vmin;
  color: black;
  &:hover {
    background-color: lightgrey;
    text-decoration: none;
  }
`
const CategoriesList = ({category, index, location: {search}}) => {
  const filteredCategory = category.replace(/_/g, ' ');

  return (
  <NavLink
    to={{
      pathname:`/${filteredCategory}`,
      search:`${search}`,
    }}
    key={index}
    activeStyle={{
      backgroundColor: "lightgrey",
    }}
  >
    <Li>
      {category}
    </Li>
  </NavLink>)
}
export default withRouter(CategoriesList);