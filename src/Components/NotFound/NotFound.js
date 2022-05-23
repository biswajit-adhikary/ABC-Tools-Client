import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFound from '../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className='not-found-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <img src={notFound} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;