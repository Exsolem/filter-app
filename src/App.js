import React from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import Products from './products/products'
import styled from 'styled-components';
import Menu from './Menu/menu'

const AppContainer = styled.div`
  text-align: center;
`

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: null,
      searchInput: ''
    }
    this.searchBtn = this.searchBtn.bind(this);
    this.searchInputChange = this.searchInputChange.bind(this);
    this.categorySelect = this.categorySelect.bind(this);
  }
  componentWillMount() {
    fetch('https://demo8421975.mockable.io/products')
      .then(data => data.json()).then(data => {
        let products = data.products;
        this.setState({
          products
        })
      })
  }
  searchInputChange(e) {
    this.setState({
      searchInput: e.target.value.toLowerCase()
    })
  }
  searchBtn() {
    const filteredProducts = this.state.products.filter(item => item.name.toLowerCase().search(this.state.searchInput) !== -1);
    this.setState({
      filteredProducts
    })
  }
  categorySelect(e){
    console.log(e.target.dataset.category);
    const filteredProducts = this.state.products.filter(item => item.bsr_category.search(e.target.dataset.category) !== -1);
    this.setState({
      filteredProducts
    })
  }
  render() {
    return (
      <AppContainer className="col-lg-12">
        <InputGroup className="mb-3">
          <FormControl
            onChange={this.searchInputChange} 
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.searchBtn}>Search</Button>
          </InputGroup.Append> 
        </InputGroup>
      <Div>

        <Menu categorySelect={this.categorySelect}/>

        {this.state.filteredProducts ?
          <Products products={this.state.filteredProducts} />
          :
          <Products products={this.state.products} />
        }
      </Div>
      </AppContainer>
    );
  }

}

export default App;
