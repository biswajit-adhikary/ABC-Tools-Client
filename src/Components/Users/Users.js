import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from '../UserRow/UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://quiet-shelf-73274.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h2>All Users List:</h2>
            <div className="table-div">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Email Address</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Users;