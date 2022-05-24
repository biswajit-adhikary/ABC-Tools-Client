import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const ForgotPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPassword = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            event.target.reset();
            // toast('Email Send!');
        }
        else {
            // toast('Please enter email address!');
        }
    }
    return (
        <div className='main-form-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="main-form bg-light">
                            <div className="section-heading text-center mb-5">
                                <h3>Forgot Password?</h3>
                                <p>Please put your registered email address and click Reset Password</p>
                            </div>
                            <form onSubmit={resetPassword}>
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <div className="form-mata d-flex justify-content-between">
                                    <p>Back to login: <Link to="/login">Login</Link></p>
                                </div>
                                <Button className='w-100 theme-btn' variant="danger" type="submit">
                                    Reset Password
                                </Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgotPassword;