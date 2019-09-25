import {put, call, takeLatest} from 'redux-saga/effects';
import slugify from 'slugify'

//Action types

export const REQUESTED_PRODUCTS = 'REQUESTED_PRODUCTS';
export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
export const ERROR_OCCURRED = 'ERROR_OCCURRED';
export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';
export const GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS';
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY';

export const initialState = {
    isLoading: false,
    loadSuccess: false,
    errorOccurred: false,
    products: [],
    filteredProducts: [],
    searchedProducts: [],
    categories: [],
    search: '',
    currentCategory: ''
};

//Action creators

export const requestProducts = (data) => {
    return {type: REQUESTED_PRODUCTS, payload: data}
};
export const fetchProducts = () => {
    return {type: FETCHED_PRODUCTS}
};
export const loadingProducts = () => {
    return {type: LOADING_PRODUCTS}
};
export const errorOccurred = () => {
    return {type: ERROR_OCCURRED}
};
export const getFilteredProducts = (category) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        payload: category
    }
};
export const getCategories = () => {
    return {type: GET_CATEGORIES}
};
export const getSearchValue = (searchValue) => {
    return {
        type: GET_SEARCH_VALUE,
        payload: searchValue
    }
};
export const getSearchedProducts = () => {
    return {type: GET_SEARCHED_PRODUCTS}
};
export const getCurrentCategory = (category) => {
    return {
        type: GET_CURRENT_CATEGORY,
        payload: category
    }

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true
            };
        case REQUESTED_PRODUCTS: {
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
            let categories = ['All Products'];
            [...state.products].forEach(item => {
                const category = item.bsr_category;
                if (categories.indexOf(category) === -1) {
                    categories.push(category)
                }
            });
            return {...state, categories};

        }
        case GET_FILTERED_PRODUCTS: {
            const filteredProducts = [...state.products]
                .filter(item => slugify(item.bsr_category
                        .toLowerCase()) ===
                            state.currentCategory || state.currentCategory === 'all-products');
            return {
                ...state,
                filteredProducts
            }
        }
        case GET_SEARCH_VALUE: {
            return {...state, search: action.payload}
        }
        case GET_CURRENT_CATEGORY: {
            const currentCategory = slugify(action.payload.toLowerCase());
            return {...state, currentCategory}
        }
        case GET_SEARCHED_PRODUCTS: {
            let searchedProducts = [];
            if (state.currentCategory && state.currentCategory !== 'all-products') {
                [...state.filteredProducts].forEach(product => {
                    const name = product.name.toLowerCase();
                    const search = state.search.toLowerCase();
                    if (name.indexOf(search) >= 0) {
                        searchedProducts.push(product)
                    }
                })
            } else {
                [...state.products].forEach(product => {
                    const name = product.name.toLowerCase();
                    const search = state.search.toLowerCase();
                    if (name.indexOf(search) >= 0) {
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

export const mapStateToProps = ({
    products, isLoading, errorOccurred, filteredProducts, categories, search, currentCategory, searchedProducts
}) => {
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
        yield put(loadingProducts());
        const data = yield call(() => fetch('../products.json').then(res => res.json()));
        yield put(requestProducts(data));
        yield put(getCategories())
    } catch (error) {
        yield put(errorOccurred())
    }
}