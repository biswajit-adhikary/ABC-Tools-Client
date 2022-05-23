import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import partnerOne from '../../Images/client_1.png';
import partnerTwo from '../../Images/client_2.png';
import partnerThree from '../../Images/client_3.png';
import partnerFour from '../../Images/client_4.png';
import './Partners.css';

const Partners = () => {
    return (
        <div className='partners-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-heading text-center mb-5">
                            <h3>Our Partners</h3>
                            <p>Our happy and successful partners</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6}>
                        <div className="single-partner">
                            <img src={partnerOne} alt="" />
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-partner">
                            <img src={partnerTwo} alt="" />
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-partner">
                            <img src={partnerThree} alt="" />
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="single-partner">
                            <img src={partnerFour} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;