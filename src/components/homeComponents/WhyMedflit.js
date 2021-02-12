import React, { Components } from 'react'
import powerful from '../../assets/images/powerful.png';
import pickup from '../../assets/images/pickup.png';
import screening from '../../assets/images/screening.png';
import emr from '../../assets/images/emr.png';
import drug from '../../assets/images/drug.png';
// import payment from '../../assets/images/payment.png';

import { Container, Row, Col } from 'react-bootstrap';

function WhyMedflit() {
    return(
        <section className="why-medflit">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2>Why Medflit?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className="medflit-item">
                            <Row>
                                <Col md={{ span: 4, offset: 6 }} xs={{ span: 4, offset: 7 }}>
                                    <img src={ powerful } width="100" alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Powerful</h5>
                                    <p className="">Powerful technology that enables Video, Chat, and Audio Calls</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="medflit-item">
                            <Row>
                                <Col md={{ span: 4, offset: 6 }} xs={{ span: 4, offset: 7 }}>
                                    <img src={ pickup } width="100" alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Prescription Pickup</h5>
                                    <p className="">Pick up prescriptions at your preferred pharmacy location.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="medflit-item">
                            <Row>
                                <Col md={{ span: 4, offset: 6 }} xs={{ span: 4, offset: 7 }}>
                                    <img src={ screening } width="100" alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>Health Screening</h5>
                                    <p className="">Health screening, diagnosis and treatment of non-emergency medical conditions.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="medflit-item">
                            <Row>
                                <Col md={{ span: 4, offset: 6 }} xs={{ span: 4, offset: 7 }}>
                                    <img src={ emr } width="100" alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5>EHR</h5>
                                    <p className="">Electronic Retrieval of Medical Records</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyMedflit