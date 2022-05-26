import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const UpdateStatus = ({ order, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleUpdate = () => {
        const url = `https://quiet-shelf-73274.herokuapp.com/dashboard/order/${order._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setShow(false);
                toast.success('Statue Updated Successfully!');
                refetch();
            })
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" size="sm" onClick={handleShow}>
                Update Status
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you want to Update: {order.productName}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>After update, it will Shipped!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateStatus;