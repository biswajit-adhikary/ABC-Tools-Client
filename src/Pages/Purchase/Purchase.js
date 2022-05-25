import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Purchase.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';

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

    const { name, image, description, minimumOrderQuantity, availableQuantity, pricePerUnit, inputQuantity } = tool;

    // Handle Quantity Change
    const handelQuantityChange = event => {
        const { inputQuantity, ...rest } = tool;
        const newInputQuantity = event.target.value;
        const newTool = { inputQuantity: newInputQuantity, ...rest };
        setTool(newTool);
    }

    // Create Order
    const handelOrder = event => {
        event.preventDefault();
        const orderQuantity = parseInt(event.target.orderQuantity.value);
        const productId = tool._id;
        const productName = tool.name;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const price = orderQuantity * tool.pricePerUnit;
        const data = { name, email, productId, productName, orderQuantity, price, address, phone };

        // Send data to the server
        const url = `http://localhost:5000/order`;
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
                toast.success('Order Placed Successfully!')
            })
    };

    return (
        <section className='tool-details-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="tool-details-image text-center">
                            <img src={image} alt="" />
                        </div>
                        <div className="tool-details-text text-center">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <h5>Available Quantity: {availableQuantity}</h5>
                            <h5>Minimum Order Quantity: {minimumOrderQuantity}</h5>
                            <h5>Price Per Unit : ${pricePerUnit}</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="order-form bg-light p-4">
                            <h3 className='text-center'>Order Now</h3>
                            <form onSubmit={handelOrder}>
                                <div className="form-group">
                                    <label htmlFor="order">Order Quantity</label>
                                    <input name="orderQuantity" id="order" className='form-control mb-2' placeholder='Order Quantity' type="number" value={inputQuantity || ''} onChange={handelQuantityChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input name="name" id="name" className='form-control mb-2' placeholder='Full Name' type="text" value={user.displayName} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input name="email" id="email" className='form-control mb-2' placeholder='Email Address' type="text" value={user.email} readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input name="address" id="address" className='form-control mb-2' placeholder='Address' type="text" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input name="phone" id="phone" className='form-control mb-2' placeholder='Phone Number' type="tel" required />
                                </div>
                                {inputQuantity < minimumOrderQuantity || inputQuantity > availableQuantity ? <input type="submit" className='form-control' value="Order Now" disabled /> : <input type="submit" className='form-control btn-success' value="Order Now" />}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Purchase;