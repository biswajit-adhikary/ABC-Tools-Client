import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" className='header-nav py-3'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/blog">Blog
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact
                            </NavLink>
                            {
                                user &&
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/dashboard">Dashboard
                                </NavLink>

                            }
                            {
                                user
                                    ?
                                    <Button onClick={handleSignOut} variant="danger" className='theme-btn'>Sign Out</Button>
                                    :
                                    <NavLink
                                        className="btn theme-btn" to="/login">Log in
                                    </NavLink>
                            }
                            {
                                user
                                    ?
                                    <NavDropdown title="U" id="basic-nav-dropdown">
                                        <Link className='dropdown-item' to="/dashboard/my-profile">My Profile</Link>
                                    </NavDropdown>
                                    :
                                    ''
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;