import React, { Component } from 'react'
import { Accordion, Card, Row, Col, Button, Container } from 'react-bootstrap';

import DefaultLayout from '../layouts/default'

function Faq() {
    return (
        <DefaultLayout>
            <section className="hero">
                <Container>
                    <Row>
                        <Col className="pad m-auto text-center">
                            <h1>FAQs</h1>
                        </Col>
                    </Row>
                </Container>
                
            </section>
            <div className="mt-5">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        What is Medfit?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Medflit is an integrated telemedicine software that allows patients to speak with doctors at low cost and get medications from their nearest pharmacies.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        How can I know if Medflit can help me?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Medflit can help you if you are suffering from non-emergency or noncritical health conditions. Medflit can help you consult a doctor both online and at various hospitals, get prescriptions and receive your medications from pharmacies close to you.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        What are the frequent health conditions that Medflit can Treat?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        See our list of health conditionsthat Medflit’s doctors can treat. If your health condition is not listed, you can contact us through a customer service
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    How do I sign up on my phone or computer?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                    You can sign up on your phone or computer using the Register buttons on the homepage, or simply click this link to open the Signup page on your browser to create an account with us.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    Do I need an account to use Medflit?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                    Yes, you need an account to use Medflit. Your account serves as part of your medical records. Your information is secured and will not be shared with any parties except your direct providers.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    I don’t have a phone or computer but how do I speak to a Doctor?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                    You can speak with doctors without using your personal phone or computer by visiting your neighborhood pharmacies and ask if they are participating in Medflit partnership program.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                    When and Where is Medflit Available?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                    Medflit is available 24hrs a day / 7 days a week. Medflit is available only in Nigeria.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                    What is the office hour for Medflit?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body>
                                    Our office hour is between 9am – 6pm but you can use our software to book appointment with doctors 24hrs a day.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="8">
                                    How much does it cost to use Medflit?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body>
                                    Our price depends on the plan you choose. Starting from 1,000 Naira, you can start talking with doctors.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="9">
                                    Can I access Medflit on any devices?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="9">
                                    <Card.Body>
                                    Yes, you can access Medflit on any internet enabled computer, tablet or phone equipped with either android, iOS or windows operating system.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="10">
                                    Can I get a prescription through Medflit doctors?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="10">
                                    <Card.Body>
                                    You, can get prescriptions through Medflit’s doctors. Our doctors do not prescribe control meds or narcotics.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="11">
                                    I am an employer or organization what can Medflit do for us?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="11">
                                    <Card.Body>
                                    Medflit can help with employee health screening. We can also provide healthcare providers such as doctors and pharmacists for your employees.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="12">
                                    Can Medflit keep all my information private and secured?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="12">
                                    <Card.Body>
                                    Yes, your information is safe and secure with us. We take patients information very serious and confidential; we do not share the information with anyone except your direct providers. Our portal is safe for users.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="13">
                                    Can I print or transfer all my medical records at any time?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="13">
                                    <Card.Body>
                                    Yes, you can download, print and transfer your medical records at any time. We will need your permission to transfer your medical records to any of your preferred hospital or clinics.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="14">
                                    I have phone but no camera can I still talk to doctor?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="14">
                                    <Card.Body>
                                    Yes, you can speak with doctor through voice call and chatting app. You will only need a phone camera for video consultations
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="15">
                                    How do I get my prescriptions from pharmacies?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="15">
                                    <Card.Body>
                                    You can pick up prescriptions at your own preferred pharmacy store or we can have the medications delivered to your office or house within 2-6 hrs of placing the order.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        </DefaultLayout>
        
    )
}

export default Faq 