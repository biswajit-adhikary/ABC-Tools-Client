import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../Images/logo-w.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="single-footer">
                                <img className='mb-4' src={footerLogo} alt="" />
                                <p className='text-white'>Last eight years our tool leads the Industry. We don't compromise the quality for our products. That's why we are the leader in the market.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="single-footer">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/blog">Our Blog</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="single-footer mb-0">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><Link to="/">27 Nawabpur RD, Dhaka, Bangladesh.</Link></li>
                                    <li><Link to="/">+0122 55 33 33</Link></li>
                                    <li><Link to="/">contact@example.com</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <p className='text-center m-0 py-3 text-white'>&copy; 2022 ABC Tools, All Rights Reserved.</p>
                </Container>
            </div>
        </footer >
    );
};

export default Footer;