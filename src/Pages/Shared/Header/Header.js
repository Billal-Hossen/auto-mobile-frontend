import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut} = useAuth();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-end">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#services">Services</Nav.Link>
                      
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                       

                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {
                            user?.email? <button className='btn btn-primary' onClick={logOut}>Logout</button>
                            :  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    <Navbar.Text>
                        {user?.email&& user?.displayName}
                    </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;