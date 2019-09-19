import { put, call, takeLatest } from 'redux-saga/effects';


export const REQUESTED_PRODUCTS  = 'REQUESTED_PRODUCTS';
export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
export const ERROR_OCCURRED = 'ERROR_OCCURRED';
export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';
export const GET_SEARCHED_PRODUCTS = 'GET_SEARCHED_PRODUCTS';
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY'


export const requestProducts = ( data ) => {
    return { type: REQUESTED_PRODUCTS , payload:data }
};

export const fetchProducts = () => {
    return { type: FETCHED_PRODUCTS }
};
export const loadingProducts = () => {
    return { type: LOADING_PRODUCTS }
}
export const errorOccurred = () => {
    return { type: ERROR_OCCURRED }
}
export const getFilteredProducts = (category) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        payload:category
    }
}
export const getCategories = () => {
    return { type: GET_CATEGORIES }
}
export const getSearchValue = (searchValue) => {
    return {
        type: GET_SEARCH_VALUE,
        payload: searchValue
    }
}
export const getSearchedProducts = () => {
    return { type: GET_SEARCHED_PRODUCTS}
}
export const getCurrentCategory = (category) => {
    return {
        type: GET_CURRENT_CATEGORY,
        payload: category
    }

};

// Sagas
export function* watchFetchProducts() {
    yield takeLatest( FETCHED_PRODUCTS, fetchProductsAsync );
}

export function* fetchProductsAsync() {
    try {
        yield put( loadingProducts() )
        const data = yield call(() => {
                return fetch('../products.json')
                    .then(res => res.json());
            }
        );
        yield put(requestProducts(data));
        yield put(getCategories())
    }catch(error){
        yield put(errorOccurred())
    }
}