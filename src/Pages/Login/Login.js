import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import Loading from '../../Components/Loading/Loading';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hooks/useToken';
import './Login.css';



const Login = () => {
    // Main hook(Email Login)
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    // Get Token
    const [token] = useToken(emailUser);

    // Login function
    const handleEmailLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }

    // Important Variable
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    let from = location.state?.from?.pathname || "/";

    // Successfully Register
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);

    // Loading
    if (emailLoading) {
        return <Loading></Loading>
    }

    // Error Message
    if (emailError) {
        errorMessage = <p className='text-danger mt-3'>Error: {emailError?.message}</p>
    }

    return (
        <div className='main-form-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="main-form bg-light">
                            <div className="section-heading text-center mb-5">
                                <h3>Log In</h3>
                                <p>Please login to continue using our website</p>
                            </div>
                            <form onSubmit={handleEmailLogin}>
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <Form.Control name="password" type="password" placeholder="Password" className='mb-3' required />
                                <div className="form-mata d-flex justify-content-between">
                                    <p><Link to="/forgot-password">Forgot Password?</Link></p>
                                    <p>New User? <Link to="/register">Create Account</Link></p>
                                </div>
                                <Button className='w-100 theme-btn' type="submit" variant="danger">
                                    Login
                                </Button>
                                {errorMessage}
                                <div className="separator my-2">
                                    <div></div>
                                    <span>Or</span>
                                    <div></div>
                                </div>
                                <GoogleLogin></GoogleLogin>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Login;