import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './ContactForm.css';

const ContactForm = () => {
    const handelContact = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        if (name && email && message) {
            event.target.reset();
            toast.success('Thank you, We will back to you soon!')
        }
        else {
            toast.error('Please enter email address!');
        }
    }
    return (
        <section className='main-form-area bg-white'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="main-form bg-light">
                            <div className="section-heading text-center mb-5">
                                <h3>Contact Us</h3>
                                <p>Feel free to contact us and ask any question</p>
                            </div>
                            <form onSubmit={handelContact}>
                                <Form.Control name="name" type="text" placeholder="Full Name" className='mb-3' required />
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <Form.Control name="message" as="textarea" placeholder="Message" className='mb-3' required />
                                <Button className='w-100 theme-btn' type="submit" variant="danger">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactForm;