import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    // Add Review
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const url = `https://quiet-shelf-73274.herokuapp.com/reviews`;
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control' placeholder='Name' type="text" {...register("name")} value={user.displayName} readOnly hidden />
                        <input className='form-control mt-2' placeholder='Review star between 1 - 5' type="number" {...register("quantity")} required min="1" max="5" />
                        <textarea className='form-control mt-2' placeholder='Review Text' {...register("reviewText")} required />
                        <Button className='mt-2' type='submit' variant="success">Add Review</Button>
                    </form>
                </div>
            </Col>
        </div>
    );
};

export default AddReview;