import React from 'react'
import {shallow} from 'enzyme'

import {Search} from './search'


describe('Search', () => {
    const mockGetSearchValue = jest.fn();
    const mockGetSearchedProducts = jest.fn();
    const mockPush = jest.fn();
    const props = {
        search: 'searchValue',
        getSearchValue: mockGetSearchValue,
        getSearchedProducts: mockGetSearchedProducts,
        history: {
            push: mockPush,
            location: {
                pathname: 'pathname'
            }
        },
    };

    describe('Search initial', () => {
        const search = shallow(<Search {...props}/>);
        it('renders properly', () => {
            expect(search.debug()).toMatchSnapshot()
        });
        it('input is rendered', () => {
            expect(search.find('FormControl')).toHaveLength(1);
        });
        it('FormControl value equal to search from props', () => {
            expect(search.find('FormControl').prop('value')).toEqual(props.search);
        })
    });
    describe('when typing into input', () => {
        const search = shallow(<Search {...props}/>);

        search.find('FormControl').simulate('change', {
            target: {
                value: 'another Value',
            },
        });
        it('on input change getSearchedProducts called', () => {
            expect(mockGetSearchedProducts).toHaveBeenCalledTimes(1)
        });
        it('on input change getSearchedProducts called', () => {
            expect(mockGetSearchedProducts).toHaveBeenCalledTimes(1)
        });
        it('on input change getSearchValue called', () => {
            expect(mockGetSearchValue).toHaveBeenCalledTimes(1)
        });
        it('on input change push called', () => {
            expect(mockPush).toHaveBeenCalledTimes(1)
        })
    })
});