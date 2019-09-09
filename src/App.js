import React from 'react';
import './App.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import Products from './products/products'

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
  render() {
    return (
      <div className="App col-lg-12">
        <InputGroup className="mb-3">
          <FormControl
            onChange={this.searchInputChange} 
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.searchBtn}>Search</Button>
          </InputGroup.Append> 
        </InputGroup>

        {this.state.filteredProducts ?
          <Products products={this.state.filteredProducts} />
          :
          <Products products={this.state.products} />
        }
      </div>
    );
  }

}

export default App;
