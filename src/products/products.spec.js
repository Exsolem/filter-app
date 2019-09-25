import React from 'react'
import {shallow} from 'enzyme'

import Products from './products'


describe('Products', () => {
    const mockGetCurrentCategory = jest.fn();
    const props = {
        getCurrentCategory: mockGetCurrentCategory,
        search:'',
        filteredProducts: [],
        searchedProducts:[],
        products: [],
        history: {
            location:{
                pathname:'/'
            }
        }
    };
    describe('Products initial', () => {
        const products = shallow(<Products {...props}/>);
        it('renders properly', () => {
            expect(products).toMatchSnapshot()
        });
        it('getCurrentCategory func was called',() => {
            expect(mockGetCurrentCategory).toHaveBeenCalled();
        })
        it('Product not rendered', () => {
            expect(products.find('Product')).toHaveLength(0);
        })
    });
    describe('Products data received',() => {
        describe('Products received', () => {
            const nextProps = {
                ...props,
                products: [1,2,3]
            };
            const products = shallow(<Products {...nextProps}/>);

            it('Product rendered', () => {
                expect(products.find('Product')).toHaveLength(3);
            })
        });
        describe('Filtered Products received', () => {
            const nextProps = {
                ...props,
                filteredProducts: [1,2,3]
            };
            const products = shallow(<Products {...nextProps}/>);

            it('Product rendered', () => {
                expect(products.find('Product')).toHaveLength(3);
            })
        });
        describe('Searched Products received', () => {
            const nextProps = {
                ...props,
                filteredProducts: [1,2,3]
            };
            const products = shallow(<Products {...nextProps}/>);

            it('Product rendered', () => {
                expect(products.find('Product')).toHaveLength(3);
            })
        })

    })
});