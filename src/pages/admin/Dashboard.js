import React, { Component } from 'react'

import { Row, Col, Container, Card } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

import { Link } from 'react-router-dom'

import AuthLayout from '../../layouts/auth'

function Dashboard() {
    return(
        <AuthLayout>
            <Container className="">
                <Row>
                    <Col md={3} xs={6}>
                        <Link to="/admin/patients">
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Patient Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-primary">
                                    <Col><span className="text-highlight text-bold text-md">44</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={6}>
                        <Link to="/admin/providers">
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Providers Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-danger">
                                    <Col><span className="text-highlight text-bold text-md">32</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="user" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Pharmacy Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-info">
                                    <Col><span className="text-highlight text-bold text-md">123</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Partners Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-warning">
                                    <Col><span className="text-highlight text-bold text-md">65</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Hospital Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-primary">
                                    <Col><span className="text-highlight text-bold text-md">444</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="home" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Total Users</small>
                                    </div>
                                </div>
                                <Row className="text-success">
                                    <Col><span className="text-highlight text-bold text-md">5,654</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Link to="/admin/consultations">
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Consultations</small>
                                    </div>
                                </div>
                                <Row className="text-secondary">
                                    <Col><span className="text-highlight text-bold text-md">9</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="list" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Order Log</small>
                                    </div>
                                </div>
                                <Row className="text-secondary">
                                    <Col><span className="text-highlight text-bold text-md">0</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="menu" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        <small className="h-1x">Call Log</small>
                                    </div>
                                </div>
                                <Row className="text-secondary">
                                    <Col><span className="text-highlight text-bold text-md">10</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="phone-forwarded" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default Dashboard