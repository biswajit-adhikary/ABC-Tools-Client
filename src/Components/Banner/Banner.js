import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import banner from "../../Images/banner.jpg";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='banner-area d-flex align-items-center' style={{ backgroundImage: `url(${banner})` }}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="banner-text">
                            <h3 className='text-white'>We make quality tools</h3>
                            <h4 className='text-white my-4'>Last eight years our tool leads the Industry. We don't compromise the quality for our products. That's why we are the leader in the market.</h4>
                            <Link className='btn theme-btn' to="/contact">Contact Us</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;