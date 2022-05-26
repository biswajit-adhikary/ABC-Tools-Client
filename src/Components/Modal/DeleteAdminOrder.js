import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const DeleteAdminOrder = ({ order, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        const url = `https://quiet-shelf-73274.herokuapp.com/orders/${order._id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setShow(false);
                toast.success('Successfully Deleted!');
                refetch();
            })
    }
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="danger" size="sm" onClick={handleShow}>
                Cancel
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you want to Delete: {order.productName}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>After delete, it will be delete from database, so be careful.</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteAdminOrder;