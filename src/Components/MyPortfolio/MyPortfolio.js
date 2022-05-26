import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './MyPortfolio.css';

const MyPortfolio = () => {
    return (
        <div className="portfolio-section">
            <Container>
                <Row>
                    <div className="personal-information bg-light p-4">
                        <h2>Personal Information:</h2>
                        <h3>Name: Biswajit Adhikary</h3>
                        <h3>Email: biswaadhikary.bd@gmail.com</h3>
                        <h3>Education: MBS in Accounting, NU (Completed)</h3>
                        <hr />
                        <h2>Technologies or skills:</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>React Bootstrap</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                        <hr />
                        <h2>Latest Projects:</h2>
                        <ul>
                            <li><a href="https://book-inventory-dbbc9.web.app/" target="blank">Project One (BookInventory)</a></li>
                            <li><a href="https://sports-photographer-5c512.web.app/" target="blank">Project Two (SpotoGrapher)</a></li>
                            <li><a href="https://lambent-begonia-b321cf.netlify.app/" target="blank">Project Three (HayMan)</a></li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default MyPortfolio;