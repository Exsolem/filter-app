import React from 'react'
import {shallow} from 'enzyme'

import Product  from './product'


describe('Search', () => {
    const props = {
        product: {
            img: 'product/img/url',
            name: 'product name',
            price: 'product price'
        }
    };

    describe('product initial', () => {
        const product = shallow(<Product {...props}/>);
        it('renders properly', () => {
            expect(product.debug()).toMatchSnapshot()
        });
    });
    describe('elements is rendered and equals to props', () => {
        const product = shallow(<Product {...props}/>);
        describe('product image', () => {
            it('is rendered', () => {
                expect(product.find('ProductImg')).toHaveLength(1);
            });
            it('src is correct', () => {
                expect(product.find('ProductImg').prop('src')).toEqual(props.product.img);
            });
        })
        describe('Product name', () => {
            it('is redered', () => {
                expect(product.find('ProductName')).toHaveLength(1)
            })
            it('is redered', () => {
                expect(product.find('ProductName').text()).toEqual(props.product.name)
            })
        })
        describe('Product price', () => {
            it('is redered', () => {
                expect(product.find('ProductPrice')).toHaveLength(1)
            })
            it('is redered', () => {
                expect(product.find('ProductPrice').text()).toEqual(props.product.price + ' GBP')
            })
        })
    })
});