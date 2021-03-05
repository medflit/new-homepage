import React from "react";

import { Container, Row, Col, Card, Table, Dropdown } from 'react-bootstrap'
import FeatherIcon from "feather-icons-react";

import AuthLayout from "../../../layouts/auth";

const Payments = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Make Payment</h2>
                    </div>
                    <div className="flex"></div>
                    <div>
                        <span class="btn btn-md text-muted">
                            <span class="d-sm-inline mx-1 breadcrumb-text"></span>
                            <FeatherIcon icon="arrow-right" size="14"/>
                        </span>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="">Patient stats</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Header>
                                Account Information
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <div className="">
                                        <small className="h-1x">Total amount earned: <strong>N54,000</strong></small>
                                    </div>
                                    <hr/>
                                    <div className="">
                                        <small className="h-1x">Total available this month: <strong>N5,000</strong></small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Header>
                                Account details
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <div className="">
                                        <small className="h-1x">Bank name: <strong>UBA</strong></small>
                                    </div>
                                    <hr/>
                                    <div className="">
                                        <small className="h-1x">Account no.: <strong>1234567890</strong></small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Header>
                                Transfer And Approve amount transferred
                            </Card.Header>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        <small className="h-1x">Amount fully paid for the month: <strong>N3,200</strong></small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </AuthLayout>
    )
}
export default Payments