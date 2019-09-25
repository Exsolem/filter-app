import React from 'react'
import expect from 'expect'

import * as t from './products'

describe('Action Creators', ()=> {
    it('requestProducts', () => {
        const expectAction = {
            type: t.REQUESTED_PRODUCTS,
            payload: [1,2,3,4]
        };
        expect(t.requestProducts([1,2,3,4])).toEqual(expectAction);
    });
    it('fetchProducts', () => {
        const expectAction = {
            type: t.FETCHED_PRODUCTS
        };
        expect(t.fetchProducts()).toEqual(expectAction);
    });
    it('loadingProducts', () => {
        const expectAction = {
            type: t.LOADING_PRODUCTS
        };
        expect(t.loadingProducts()).toEqual(expectAction);
    });
    it('errorOccurred', () => {
        const expectAction = {
            type: t.ERROR_OCCURRED
        };
        expect(t.errorOccurred()).toEqual(expectAction);
    });
    it('getFilteredProducts', () => {
        const expectAction = {
            type: t.GET_FILTERED_PRODUCTS,
            payload: 'category'
        };
        expect(t.getFilteredProducts('category')).toEqual(expectAction);
    })
    it('getCategories', () => {
        const expectAction = {
            type: t.GET_CATEGORIES,
        };
        expect(t.getCategories()).toEqual(expectAction);
    })
    it('getSearchValue', () => {
        const expectAction = {
            type: t.GET_SEARCH_VALUE,
        };
        expect(t.getSearchValue()).toEqual(expectAction);
    });
    it('getSearchedProducts', () => {
        const expectAction = {
            type: t.GET_SEARCHED_PRODUCTS,
        };
        expect(t.getSearchedProducts()).toEqual(expectAction);
    });
    it('getCurrentCategory', () => {
        const expectAction = {
            type: t.GET_CURRENT_CATEGORY,
            payload: 'category'
        };
        expect(t.getCurrentCategory('category')).toEqual(expectAction);
    });
});