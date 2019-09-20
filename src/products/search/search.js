import React from 'react'
import {FormControl, InputGroup} from "react-bootstrap";
import {withRouter} from 'react-router-dom'


const Search = ({ ...props}) => {
    const inputHandler = (e) => {
        const input = e.target.value
        props.getSearchValue(input);
        console.log(e.target.value);
        props.getSearchedProducts();

        if (e.target.value) {
            props.history.push(`${props.history.location.pathname}?search=${e.target.value} `);
        } else {
            props.history.push(`${props.history.location.pathname}`)
        }
    };

    return <InputGroup className="mb-12"
                       style={{
                           margin: '2vmin 0',
                           padding: 0
                       }}>
        <FormControl onChange={inputHandler} value={props.search}/>
    </InputGroup>
};

export default withRouter(Search)