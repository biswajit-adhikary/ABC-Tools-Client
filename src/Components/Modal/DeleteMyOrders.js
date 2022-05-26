import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';

const DeleteMyOrder = ({ myOrder, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        const url = `https://quiet-shelf-73274.herokuapp.com/orders/${myOrder._id}`;
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
                Cancel Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you want to Cancel: {myOrder.productName}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>After delete, it will be delete from database, so be careful.</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Cancel Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteMyOrder;