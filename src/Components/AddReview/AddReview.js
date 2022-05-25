import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    // Create Review
    const handelReview = event => {
        event.preventDefault();
        const name = user.displayName;
        const quantity = event.target.quantity.value;
        const reviewText = event.target.reviewText.value;
        const data = { name, quantity, reviewText };

        // Send data to the server
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                event.target.reset();
                toast.success('Review Added Successfully!')
            })
    };
    return (
        <div className='add-review-area'>
            <Col>
                <div className="">
                    <div className="">
                        <h3 className='py-2'>Add a Review</h3>
                    </div>
                    <form onSubmit={handelReview}>
                        <Form.Control className='mb-3' placeholder='Review start between 1 - 5' type="number" id="quantity" name="quantity" min="1" max="5" />
                        <Form.Control name="reviewText" as="textarea" placeholder="Review Text" className='mb-3' required />
                        <Button className='w-100 theme-btn' type="submit" variant="danger">
                            Add Review
                        </Button>
                    </form>
                </div>
            </Col>
        </div>
    );
};

export default AddReview;