import React from 'react'
import logo from '../../assets/images/medflit-logo.png';
import logoWhite from '../../assets/images/logo-white.png';
import { Navbar, NavDropdown, NavLink, NavbarBrand, Nav, Button } from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="primary-bg">
            <Navbar.Brand href="#home">
                <img src={logoWhite} className="" width="80" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ml-auto navvy">
                    <Nav.Link href="/" className="nl">Home</Nav.Link>
                    <Nav.Link href="/conditions" className="nl">Conditions</Nav.Link>
                    <NavDropdown title="Solutions" className="nl" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Patient</NavDropdown.Item>
                        <NavDropdown.Item href="#">Provider</NavDropdown.Item>
                        <NavDropdown.Item href="#">Pharmacy</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Partners</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contact" className="nl" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">WhatsApp</NavDropdown.Item>
                        <NavDropdown.Item href="#">Email Us</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;