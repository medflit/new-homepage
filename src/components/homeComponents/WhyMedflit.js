import React, { Components } from 'react'
import why from '../../assets/images/why1.png';

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
                    <Col md="3">
                        <div className="medflit-item">
                            <Row>
                                <Col md="4">
                                    <img src={ why } width="100" alt=""/>
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
                    <Col md="3">
                        <div className="medflit-item">
                            <Row>
                                <Col md="4">
                                    <img src={ why } width="100" alt=""/>
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
                    <Col md="3">
                        <div className="medflit-item">
                            <Row>
                                <Col md="4">
                                    <img src={ why } width="100" alt=""/>
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
                    <Col md="3">
                        <div className="medflit-item">
                            <Row>
                                <Col md="4">
                                    <img src={ why } width="100" alt=""/>
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
                </Row>
            </Container>
        </section>
    )
}

export default WhyMedflit