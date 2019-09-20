import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {ProductImg, ProductLi, ProductSpan} from "../../styled/styledComponents";
import PropTypes from 'prop-types'

const Product = ({index, product: {img, price, name}}) => {

    return <Container style={{margin: 0, padding: 0}}>
        <Row>
            <Col>
                <ProductLi key={index}>
                    <Col md={4}><ProductImg src={img} alt="product"/></Col>
                    <Col md={2}> <ProductSpan>{price} GBP</ProductSpan></Col>
                    <Col md={6}> <ProductSpan>{name}</ProductSpan></Col>
                </ProductLi>
            </Col>
        </Row>
    </Container>
};
Product.propsTypes = {
    index: PropTypes.number,
    img: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
};
export default Product;