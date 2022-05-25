import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ tool }) => {
    const { _id, name, image, description, minimumOrderQuantity, availableQuantity, pricePerUnit } = tool;
    const navigate = useNavigate();
    const navigateToToolDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <Col lg={4}>
            <div className="single-tool p-4">
                <div className="tool-image">
                    <img src={image} alt="" />
                </div>
                <div className="tool-text p-2">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h5>Minimum Order Quantity: {minimumOrderQuantity}</h5>
                    <h5>Available Quantity: {availableQuantity}</h5>
                    <h5>Price Per Unit : ${pricePerUnit}</h5>
                    <Button variant="danger" className='theme-btn mt-2' onClick={() => navigateToToolDetail(_id)}>Place order</Button>
                </div>
            </div>
        </Col>
    );
};

export default Tool;