import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css';
import quotation from '../../Images/quotation.png';

const Review = ({ review }) => {
    return (
        <Col lg={4}>
            <div className='single-review text-center'>
                <img src={quotation} alt="" />
                <p>{review.text}</p>
                <p className='mb-1'>Rating: <strong>{review.start} out of 5</strong></p>
                <h4>{review.name}</h4>
            </div>
        </Col>
    );
};

export default Review;