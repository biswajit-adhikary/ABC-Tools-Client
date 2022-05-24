import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import Loading from '../../Components/Loading/Loading';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hooks/useToken';

const Register = () => {
    // Main hook(Registration) and send email verification
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // Get Token
    const [token] = useToken(emailUser);

    // Profile update
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // Registration function
    const handleEmailRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    // Important Variable
    let errorMessage;
    const navigate = useNavigate();

    // Successfully Register
    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [navigate, token]);

    // Loading & Updating
    if (emailLoading || updating) {
        return <Loading></Loading>;
    }

    // Error Message
    if (emailError || updateError) {
        errorMessage = <p className='text-danger mt-3'>Error: {emailError?.message}</p>;
    }

    return (
        <div className='main-form-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="main-form bg-light">
                            <div className="section-heading text-center mb-5">
                                <h3>Register</h3>
                                <p>Please Register to continue using our website</p>
                            </div>
                            <form onSubmit={handleEmailRegister}>
                                <Form.Control name="name" type="text" placeholder="Full Name" className='mb-3' required />
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <Form.Control name="password" type="password" placeholder="Password" className='mb-3' required />
                                <div className="form-mata d-flex justify-content-between">
                                    <p>Already have an account? <Link to="/login">Login</Link></p>
                                </div>
                                <Button className='w-100 theme-btn' type="submit" variant="danger">
                                    Register
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
        </div>
    );
};

export default Register;