import React from 'react';
import './App.css';
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
  componentWillMount(){
    const request = new XMLHttpRequest();
    request.open(
      'GET',
      'https://demo8421975.mockable.io/products',
      true);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.response).products;
        this.setState({
          products: response
        })
      }
    }
    console.log(this.state.products);
  }
  searchInputChange(e){
    this.setState({
      searchInput: e.target.value.toLowerCase()
    })
  }
  searchBtn(){
    const filteredProducts = this.state.products.filter(item => item.name.toLowerCase().search(this.state.searchInput) !== -1);
    this.setState({
      filteredProducts
    })
    console.log(filteredProducts)
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.searchInputChange}/>
        <button onClick={this.searchBtn}>search</button>
          {this.state.filteredProducts? 
          <Products products={this.state.filteredProducts}/>
          :
          <Products products={this.state.products}/>
          }
      </div>
    );
  }

}

export default App;
