import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './products/products';
import CategoriesList from './CategoriesList/categoriesList';
import uuid from 'uuid';


const AppContainer = styled.div`
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
`

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
const MyMenu = styled.menu`
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
`
const Img = styled.img`
position: absolute;
border-radius: 50%;
top: 40%;
left: 40%;
`



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    console.log(this.props);
    const list = this.props.categories.map((category, index) => {
      return <CategoriesList
        index = { index }
        key = { uuid() }
        category = { category }
        search = { this.props.search }
        getCurrentCategory = { this.props.getCurrentCategory }
        getFilteredProducts = { this.props.getFilteredProducts }
      />
    });
    return (
      <AppContainer className="col-lg-12">
        <Router>
          <Div>
            <MyMenu>
              {list}
            </MyMenu>
            {this.props.isLoading
              ? <Img src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" alt="loader" />
              : this.props.errorOccured
                ? <p>Error, try again</p>
                :
                <Route path='/' render={props =>
                  <Products {...props}
                    getFilteredProducts = { this.props.getFilteredProducts }
                    filteredProducts={this.props.filteredProducts}
                    searchedProducts={this.props.searchedProducts}
                    search={this.props.search}
                    products={this.props.products}
                    location={this.props.search}
                    getSearchValue={this.props.getSearchValue}
                    getSearchedProducts={this.props.getSearchedProducts}
                    getCurrentCategory = { this.props.getCurrentCategory }
                  />} />}
          </Div>
        </Router>
      </AppContainer>
    );
  }

}

export default App;
