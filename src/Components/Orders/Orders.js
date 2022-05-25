import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>Manage All Orders:</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Product Name</th>
                        <th>Person</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr
                            key={order._id}>
                            <td>1</td>
                            <td>{order.productName}</td>
                            <td>{order.name}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.price}</td>
                            <td><Button>Action</Button></td>
                            <td><Button>Action</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;