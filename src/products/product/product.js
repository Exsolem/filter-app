import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import { ProductImg, ProductLi, ProductPrice, ProductName } from "../../styled/styledComponents";

const Product = ({ product: { img, price, name } }) => {

    return <Container style={{margin: 0, padding: 0}}>
        <Row >
            <Col  xs sm md={12} lg>
                <ProductLi key={uuid()} className='flex-column flex-sm-row flex-md-row'>
                    <Col xs={12} sm={5} md={5} ><ProductImg src={img} alt="product"/></Col>
                    <Col xs={12}  sm={2} md={2}> <ProductPrice>{price} GBP</ProductPrice></Col>
                    <Col  xs={12}  sm={5} md={5}> <ProductName>{name}</ProductName></Col>
                </ProductLi>
            </Col>
        </Row>
    </Container>
};
Product.propsTypes = {
    img: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
};
export default Product;