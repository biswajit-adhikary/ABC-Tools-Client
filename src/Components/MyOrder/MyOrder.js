import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './MyOrder.css';

const MyOrder = () => {
    const [myOrders, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/my-orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => setMyOrder(data))
        }
    }, [user, navigate])

    return (
        <div className='order-area'>
            <h2 className='py-2'>My Order List:</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>S.N.</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(myOrder => <tr
                            key={myOrder._id}>
                            <td>1</td>
                            <td>{myOrder.productName}</td>
                            <td>{myOrder.orderQuantity}</td>
                            <td>{myOrder.price}</td>
                            <td><Button>Action</Button></td>
                            <td><Button>Action</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;