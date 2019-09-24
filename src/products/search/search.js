import React from 'react'
import {FormControl, InputGroup} from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'


export const Search = ({search, getSearchValue, getSearchedProducts, history:{push, location:{pathname}}}) => {
    const inputHandler = (e) => {
        getSearchValue(e.target.value);
        getSearchedProducts();
        if (e.target.value) {
            push(`${pathname}?search=${e.target.value}`);
        } else {
            push(`${pathname}`)
        }
    };

    return <InputGroup className="mb-12"
                       style={{
                           margin: '2vmin 0',
                           padding: 0
                       }}>
        <FormControl onChange={inputHandler} value={search}/>
    </InputGroup>
};
Search.propTypes = {
    search: PropTypes.string,
    pathname: PropTypes.string,
    getSearchValue: PropTypes.func,
    getSearchedProducts: PropTypes.func,
    push: PropTypes.func
};
export default withRouter(Search);
