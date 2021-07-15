import React from 'react'
import logoWhite from '../../assets/images/logo-white.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="primary-bg">
            <Navbar.Brand>
                <Link to="/">
                    <img src={logoWhite} className="" alt="logo" />
                </Link>
            </Navbar.Brand>

            <NavDropdown title="Call us" className="nl whatsapp" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item className="ni"> */}
                    <Link 
                        className="nl das" id="no"
                        to={{ pathname: "https://api.whatsapp.com/send?phone=+=2347055209676&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Medflit." }} 
                        target="_blank"
                    >
                    <FontAwesomeIcon icon={ faWhatsapp } />  +234 705 520 9676
                    </Link>
                {/* </NavDropdown.Item> */}
            </NavDropdown>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ml-auto">
                    <Nav.Link className="nl"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link className="nl"><Link to="/about">About</Link></Nav.Link>
                    <NavDropdown title="Solutions" className="nl_" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="ni">
                            <Link to="/patient">Patient</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="ni">
                            <Link to="/provider">Provider</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="ni">
                            <Link to="/pharmacy">Pharmacy</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="ni">
                            <Link to="/partners">Partners</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="nl"><Link to="/contact">Contact</Link></Nav.Link>
                    <a className="nl nx" href="http://p.medflit.com">Old site</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;