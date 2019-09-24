import React from 'react'
import {shallow} from 'enzyme'

import Category from './category'


describe('Category', () => {
    const mockGetCurrentCategory = jest.fn(),
        mockFilteredProducts = jest.fn(),
        mockGetSearchedProduct = jest.fn(),
        mockGetSearchValue = jest.fn();

    const props = {
        category: '',
        getCurrentCategory: mockGetCurrentCategory,
        getFilteredProducts: mockFilteredProducts,
        getSearchedProducts: mockGetSearchedProduct,
        getSearchValue: mockGetSearchValue,
        search: 'search'
    };

    describe('product initial', () => {
        const category = shallow(<Category {...props}/>);
        it('renders properly', () => {
            expect(category.debug()).toMatchSnapshot()
        });
    });

});