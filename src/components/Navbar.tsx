import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#header">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#certificates">Certificates</Nav.Link>
                    <Nav.Link href="#languages">Languages</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
