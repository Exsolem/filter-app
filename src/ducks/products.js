import {put, call, takeLatest} from 'redux-saga/effects';

//Action types

const REQUESTED_PRODUCTS = 'REQUESTED_PRODUCTS';
const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';
const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
const ERROR_OCCURRED = 'ERROR_OCCURRED';
const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';
const GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS';
const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY';

const initialState = {
    isLoading: false,
    loadSuccess: false,
    errorOccurred: false,
    products: [],
    filteredProducts: [],
    searchedProducts:[],
    categories: [],
    search: [],
    currentCategory: ''
};

//Action creators

const requestProducts = (data) => {
    return {type: REQUESTED_PRODUCTS, payload: data}
};
const fetchProducts = () => {
    return {type: FETCHED_PRODUCTS}
};
const loadingProducts = () => {
    return {type: LOADING_PRODUCTS}
};
const errorOccurred = () => {
    return {type: ERROR_OCCURRED}
};
const getFilteredProducts = (category) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: category
    }
};
const getCategories = () => {
    return {type: GET_CATEGORIES}
};
const getSearchValue = (searchValue) => {
    return {
        type: GET_SEARCH_VALUE,
        payload: searchValue
    }
};
const getSearchedProducts = () => {
    return {type: GET_SEARCHED_PRODUCTS}
};
const getCurrentCategory = (category) => {
    return {
        type: GET_CURRENT_CATEGORY,
        payload: category
    }

};

export const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PRODUCTS:
            return{
                ...state,
                isLoading: true
            }
        case REQUESTED_PRODUCTS:{
            return {
                ...state,
                products: action.payload.products,
                loadSuccess: true,
                isLoading: false
            };
        }
        case ERROR_OCCURRED:
            return {
                ...state,
                isLoading: false,
                errorOccurred: true
            };
        case GET_CATEGORIES: {
            let  categories = [];
            [...state.products].forEach( item => {
                if(categories.indexOf(item.bsr_category) === -1){
                    categories.push(item.bsr_category)
                }
            });
            return {...state, categories};

        }
        case GET_FILTERED_PRODUCTS: {
            const filteredProducts = [...state.products]
                .filter(item => item.bsr_category === state.currentCategory)

            return {...state,
                filteredProducts,
            }
        }
        case GET_SEARCH_VALUE:{
            return { ...state, search: action.payload.toLowerCase() }
        }
        case GET_CURRENT_CATEGORY:{
            const currentCategory = action.payload.replace('/', '');
            return { ...state, currentCategory }
        }
        case GET_SEARCHED_PRODUCTS: {
            let searchedProducts = [];
            if(state.currentCategory){
                [...state.filteredProducts].forEach( product => {
                    const name = product.name.toLowerCase();
                    console.log(state.search);
                    const search = state.search;
                    if(name.indexOf(search) >= 0){
                        searchedProducts.push(product)
                    }
                })
            }
            else{
                [...state.products].forEach( product => {
                    const name = product.name.toLowerCase();
                    const search = state.search.toLowerCase() ;
                    if(name.indexOf(search) >= 0){
                        searchedProducts.push(product)
                    }
                })
            }
            return {
                ...state,
                searchedProducts
            }
        }
        default:
            return state;
    }
};

//Connect dispatch and state

export const mapStateToProps = ({products,isLoading,errorOccurred, filteredProducts, categories, search, currentCategory, searchedProducts }) => {
    return {
        products,
        isLoading,
        errorOccurred,
        filteredProducts,
        categories,
        search,
        currentCategory,
        searchedProducts
    }

};

export const mapDispatchToProps = {
    fetchProducts,
    getFilteredProducts,
    getSearchValue,
    getSearchedProducts,
    getCurrentCategory
};

// Sagas async
export function* watchFetchProducts() {
    yield takeLatest(FETCHED_PRODUCTS, fetchProductsAsync);
}

export function* fetchProductsAsync() {
    try {
        yield put(loadingProducts())
        const data = yield call(() => {
                return fetch('https://demo8421975.mockable.io/products')
                    .then(res => res.json());
            }
        );
        yield put(requestProducts(data));
        yield put(getCategories())
    } catch (error) {
        yield put(errorOccurred())
    }
}