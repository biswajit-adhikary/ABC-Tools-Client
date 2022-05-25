import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import './Dashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <section className='dashboard-area'>
            <Container>
                <Row>
                    <h2 className='mb-4'>Welcome, Your Dashboard</h2>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="dashboard-header">
                            <Navbar bg="light" expand="lg" className='p-0'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Link className='dash-link' to="/dashboard">My Profile</Link>
                                        {!admin && <Link className='dash-link' to="/dashboard/my-orders">My Order</Link>}
                                        {!admin && <Link className='dash-link' to="/dashboard/add-review">Add A Review</Link>}
                                        {admin && <Link className='dash-link' to="/dashboard/users">All Users</Link>}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="dashboard-content">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;