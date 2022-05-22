import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import logo from '../../Images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home
                        </NavLink>
                        {
                            user
                                ?
                                <Button onClick={handleSignOut} className="btn theme-btn-two">Sign Out</Button>
                                :
                                <NavLink
                                    className="btn theme-btn" to="/login">Log in
                                </NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;