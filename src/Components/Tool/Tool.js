import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './Tool.css';

const Tool = ({ tool }) => {
    return (
        <Col lg={4}>
            <div className="single-tool p-4">
                <div className="tool-image">
                    <img src={tool.image} alt="" />
                </div>
                <div className="tool-text p-2">
                    <h3>{tool.name}</h3>
                    <p>{tool.description}</p>
                    <h5>Available Quantity: {tool.availableQuantity}</h5>
                    <h5>Minimum Order Quantity: {tool.minimumOrderQuantity}</h5>
                    <h5>Price Per Unit : ${tool.pricePerUnit}</h5>
                    <Button variant="danger" className='theme-btn mt-2'>Place order</Button>
                </div>
            </div>
        </Col>
    );
};

export default Tool;