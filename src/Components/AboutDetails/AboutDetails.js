import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../Images/video.jpg';
import './AboutDetails.css';

const AboutDetails = () => {
    return (
        <section className='about-details'>
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
                            <p>Last eight years our tool leads the Industry. We don't compromise the quality for our products. That's why we are the leader in the market.</p>
                            <p>We made the tools specially for construction companies and they are very happy and 100% satisfied to use it.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutDetails;