import React from 'react'

import { reducer, initialState } from './products';
import * as t from './products'

describe('Products reducer', () => {
    it('LOADING_PRODUCTS', () => {
        const prevState = {
            ...initialState
        };
        const action = {
            type: t.LOADING_PRODUCTS
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            isLoading: true
        })
    })
    it('REQUESTED_PRODUCTS', () => {
        const prevState = {
            ...initialState,
            isLoading: true
        };
        const action = {
            type: t.REQUESTED_PRODUCTS,
            payload: {products: [1,2,3]}
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            products: action.payload.products,
            loadSuccess: true,
            isLoading: false
        })
    });
    it('ERROR_OCCURRED', () => {
        const prevState = {
            ...initialState,
            isLoading: true
        };
        const action = {
            type: t.ERROR_OCCURRED
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            isLoading: false,
            errorOccurred: true
        })
    });
    it('GET_CATEGORIES', () => {
        const prevState = {
            ...initialState,
            loadSuccess: true,
            errorOccurred: false,
            products: [{bsr_category:"Home & Kitchen"}]
        };
        const action = {
            type: t.GET_CATEGORIES
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            categories: ['All Products', "Home & Kitchen"]
        })
    });
    it('GET_FILTERED_PRODUCTS', () => {
        const prevState = {
            ...initialState,
            loadSuccess: true,
            errorOccurred: false,
            products: [
                    {bsr_category:"Home & Kitchen"}
                ],
            categories: ['All Products', "Home & Kitchen"],
            currentCategory: 'home-and-kitchen'
        };
        const action = {
            type: t.GET_FILTERED_PRODUCTS,
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            filteredProducts: [{bsr_category:"Home & Kitchen"}]
        })
    });
    it('GET_SEARCH_VALUE', () => {
        const prevState = {
            ...initialState
        };
        const action = {
            type: t.GET_SEARCH_VALUE,
            payload: 'searchedValue'
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            search: 'searchedValue'
        })
    });
    it('GET_CURRENT_CATEGORY', () => {
        const prevState = {
            ...initialState
        };
        const action = {
            type: t.GET_CURRENT_CATEGORY,
            payload: 'Current Category'
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            currentCategory: 'current-category'
        })
    });
    describe('GET_SEARCHED_PRODUCTS',() => {
        it('GET_SEARCHED_PRODUCTS from category', () => {
        const prevState = {
            ...initialState,
            products: [
                // {
                //     bsr_category:"Home & Kitchen",
                //     name: 'k'
                // },
                // {
                //     bsr_category:"Home & Kitchen",
                //     name: 'f'
                // },
                // {
                //     bsr_category:"Home & Kitchen",
                //     name: 'd'
                // },
                // {
                //     bsr_category:"OtherCategory",
                //     name: 'b'
                // },
                // {
                //     bsr_category:"OtherCategory",
                //     name: 'c'
                // }
            ],
            filteredProducts: [
                {
                    bsr_category:"Home & Kitchen",
                    name: 'k'
                },
                {
                    bsr_category:"Home & Kitchen",
                    name: 'f'
                },
                {
                    bsr_category:"Home & Kitchen",
                    name: 'a'
                }
            ],
            currentCategory: 'home-and-kitchen',
            search: 'a'
        };
        const action = {
            type: t.GET_SEARCHED_PRODUCTS,
        };
        expect(reducer(prevState, action)).toEqual({
            ...prevState,
            searchedProducts: [
                {
                    bsr_category:"Home & Kitchen",
                    name: 'a'
                }
            ]
            })
        });
        it('GET_SEARCHED_PRODUCTS from all products', () => {
            const prevState = {
                ...initialState,
                products: [
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'arat'
                    },
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'f'
                    },
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'agat'
                    },
                    {
                        bsr_category:"OtherCategory",
                        name: 'b'
                    },
                    {
                        bsr_category:"OtherCategory",
                        name: 'c'
                    }
                ],
                filteredProducts: [
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'k'
                    },
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'f'
                    },
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'a'
                    }
                ],
                currentCategory: 'all-products',
                search: 'a'
            };
            const action = {
                type: t.GET_SEARCHED_PRODUCTS,
            };
            expect(reducer(prevState, action)).toEqual({
                ...prevState,
                searchedProducts: [
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'arat'
                    },
                    {
                        bsr_category:"Home & Kitchen",
                        name: 'agat'
                    }
                ]
            })
        });
    });

});

