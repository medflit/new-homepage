import React, { Components } from 'react'
import handPhone from '../../assets/images/handphone.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';

import customer from '../../assets/images/customer.png';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

function Testimonials() {
    return(
        <section className="testimonials">
            <Container>
                <div className="primary-color-bg testimonial-inner">
                    <Row>
                        <Col md={12} className="">
                            <h3>What our customers are saying</h3>
                        </Col>
                        <Col className="mt-5">
                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Col md={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
                                            <img src={ customer } width="100" alt=""/>                                    
                                        </Col>
                                        <Col md={6} xs={6} className="m-auto">
                                            <h5>Segun Obe</h5>
                                            <p className="customer-name">CEO, Paystack</p>                                   
                                        </Col>
                                        
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <p>“Our dedicated patient engagement app and 
                                        web portal allow you to access information instantaneously (no tedeous form, long calls, 
                                        or administrative hassle) and securely”
                                    </p>
                                </Col>  
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials