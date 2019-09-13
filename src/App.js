import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      category: ['All_Products', 'Baby_Products', 'Home_&_Kitchen', 'Health_&_Personal_Care', 'Sports_&_Outdoors']
    }
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
  render() {
    const list = this.state.category.map((category, index) => {
      return <CategoriesList index={ index } key={ index } category={ category }  search = { this.state.searchInput }/>
    })
    return (
      <AppContainer className="col-lg-12">
        <Router>
          <Div>
            <MyMenu>
              {list}
            </MyMenu>
              <Route path='/' render={props => <Products { ...props } products={ this.state.products } location={this.state.searchInput}/>} />
          </Div>
        </Router>
      </AppContainer>
    );
  }

}

export default App;
