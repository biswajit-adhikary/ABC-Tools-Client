import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Summary.css';
import tools from '../../Images/screwdriver-wrench-solid.png';
import clients from '../../Images/people-group-solid.png';
import profit from '../../Images/hand-holding-dollar-solid.png';
import like from '../../Images/thumbs-up-solid.png';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (
        <section className='summary-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-heading text-center mb-5">
                            <h3>Business Summary</h3>
                            <p>See the short summary of our business</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className='single-summary text-center bg-light'>
                            <img src={tools} alt="" />
                            <h2>65+</h2>
                            <h3>Types of tools</h3>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='single-summary text-center bg-light'>
                            <img src={clients} alt="" />
                            <h2>375</h2>
                            <h3>Fixed Workers</h3>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='single-summary text-center bg-light'>
                            <img src={profit} alt="" />
                            <h2>$95000</h2>
                            <h3>Yearly profit</h3>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='single-summary text-center bg-light'>
                            <img src={like} alt="" />
                            <h2>2235+</h2>
                            <h3>Happy Customer</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="summary-contact text-center mt-5">
                            <h2>Have any other question about us?</h2>
                            <p>Fell free to contact us any time</p>
                            <Link className='btn theme-btn' to="/">Contact Us</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Summary;