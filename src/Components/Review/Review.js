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
                <p className='mb-1'><strong>Review: {review.start} Star</strong></p>
                <h4>Name: {review.name}</h4>
            </div>
        </Col>
    );
};

export default Review;