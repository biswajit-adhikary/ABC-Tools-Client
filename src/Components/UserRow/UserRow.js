import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;


    const makeAdmin = () => {
        fetch(`https://quiet-shelf-73274.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have no access to make admin!')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin!')
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <Button onClick={makeAdmin} variant="primary">Make Admin</Button>}
            </td>
            <td>
                <Button variant="danger">Delete</Button>
            </td>
        </tr>
    );
};

export default UserRow;