import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import about1 from '../assets/images/about1.jpeg';
import about2 from '../assets/images/about2.jpeg';

import DefaultLayout from '../layouts/default'

function Partners() {
    return (
        <DefaultLayout>    
            <div className="about">
                <section className="hero">
                    <Container>
                        <Row>
                            <Col className="pad m-auto text-center">
                                <h1>About Us</h1>
                            </Col>
                        </Row>
                    </Container>
                    
                </section>
                <div className="mt-5 p-5">
                    <Row className="mb-5">
                        <Col md={6} className="m-auto">
                            <h4>Who we are</h4>
                            <p>Medflit  is a Health Information Technology Company that focuses on building technologies to proffer solutions to healthcare problems in Africa. We have other products such as Medchat and Medflit Pay</p>
                        </Col>
                        <Col md={6}>
                            <img src={ about1 } className="img-fluid"/>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col md={6}>
                            <img src={ about2 } className="img-fluid"/>                    
                        </Col>
                        <Col md={6}>
                            <div>
                                <h4>Our Team</h4>
                                <p>We have a vibrant team that comprises healthcare practitioners, technology developers, business and legal Experts both within Nigeria and Abroad.</p>
                            </div>
                            <div className="mt-5">
                                <h4>Objectives</h4>
                                <p>Our main objective is to provide healthcare for all our patients which is affordable and stress free from the comfort of their homes, offices or where ever they may be at any point in time.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5" style={{marginTop:"150px"}}>
                        <Col md={6}>
                            <h5>Benefits to enrolees of HMOs</h5>
                            <div className="footer-link mt-4">
                                <p>- Technology that enables interactive platforms (Video, Chat, and Audio Calls)</p>
                                <p>- Instant access to a wide pool of qualified doctor</p>
                                <p>- Digital health screening (Diagnosis and treatment of non-emergency medical conditions).</p>
                                <p>- Digital prescription</p>
                                <p>- Electronic medical records</p>
                                <p>- Significant reduction in Waiting Time at the Hospitals for Out-Patient cases</p>
                                <p>- Provision of 24/7 Service delivery</p>
                                <p>- Flexible referral System for Secondary cases</p>
                                <p>- Seamless On-boarding Process</p>
                            </div>                                    
                        </Col>
                        <Col md={6}>
                            <h5>Benefits to HMOs</h5>
                            <div className="footer-link mt-4">
                                <p>- Reduction in claims exposure.</p>
                                <p>- Access to large pool of doctors in various specialties. </p>
                                <p>- Continuity of care with preferred  physician for example, Dr Jide who sees his patient at the clinic can still attend to his patient online </p>
                                <p>- Provides opportunity for leveraging  to grow clientel base</p>
                                <p>- Competitive edge advantage </p>
                            </div>                                    
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <h5>Benefits to employers</h5>
                            <div className="footer-link mt-4">
                                <p>- Reduction in cost of medical budget</p>
                                <p>- Access to seamless service offering</p>
                                <p>- Value add to staff and families</p>
                                <p>- Employees access to digital medical records.</p>
                                <p>- Positioned to be a responsive and reputable organisation</p>
                                <p>- Access to care 24/7</p>
                            </div>                                    
                        </Col>
                        <Col md={6}>
                            <h5>Benefit to Pharmacies, Diagnostic centres, Specialist centres</h5>
                            <div className="footer-link mt-4">
                                <p>- Multiple sales channel</p>
                                <p>- Increased revenue</p>
                                <p>- More visibility</p>
                                <p>- Increased traffic of patients/customers.</p>
                            </div>                                    
                        </Col>
                    </Row>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Partners