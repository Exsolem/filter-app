import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap'

const Span = styled.span`
    font-size: 2.5vmin;   
    color: black;
`
const Li = styled.li`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 0.5vmin 0.1vmin black;
    min-heigth: 30vh;
    padding: 1vmin  0;
    margin-bottom: 1vmin;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 2vmin;
`
const Img = styled.img`
    max-width: 25vmin;  
`
const Product = (props) => {

    return <Container style = {{margin:0, padding:0}}>
        <Row>
            <Col>
                <Li key={props.index}>
                    <Col md={4}><Img src={props.product.img} alt="product" /></Col>
                    <Col md={2} > <Span >{props.product.price} GBP</Span></Col>
                    <Col md={6}> <Span>{props.product.name}</Span></Col>
                </Li>
            </Col>
        </Row>
    </Container>
}
export default Product;