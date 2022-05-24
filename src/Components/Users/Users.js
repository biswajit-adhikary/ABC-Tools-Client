import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Users List:</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr
                            key={user._id}>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Users;