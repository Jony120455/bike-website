
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navber.css'

const NavBar = () => {
        const {user,logOut} = useAuth()
    return (
            <>
            <Navbar bg="primary" variant="light">
                    <Container>
                    <Navbar.Brand style={{fontSize:'2rem'}} className="m-0 fs-2 text-light fw-bold"  as={Link} to="/home">RIDE TO VICTORY</Navbar.Brand>
                    <Nav className="ms-auto text-light text-center">
                    <Nav.Link  className="m-0 fs-2 text-light fw-bold" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="m-0 fs-2 text-light fw-bold" as={Link} to="/explore">More Product</Nav.Link>
                    {
                        user?.email && <Nav.Link className="m-0 text-light fs-2 fw-bold" as={Link} to="/dash">DashB</Nav.Link>
                    }
                    {
                            user?.email ? <Nav.Link className="m-0 text-light fs-2 fw-bold" onClick={logOut}>Log out</Nav.Link> : <Nav.Link className="m-0 fs-2 fw-bold" as={Link} to="/login">Login</Nav.Link>
                    }
                     <img className="logo" src="https://www.kindpng.com/picc/m/347-3471382_ktm-logo-png-transparent-png.png" alt="" />
                    </Nav>
                    </Container>
                    
            </Navbar>
            </>
    );
};

export default NavBar;