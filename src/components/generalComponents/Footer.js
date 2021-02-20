import React, { Component } from 'react'
import logo from '../../assets/images/medflit-logo.png';
import fbIcon from '../../assets/images/fb.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import igIcon from '../../assets/images/ig.svg';

import { Container, Row, Col } from 'react-bootstrap'

import { Route, NavLink, Link } from 'react-router-dom';
import AdminLogin from '../AdminLogin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <section className="footer">
            <hr /><br /><br /><br />
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={ logo } width="120" />
                        <Row className="mt-5">
                            <Link to={{ pathname: "https://facebook.com/medflit" }} target="_blank">
                                <img src={ fbIcon } width="" className="ml-2 social-icon" />
                            </Link>
                            <Link to={{ pathname: "https://instagram.com/medflit" }} target="_blank">
                                <img src={ igIcon } width="" className="social-icon" />
                            </Link>
                            <Link to={{ pathname: "https://twitter.com/medflithealth" }} target="_blank">
                                <img src={ twitterIcon } width="" className="social-icon" />
                            </Link>
                        </Row>
                        <p className="copyright d-none d-md-block">© Medflit 2021. All rights reserved</p>
                    </Col>
                    <Col md={8}>
                        <Row>
                            
                            <Col md={6}>
                                <h5>Reach Us</h5>
                                <div className="footer-link mt-4">
                                    <p><FontAwesomeIcon icon={ faEnvelopeOpen } /> info@medflithealthresources.com</p>
                                    <p><FontAwesomeIcon icon={ faPhone } /> +234 705 520 9676</p>
                                    <p><FontAwesomeIcon icon={ faMapPin } /> 24, Prince Ibrahim Eletu Avenue, Osapa London, Lekki, Lagos, Nigeria.</p>
                                </div>                                    
                            </Col>
                            <Col md={3}>
                                <h5>Company</h5>
                                <div className="footer-link mt-4">
                                    <NavLink to="/about"><p>About Us</p></NavLink>
                                    <NavLink to={{ pathname: "https://api.whatsapp.com/send?phone=+=2347055209676&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Medflit." }} target="_blank"><p>Contact Us</p></NavLink>
                                    <NavLink to="/partners"><p>Partners</p></NavLink>
                                    <NavLink to="/admin-login"><p>Login</p></NavLink>
                                </div>                                    
                            </Col>
                            <Col md={3}>
                                <h5>Solutions</h5>
                                <div className="footer-link mt-4">
                                    <NavLink to="/"><p>Android</p></NavLink>
                                    <NavLink to="/"><p>iOS</p></NavLink>
                                    <NavLink to="/faq"><p>Faq</p></NavLink>
                                </div>                                    
                            </Col>
                        </Row>
                    </Col>
                    <Col className="">
                        <p className="copyright2">© Medflit 2021. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer