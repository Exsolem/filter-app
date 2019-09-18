import reducer from './reducer';
import {  
  fetchProducts, 
  watchFetchProducts, 
  getFilteredProducts, 
  getSearchValue, 
  getSearchedProducts, 
  getCurrentCategory
 } from './actions';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

// Action Creators

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchProducts);

export const mapStateToProps = ({products,isLoading,errorOccured, filteredProducts, categories, search, currentCategory, searchedProducts }) => {
        return {
            products,
            isLoading,
            errorOccured,
            filteredProducts,
            categories,
            search,
            currentCategory,
            searchedProducts
        }
        
      }

export const mapDispatchToProps = {
    fetchProducts,
    getFilteredProducts,
    getSearchValue,
    getSearchedProducts,
    getCurrentCategory
}



export default store;
