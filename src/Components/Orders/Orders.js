import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DeleteAdminOrder from '../Modal/DeleteAdminOrder';
import UpdateStatus from '../Modal/UpdateStatus';

const Orders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders`, {
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
        <div>
            <h2>Manage All Orders:</h2>
            <div className="table-div">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Product Name</th>
                            <th>Person</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>{order.name}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {!order.paid && <span>Unpaid</span>}
                                    {order.paid && <span>Paid</span>}
                                </td>
                                <td>{order.status}</td>
                                <td>{order.paid && <UpdateStatus
                                    order={order}
                                    refetch={refetch}
                                ></UpdateStatus>}
                                    {!order.paid && <DeleteAdminOrder
                                        order={order}
                                        refetch={refetch}
                                    ></DeleteAdminOrder>}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Orders;