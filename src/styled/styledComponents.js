import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  background: rgba(0,130,117,1);
  background: -moz-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,130,117,1)), color-stop(100%, rgba(0,94,120,1)));
  background: -webkit-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);
  background: -o-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);
  background: -ms-linear-gradient(top, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);
  background: linear-gradient(to bottom, rgba(0,130,117,1) 0%, rgba(0,94,120,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#008275', endColorstr='#005e78', GradientType=0 );
  color: white;
  min-height: 100vh;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
AppContainer.displayName = 'AppContainer';

export const AppDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
AppDiv.displayName = 'AppDiv';

export const AppMenu = styled.menu`
  display: flex;
  flex-flow: column nowrap;
  text-align:left;
  align-items: flex-start;
  height: auto;
  width: 20vw;
  font-size: 3vmin;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height:15vh;
`;
AppMenu.displayName = 'AppMenu';

export const AppImg = styled.img`
position: absolute;
border-radius: 50%;
top: 40%;
left: 40%;
`;
AppImg.displayName = 'AppImg';

export const ProductsDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
ProductsDiv.displayname = 'ProductsDiv';

export const ProductsUl = styled.ul`
    margin: 0;
    padding: 0;
`;
ProductsUl.dispayName = 'ProductsUl';

export const ProductName = styled.span`
    font-size: 2.5vmin;
    line-height: 70%;   
    color: black;
    @media (max-width: 575px) {
    font-size: 2.5vmax;
    padding: 10px;
  }
`;
ProductName.displayName = 'ProductName';

export const ProductPrice = styled.span`
    font-size: 3vmin;
    line-height: 70%;   
    color: black;
    font-weight: bold;
    @media (max-width: 575px) {
    font-size: 2.5vmax;
    margin: 2vmax;
  }
`;
ProductPrice.displayName = 'ProductPrice';

export const ProductLi = styled.li`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vmin;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 2vmin;
`;
ProductLi.displayName = 'ProductLi';

export const ProductImg = styled.img`
    max-width: 40vmin;  
    padding: 0;
    border-radius: 1vmin;
    @media (max-width: 575px) {
        margin-bottom: 1vmax;
        max-width: 50vmin;  
    }
`;
ProductImg.displayName = 'ProductImg';

export const CategoryLi = styled.li`
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
CategoryLi.displayName = 'CategoryLi';
