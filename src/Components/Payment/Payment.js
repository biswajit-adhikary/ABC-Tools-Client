import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../Loading/Loading';

const stripePromise = loadStripe('pk_test_51L3bZGLoyC8ksBdYuhRk7bPNFEBBroi7Lp8xERyRqdqgZDkKdIWoaDDxBw8n9kZ3qebSeAB6VXonFYpC32aBmjyf00ORE2Ub97');

const Payment = () => {
    const { id } = useParams();
    const url = `https://quiet-shelf-73274.herokuapp.com/orders/${id}`;
    const { data: orderPay, isLoading } = useQuery(['orderPay', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>Hello, {orderPay.name}</h2>
            <Card>
                <Card.Header>
                    <h4>Pay for tool: {orderPay.productName}</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Quantity: {orderPay.orderQuantity} piece</Card.Title>
                    <Card.Title>Amount: ${orderPay.price}</Card.Title>
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Body>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderPay={orderPay} />
                    </Elements>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Payment;