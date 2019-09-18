import { 
    REQUESTED_PRODUCTS, 
    LOADING_PRODUCTS, 
    ERROR_OCCURED, 
    GET_FILTERED_PRODUCTS, 
    GET_CATEGORIES, 
    GET_SEARCH_VALUE, 
    GET_SEARCHED_PRODUCTS,
    GET_CURRENT_CATEGORY
 } from './actions'

const initialState = {
    isLoading: false,
    loadSuccess: false,
    errorOccured: false,
    products: [],
    filteredProducts: [],
    searchedProducts:[],
    categories: [],
    search: [],
    currentCategory: ''
};
const  reducer = (state = initialState, action) => {
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
        case ERROR_OCCURED: 
            return {
                ...state,
                isLoading: false,
                errorOccured: true
            }
        case GET_CATEGORIES: {
            let  categories = [];
            [...state.products].forEach( item => {
                if(categories.indexOf(item.bsr_category) === -1){
                    categories.push(item.bsr_category)
                }
            })
            return {...state, categories};
            
        }
        case GET_FILTERED_PRODUCTS: {
            const filteredProducts = [...state.products]
                .filter(item => item.bsr_category === state.currentCategory)

            console.log(filteredProducts)
            return {...state,
                filteredProducts,
            }
        }
        case GET_SEARCH_VALUE:{
                return { ...state, search: action.payload.toLowerCase() }
        }
        case GET_CURRENT_CATEGORY:{
            const currentCategory = action.payload.replace('/', '')
            return { ...state, currentCategory }
        }
        case GET_SEARCHED_PRODUCTS: {
            let searchedProducts = [];
            if(state.currentCategory){
                state.filteredProducts.map( product => {
                    const name = product.name.toLowerCase();
                    const search = state.search.toLowerCase();
                    if(name.indexOf(search) >= 0){
                        searchedProducts.push(product)
                    }
                })
            }
            else{
                state.products.map( product => {
                    const name = product.name.toLowerCase();
                    const search = state.search.toLowerCase();
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
export default reducer;

