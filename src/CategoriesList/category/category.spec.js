import React from 'react'
import {shallow} from 'enzyme'

import Category from './category'


describe('Category', () => {
    const mockGetCurrentCategory = jest.fn(),
        mockFilteredProducts = jest.fn(),
        mockGetSearchedProduct = jest.fn(),
        mockGetSearchValue = jest.fn();

    const props = {
        category: 'category',
        getCurrentCategory: mockGetCurrentCategory,
        getFilteredProducts: mockFilteredProducts,
        getSearchedProducts: mockGetSearchedProduct,
        getSearchValue: mockGetSearchValue,
        search: ''
    };

    describe('product initial', () => {
        const nextProps = {
            ...props,
            category: ''
        };
        const category = shallow(<Category {...nextProps}/>);

        it('renders properly', () => {
            expect(category.debug()).toMatchSnapshot()
        });
        it('not renders category', () => {
            expect(category.find('CategoryLi').text()).toHaveLength(0);
        });
    });
    describe('product initial', () => {
        const category = shallow(<Category {...props}/>);

        it('renders properly', () => {
            expect(category.debug()).toMatchSnapshot()
        });
        it('renders category', () => {
            expect(category.find('CategoryLi')).toHaveLength(1);
        });
        it('renders category name equal to props', () => {
            expect(category.find('CategoryLi').text()).toEqual(props.category)
        })

    });
    describe('Category on click', () => {
        const category = shallow(<Category {...props}/>);
        category.find('NavLink').simulate('click');

        it('getFilteredProducts called', () => {
            expect(mockFilteredProducts).toHaveBeenCalled();
        });
        it('getCurrentCategory called', () => {
            expect(mockGetCurrentCategory).toHaveBeenCalled();
        });
        it('getFilteredProducts called', () => {
            expect(mockGetSearchedProduct).toHaveBeenCalled();
        });
    });
    describe('Category on click with search',() => {
        const nextProps = {
            ...props,
            search: 'search'
        };
        const category = shallow(<Category {...nextProps}/>);
        category.find('NavLink').simulate('click');

        it('getSearchValue called', () => {
            expect(mockGetSearchValue).toHaveBeenCalled();
        })
    })

});