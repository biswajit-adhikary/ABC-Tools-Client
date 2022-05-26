import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AddProduct = () => {
    // Create Product
    const handelProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const minimumOrderQuantity = parseInt(event.target.minimumOrderQuantity.value);
        const availableQuantity = parseInt(event.target.availableQuantity.value);
        const pricePerUnit = parseInt(event.target.pricePerUnit.value);
        const inputQuantity = parseInt(event.target.minimumOrderQuantity.value);
        const data = { name, image, description, minimumOrderQuantity, availableQuantity, pricePerUnit, inputQuantity };

        // Send data to the server
        const url = `http://localhost:5000/tools`;
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
                toast.success('Tool Added Successfully!')
            })
    };
    return (
        <div className='add-review-area'>
            <Col>
                <div className="">
                    <div className="">
                        <h3 className='py-2'>Add Tool</h3>
                    </div>
                    <form onSubmit={handelProduct}>
                        <Form.Control className='mb-3' placeholder='Tool Name' type="text" id="name" name="name" required />
                        <Form.Control name="description" as="textarea" placeholder="Description" className='mb-3' required />
                        <Form.Control className='mb-3' placeholder='Minimum Order Quantity' type="text" id="minimumOrderQuantity" name="minimumOrderQuantity" required />
                        <Form.Control className='mb-3' placeholder='Available Quantity' type="text" id="availableQuantity" name="availableQuantity" required />
                        <Form.Control className='mb-3' placeholder='Price Per Unit' type="text" id="pricePerUnit" name="pricePerUnit" required />
                        <Form.Control className='mb-3' placeholder='Image URL' type="text" id="image" name="image" required />
                        <Button className='w-100 theme-btn' type="submit" variant="danger">
                            Add Tool
                        </Button>
                    </form>
                </div>
            </Col>
        </div>
    );
};

export default AddProduct;