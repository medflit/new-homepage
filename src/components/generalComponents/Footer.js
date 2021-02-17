import React, { Component } from 'react'
import logo from '../../assets/images/medflit-logo.png';
import fbIcon from '../../assets/images/fb.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import igIcon from '../../assets/images/ig.svg';

import { Container, Row, Col } from 'react-bootstrap'

import { Route, NavLink, Link } from 'react-router-dom';
import AdminLogin from '../AdminLogin';

function Footer() {
    return (
        <section className="footer">
            <hr /><br /><br /><br />
            <Container>
                <Row>
                    <Col md={5}>
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
                    <Col md={7}>
                        <Row>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="footer-link mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <p>FAQs</p>
                                </div>                                    
                            </Col>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="footer-link mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <p>FAQs</p>
                                </div>                                    
                            </Col>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="footer-link mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <NavLink to="/admin-login"><p>Admin</p></NavLink>
                                    {/* <Link to="/admin_login" component={AdminLogin}>
                                        <p>Admin</p>
                                    </Link> */}
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