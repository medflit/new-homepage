import React, { Component } from 'react'
import logo from '../../assets/images/medflit-logo.png';
import fbIcon from '../../assets/images/fb.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import igIcon from '../../assets/images/ig.svg';

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col md={5}>
                        <img src={ logo } width="120" />
                        <Row className="mt-5">
                            <img src={ fbIcon } width="" className="ml-2 social-icon" />
                            <img src={ twitterIcon } width="" className="social-icon" />
                            <img src={ igIcon } width="" className="social-icon" />
                        </Row>
                        <p className="copyright">© Medflit 2021. All rights reserved</p>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <p>FAQs</p>
                                </div>                                    
                            </Col>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <p>FAQs</p>
                                </div>                                    
                            </Col>
                            <Col md={4}>
                                <h5>Company</h5>
                                <div className="mt-4">
                                    <p>About</p>
                                    <p>Testimonials</p>
                                    <p>Find a doctor</p>
                                    <p>FAQs</p>
                                </div>                                    
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer