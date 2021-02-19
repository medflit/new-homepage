import React, { Component } from 'react'
import { Row, Col, Container, Accordion, Button, Card } from 'react-bootstrap';
import download from '../assets/images/download.svg'
import profile from '../assets/images/profile.svg'
import schedule from '../assets/images/schedule.svg'
import screening from '../assets/images/screening.svg'
import office from '../assets/images/office.svg'
import health from '../assets/images/health.svg'
import fitness from '../assets/images/fitness.svg'

function Partners() {
    return (
        <div>
            <section className="hero">
                <Container>
                    <Row>
                        <Col className="pad m-auto text-center">
                            <h1>Partners</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="p-5">
                <Row>
                    <Col md={6}>
                    
                    </Col>
                    <Col md={6}>
                    
                    </Col>
                </Row>

                <Row className="mt-5 mb-5 wcyd text-center">
                    <Col md={12} className="mb-5">
                        <h3><b>What can you do?</b></h3>
                    </Col>
                    <Col md={3}>
                        <img src={ screening } className="img-fluid mb-3" width="60"/>
                        <h5>Health Screening &amp; Checkup</h5>
                        <div className="footer-link mt-4">
                            <p>It’s always better to undergo a complete checkup of your body, which can tell you about your health.</p>
                        </div> 
                    </Col>
                    <Col md={3}>
                        <img src={ office } className="img-fluid mb-3" width="60"/>
                        <h5>In-Office Services</h5>
                        <div className="footer-link mt-4">
                            <p>Do you require health providers to attend to you and your employees right in the comfort of your work.</p>
                        </div> 
                    </Col>
                    <Col md={3}>
                        <img src={ health } className="img-fluid mb-3" width="60"/>
                        <h5>Health Insurance</h5>
                        <div className="footer-link mt-4">
                            <p>Get quality and affordable health insurance covers through any of the reputable health insurance organizations partnered.</p>
                        </div> 
                    </Col>
                    <Col md={3}>
                        <img src={ fitness } className="img-fluid mb-3" width="60"/>
                        <h5>Fitness &amp; Wellness</h5>
                        <div className="footer-link mt-4">
                            <p>Book your appointments through us with decent and convenient fitness and wellness centers near you to get huge discounts.</p>
                        </div> 
                    </Col>
                </Row>
                <hr />
                <Row className="mt-5 mb-5 text-center">
                    <Col md={12} className="mt-5 mb-5">
                        <h3><b>How it works</b></h3>
                    </Col>
                    <Col md={4}>
                        <img src={ download } className="img-fluid mb-3" width="60"/>
                        <p>Register online or download our app for free.</p>
                    </Col>
                    <Col md={4}>
                        <img src={ profile } className="img-fluid mb-3" width="60"/>
                        <p>Complete your profile and set up sub-accounts for each of your staff.</p>
                    </Col>
                    <Col md={4}>
                        <img src={ schedule } className="img-fluid mb-3" />
                        <p>Book appointments with our seasoned doctors in any area of speciality.</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={12} className="mt-5 mb-5 text-center">
                        <h3>Partners FAQs</h3>
                    </Col>

                    <Col md={{ span: 8, offset: 2 }}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Do we need only one account for my company?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Yes, you need only one account for your organization. Medflit allows you to create sub accounts under your main account, for all the staff members of your company and each staff’s information is only accessible by the owner.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    How does Medflit protect the confidentiality of my company's information?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Details of doctor’s reports are also specific to each sub users account.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Can we book a provider for longer period of time to attend to all our staff?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Yes, we have premium providers who can meet your vast requirements of time and place.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Can we print or transfer all our medical records at any time?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    Yes, you can download, print and transfer your medical records at any time. We will need your permission to transfer your medical records to any of your preferred hospital or clinics.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    We have questions that are not listed, how can you help?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="">
                                    <Card.Body>
                                        You can contact our customer service for any questions at anytime 24hrs a day, seven days a week.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Partners