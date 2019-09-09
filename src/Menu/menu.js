import React from 'react'
import styled from 'styled-components';

const myMenu = styled.menu`
  display: flex;
  flex-flow: column nowrap;
  text-align:left;
  align-items: flex-start;
  height: auto;
  width: 20vw;
  font-size: 3vmin;
  cursor: pointer;
  padding: 0;
  
`
const Li = styled.li`
  text-align: left;
  border: 1px solid black;
  width: 20vw;
  &:hover {
    background-color: lightblue;
  }
`
const Menu = (props) => {
    const categorySelect= (e) => {
        return props.categorySelect(e)
    }

   return  <myMenu>
        <Li onClick={categorySelect} data-category='Baby Products'>Baby Products</Li>
        <Li onClick={categorySelect} data-category='Home & Kitchen'>Home & Kitchen</Li>
        <Li onClick={categorySelect} data-category='Health & Personal Care'>Health & Personal Care</Li>
        <Li onClick={categorySelect} data-category='Sports & Outdoors'>Sports & Outdoors</Li>
    </myMenu>
}

export default Menu