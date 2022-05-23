import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviewData', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className='reviews-area bg-light'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-heading text-center mb-5">
                            <h3>Reviews</h3>
                            <p>What our clients are saying</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Reviews;