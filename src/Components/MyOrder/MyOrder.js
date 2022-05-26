import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import DeleteMyOrder from '../Modal/DeleteMyOrders';
import './MyOrder.css';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () =>
        fetch(`https://quiet-shelf-73274.herokuapp.com/my-orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='order-area'>
            <h2 className='py-2'>My Order List:</h2>
            <div className="table-div">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th>Order Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <tr
                                key={myOrder._id}>
                                <td>{index + 1}</td>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.orderQuantity}</td>
                                <td>${myOrder.price}</td>
                                <td>
                                    {(myOrder.price && !myOrder.paid) && <Link to={`/dashboard/payment/${myOrder._id}`}><Button size="sm">Pay Now</Button></Link>}
                                    {(myOrder.price && myOrder.paid) && <span className='text-success'>Paid (Transaction ID: {myOrder.transactionId})</span>}
                                </td>
                                <td>
                                    {!myOrder.paid && <DeleteMyOrder
                                        myOrder={myOrder}
                                        refetch={refetch}
                                    ></DeleteMyOrder>}
                                    {myOrder.paid && <span className='text-success'>Order Placed</span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrder;