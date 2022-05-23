import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../Images/video.jpg';
import './About.css';

const About = () => {
    return (
        <section className='about-area bg-white'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-image">
                            <img src={about} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-text">
                            <h3>More About Us</h3>
                            <h4>A company to change the world</h4>
                            <p>At ABC Tools, the health and safety of our employees, customers, suppliers and the communities where we do business is our highest priority.</p>
                            <Link className='btn theme-btn' to="/">Learn More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;