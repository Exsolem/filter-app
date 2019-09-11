import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Products from './products/products';
import CategoriesList from './CategoriesList/categoriesList';

const AppContainer = styled.div`
  text-align: center;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchInput: '',
      category: ['All_Products', 'Baby_Products', 'Home_&_Kitchen', 'Health_&_Personal_Care', 'Sports_&_Outdoors']
    }
    this.searchBtn = this.searchBtn.bind(this);
    this.searchInputChange = this.searchInputChange.bind(this);
  }
  componentDidMount() {
    (async () => {
      const request = await fetch('https://demo8421975.mockable.io/products');
      const data = await request.json();

      this.setState({
        products: data.products
      })
    })();
  }
  searchInputChange(e) {
    this.setState({
      searchInput: e.target.value.split(' ').join('_')
    })
  }
  searchBtn() {
    const filteredProducts = this.state.products.filter(item => item.name.toLowerCase().search(this.state.searchInput) !== -1);
    this.setState({
      filteredProducts
    })
  }
  render() {
    const list = this.state.category.map((category, index) => {
      return <CategoriesList index={index} key={index} category={category} />
    })
    return (
      <AppContainer className="col-lg-12">
        <Router>
          <InputGroup className="mb-3">
            <FormControl
              onChange={ this.searchInputChange }
            />
            <InputGroup.Append>
              <Link to={`/${this.state.searchInput}`}>
                <Button variant="outline-secondary" onClick={ this.searchBtn }>Search</Button>
              </Link>
            </InputGroup.Append>
          </InputGroup>
          <Div>
            <MyMenu>
              {list}
            </MyMenu>
            <Route path='/:category' render={props => <Products { ...props } products={ this.state.products } />} />
          </Div>
        </Router>
      </AppContainer>
    );
  }

}

export default App;
