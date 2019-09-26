import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import  { App } from './App'

describe('App', () => {
    const mockFetchProducts = jest.fn()
    const props = {
        isLoading: false,
        loadSuccess: false,
        errorOccurred: false,
        products: [],
        filteredProducts: [],
        searchedProducts: [],
        categories: [],
        search: '',
        currentCategory: '',
        fetchProducts: mockFetchProducts
    };

    describe('App initial', () => {
        const app = shallow(<App {...props}/>);
        it('renders properly', () => {
            expect(toJson(app)).toMatchSnapshot()
        });
        it('dispatches the `fetchProducts()` method it receives from props', () => {
            expect(mockFetchProducts).toHaveBeenCalled()
        });
        it('not rendered products', () => {
            expect(app.find('Products')).toHaveLength(0);
        });
        it('not rendered CategoriesList',() => {
            expect(app.find('CategoriesList')).toHaveLength(0);
        })
    });
    describe('Products is loading', () => {
        const nextProps = {
            ...props,
            isLoading: true
        };
        const app = shallow(<App {...nextProps} />);
        it('renders properly', () => {
            expect(toJson(app)).toMatchSnapshot()
        });
        it('render loader', () => {
            expect(app.find('AppImg')).toHaveLength(1);
        });
        it('not render Products', () => {
            expect(app.find('Products')).toHaveLength(0)
        });
        it('not render error', () => {
            expect(app.find('p')).toHaveLength(0)
        })
    })
    describe('Products is loaded with error', () => {
        const nextProps = {
            ...props,
            errorOccurred: true
        };
        const app = shallow(<App {...nextProps} />);
        it('renders properly', () => {
            expect(toJson(app)).toMatchSnapshot()
        });
        it('renders error', () => {
            expect(app.find('p').text()).toEqual('Error, try again');
        });
        it('not render loader', () => {
            expect(app.find('AppImg')).toHaveLength(0);
        });
        it('not render Products', () => {
            expect(app.find('Products')).toHaveLength(0)
        });

    });
    describe('Products loading is success', () => {
        const nextProps = {
            ...props,
            loadSuccess: true
        };
        const app = shallow(<App {...nextProps} />);
        it('renders properly', () => {
            expect(toJson(app)).toMatchSnapshot()
        });
        it('rendered Products', () => {
            expect(app.find('Products')).toHaveLength(0)
        });
        it('not render loader', () => {
            expect(app.find('AppImg')).toHaveLength(0);
        });
        it('not render error', () => {
            expect(app.find('p')).toHaveLength(0)
        })
    })
});