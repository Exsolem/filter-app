import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Li = styled.li`
  text-align: left;
  border: 1px solid black;
  width: 20vw;
  list-style-type: none;
  font-size: 2vmin;
  color: black;
  &:hover {
    background-color: lightgrey;
    text-decoration: none;
  }
`

const CategoriesList = (props) =>{

    return <Link to={`/${props.category}/`}
      key={props.index}>
      <Li>
      {props.category}
      </Li>
    </Link>
}
export default CategoriesList;