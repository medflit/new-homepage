import React, { Components } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// import { faLine } from '@fortawesome/free-solid-svg-icons'

function Pricing() {
    return(
        <section className="pricing">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2>How we charge</h2>
                        {/* <p>We have considered medflit to be more affordable and pocket friendly.</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <p>Firstly, get an appointment with a <br className="d-md-block" /> Doctor for as low as N1k.</p>
                        <h6>Show benefits <FontAwesomeIcon icon={faChevronRight} /></h6>

                        <p>Lastly, purchase a treatment plan after <br className="d-md-block" /> finished talking to your doctor</p>
                        <h6>Show benefits <FontAwesomeIcon icon={faChevronRight} /></h6>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6} className="pb-3">
                                <div className="pricing-plan">
                                    <h5>Book a Doctor</h5>
                                    <p className="small"><small>Unlimited access to a Doctor</small></p>

                                    <h2>N1,000 <span className="sub"><sup>/ Month</sup></span></h2>
                                    <h6>read more <FontAwesomeIcon icon={faChevronRight} /></h6>

                                    <hr />
                                    <div className="perk">
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color" />&nbsp; 30 mins voice call</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; 30 mins video call</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; Unlimited chat</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; One doctor per month</p>
                                    </div>                        
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="pricing-plan">
                                    <h5>Buy a Treatment Plan</h5>
                                    <p className="small"><small>Unlimited access to a Doctor</small></p>

                                    <h2>N2,000 - N5,000 <span className="sub"><sup>/ Month</sup></span></h2>
                                    <h6>read more <FontAwesomeIcon icon={faChevronRight} /></h6>

                                    <hr />
                                    <div className="perk">
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color" />&nbsp; Drug Prescription</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; Lab Prescription</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; Lab Investigation</p>
                                        <p><FontAwesomeIcon icon={faCheckCircle} className="primary-color"/>&nbsp; Follow-up Appointment</p>
                                    </div>                        
                                </div>
                            </Col>
                        </Row>                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing