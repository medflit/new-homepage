import React from 'react'
import logo from '../../assets/images/medflit-logo.png';
import fbIcon from '../../assets/images/fb.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import igIcon from '../../assets/images/ig.svg';

import { Container, Row, Col } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';

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
                        <img src={ logo } alt="" width="120" />
                        <Row className="mt-5">
                            <a href="https://facebook.com/medflit" rel="noreferrer" target="_blank">
                                <img src={ fbIcon } alt="" width="" className="ml-2 social-icon" />
                            </a>
                            <a href="https://instagram.com/medflit" rel="noreferrer" target="_blank">
                                <img src={ igIcon } alt="" width="" className="social-icon" />
                            </a>
                            <a href="https://twitter.com/medflithealth" rel="noreferrer" target="_blank">
                                <img src={ twitterIcon } alt="" width="" className="social-icon" />
                            </a>
                        </Row>
                        <p className="copyright d-none d-md-block">© Medflit 2021. All rights reserved</p>
                    </Col>
                    <Col md={8}>
                        <Row>
                            
                            <Col md={6}>
                                <h5>Reach Us</h5>
                                <div className="footer-link mt-4">
                                    <NavLink to=""><p><FontAwesomeIcon icon={ faEnvelopeOpen } /> info@medflithealthresources.com</p></NavLink>
                                    <NavLink to=""><p><FontAwesomeIcon icon={ faPhone } /> +234 705 520 9676</p></NavLink>
                                    <NavLink to=""><p><FontAwesomeIcon icon={ faMapPin } /> 24, Prince Ibrahim Eletu Avenue, Osapa London, <br/>Lekki, Lagos, Nigeria.</p></NavLink>
                                </div>                                    
                            </Col>
                            <Col md={3}>
                                <h5>Company</h5>
                                <div className="footer-link mt-4">
                                    <NavLink to="/about"><p>About Us</p></NavLink>
                                    <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+=2347055209676&text=Hi,%20I%20would%20like%20to%20know%20more%20about%20Medflit."target="_blank"><p>Contact Us</p></a>
                                    <NavLink to="/partners"><p>Partners</p></NavLink>
                                    <NavLink to="/admin-login"><p>Admin</p></NavLink>
                                </div>                                    
                            </Col>
                            <Col md={3}>
                                <h5>Solutions</h5>
                                <div className="footer-link mt-4">
                                    <NavLink to="/"><p>Android</p></NavLink>
                                    <NavLink to="/"><p>iOS</p></NavLink>
                                    <NavLink to="/faq"><p>Faq</p></NavLink>
                                    <a href="https://blog.medflit.com">Blog</a>
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