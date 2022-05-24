import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Purchase.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Purchase = () => {
    const { toolId } = useParams();
    const [user] = useAuthState(auth);

    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [toolId])

    // const handelQuantityChange = event => {
    //     console.log(event.target.value);
    //     const { minimumOrderQuantity, ...rest } = tool;
    //     const newMinimumOrderQuantity = event.target.value;
    //     const newTool = { minimumOrderQuantity: newMinimumOrderQuantity, ...rest };
    //     setTool(newTool);
    // }

    return (
        <section className='tool-details-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="tool-details-image text-center">
                            <img src={tool.image} alt="" />
                        </div>
                        <div className="tool-details-text text-center">
                            <h2>{tool.name}</h2>
                            <p>{tool.description}</p>
                            <h5>Available Quantity: {tool.availableQuantity}</h5>
                            <h5>Minimum Order Quantity: {tool.minimumOrderQuantity}</h5>
                            <h5>Price Per Unit : ${tool.pricePerUnit}</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="order-form">
                            <form>
                                <input className='form-control mb-2' type="text" name="name" value={user.displayName} readOnly />
                                <input className='form-control mb-2' type="email" name="email" value={user.email} readOnly />
                                <input className='form-control btn theme-btn' type="submit" value="Order Now" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Purchase;