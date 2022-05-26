import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import './MyProfile.css';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { data: singleUser, isLoading, refetch } = useQuery('singleUser', () => fetch(`https://quiet-shelf-73274.herokuapp.com/user/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    // Create Profile
    const handelProfile = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;
        const data = { name, email, education, location, phone, linkedIn };

        // Send data to the server
        const url = `https://quiet-shelf-73274.herokuapp.com/user/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                event.target.reset();
                refetch();
                toast.success('Profile Updated Successfully!')
            })
    };
    return (
        <div>
            <h2>My profile:</h2>
            <div className="profile-details bg-light p-4 mb-3">
                <h3>Name: {user.displayName}</h3>
                <h3>Email: {user.email}</h3>
                {singleUser.education && <h3>Education: {singleUser.education}</h3>}
                {singleUser.location && <h3>Location: {singleUser.location}</h3>}
                {singleUser.phone && <h3>Phone: {singleUser.phone}</h3>}
                {singleUser.linkedIn && <h3>LinkedIn: {singleUser.linkedIn}</h3>}
            </div>
            <div className="update-profile bg-light p-4">
                <h3 className='text-center mb-3'>Update Profile</h3>
                <form onSubmit={handelProfile}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input name="name" id="name" className='form-control mb-2' placeholder='Full Name' type="text" value={user.displayName} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input name="email" id="email" className='form-control mb-2' placeholder='Email Address' type="email" value={user.email} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="education">Education</label>
                        <input name="education" id="education" className='form-control mb-2' placeholder='Education' type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input name="location" id="location" className='form-control mb-2' placeholder='Location' type="text" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input name="phone" id="phone" className='form-control mb-2' placeholder='Phone Number' type="tel" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedIn">LinkedIn Profile</label>
                        <input name="linkedIn" id="linkedIn" className='form-control mb-2' placeholder='LinkedIn URL' type="text" required />
                    </div>
                    <input type="submit" className='form-control btn-success' value="Update Profile" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;