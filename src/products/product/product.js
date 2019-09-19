import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { ProductImg, ProductLi, ProductSpan} from "../../styled/styledComponents";

const Product = (props) => {

    return <Container style = {{margin:0, padding:0}}>
        <Row>
            <Col>
                <ProductLi key={props.index}>
                    <Col md={4}><ProductImg src={props.product.img} alt="product" /></Col>
                    <Col md={2} > <ProductSpan >{props.product.price} GBP</ProductSpan></Col>
                    <Col md={6}> <ProductSpan>{props.product.name}</ProductSpan></Col>
                </ProductLi>
            </Col>
        </Row>
    </Container>
}
export default Product;