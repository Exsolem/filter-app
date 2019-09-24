import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './ducks/products'
import { AppContainer, AppDiv, AppImg, AppMenu } from "./styled/styledComponents"
import Products from './products/products'
import CategoriesList from "./categoriesList/categoriesList";


export class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentCategory && prevProps.products.length !== this.props.products.length) {
            this.props.getFilteredProducts();
            this.props.getSearchedProducts();
        }
        if (this.props.search && prevProps.search.length !== this.props.search.length) {
            this.props.getSearchedProducts();
        }
    }

    render() {
        return (
            <AppContainer className="col-lg-12">
                <Router>
                    <AppDiv>
                        <AppMenu>
                            <CategoriesList
                                currentCategory={this.props.currentCategory}
                                categories={this.props.categories}
                                search={this.props.search}
                                getSearchValue={this.props.getSearchValue}
                                getCurrentCategory={this.props.getCurrentCategory}
                                getFilteredProducts={this.props.getFilteredProducts}
                                getSearchedProducts={this.props.getSearchedProducts}
                            />
                        </AppMenu>
                        {this.props.isLoading ? (
                            <AppImg
                                src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"
                                alt="loader"
                            />
                        ) : this.props.errorOccurred ? (
                            <p>Error, try again</p>
                        ) : (
                            <Route path='/' render={props => (
                                <Products
                                    {...props}
                                    getFilteredProducts={this.props.getFilteredProducts}
                                    filteredProducts={this.props.filteredProducts}
                                    searchedProducts={this.props.searchedProducts}
                                    search={this.props.search}
                                    products={this.props.products}
                                    getSearchValue={this.props.getSearchValue}
                                    getSearchedProducts={this.props.getSearchedProducts}
                                    getCurrentCategory={this.props.getCurrentCategory}
                                />
                            )}/>
                        )}
                    </AppDiv>
                </Router>
            </AppContainer>
        );
    }

}

App.propTypes = {
    currentCategory: PropTypes.string,
    category: PropTypes.string,
    getFilteredProducts: PropTypes.func,
    fetchProducts: PropTypes.func,
    filteredProducts: PropTypes.array,
    searchedProducts: PropTypes.array,
    search: PropTypes.string,
    products: PropTypes.array,
    getSearchValue: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    getCurrentCategory: PropTypes.func,
    Products: PropTypes.element,
    Category: PropTypes.element
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
