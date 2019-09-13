import React, {useEffect} from 'react';
import Product from './product/product';
import queryString from 'query-string';
import { InputGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
const Ul = styled.ul`
    margin: 0;
    padding:0;
`
const Products = ({ match, ...props }) => {

    useEffect(() => {
            console.log('lol')
    }, [])

    const searched = queryString.parse(props.history.location.search);
    let products;

    const category = props.history.location.pathname.replace(/\//g, '').replace(/_/g, ' ');
    const filteredProducts = props.products.filter(item => item.bsr_category.search(category) !== -1);

    if (filteredProducts.length !== 0) {

        if (searched.search) {

            console.log(searched.search);
            let searchedProducts = filteredProducts.filter(item => item.name.toLowerCase().search(searched.search.toLowerCase().replace(/_/g, '')) !== -1);
            products = searchedProducts.map((product, index) => <Product key={index} index={index} product={product} />);

        }

        else products = filteredProducts.map((product, index) => <Product key={index} index={index} product={product} />);

    } else if (category === 'All Products') {

        if (searched.search) {

            console.log(searched.search);
            let searchedProducts = props.products.filter(item => item.name.toLowerCase().search(searched.search.toLowerCase().replace(/_/g, '')) !== -1);
            products = searchedProducts.map((product, index) => <Product key={index} index={index} product={product} />);

        }
        else products = props.products.map((product, index) => <Product key={index} index={index} product={product} />);
    }
    const inputHandler = (e) => {
        if(e.target.value){
            props.history.push(`${props.history.location.pathname}?search=${e.target.value}`);
        } 
       else{
        props.history.push(`${props.history.location.pathname}`);
       }
        
    }
    return <Div className='col-md-9'>
        <InputGroup className="mb-12"
        style={{
            margin: '2vmin 0' ,
            padding: 0
        }}>
            <FormControl onChange={inputHandler}/>
        </InputGroup>
        <Ul className='col-md-12'>
            {products}
        </Ul>
    </Div>
}
export default Products;