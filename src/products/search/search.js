import React from 'react'
import {FormControl, InputGroup} from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'


const Search = ({getSearchValue, getSearchedProducts, history:{push, location:{pathname}}}) => {
    const inputHandler = (e) => {
        const input = e.target.value.toLowerCase();
        getSearchValue(input);
        getSearchedProducts();

        if (e.target.value) {
            push(`${pathname}?search=${e.target.value} `);
        } else {
            push(`${pathname}`)
        }
    };

    return <InputGroup className="mb-12"
                       style={{
                           margin: '2vmin 0',
                           padding: 0
                       }}>
        <FormControl onInput={inputHandler} />
    </InputGroup>
};
Search.propTypes = {
    pathname: PropTypes.string,
    getSearchValue: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    push: PropTypes.func
};
export default withRouter(Search);