import React from 'react'

import AuthLayout from '../../layouts/auth'

import { Row, Col, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'

const ConsultationTransaction = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Consultation Transactions</h2>
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
            <Container className="">
                <Row>
                    <Col md={4} xs={12}>
                        <Link to="/admin/providers/current-transaction">
                            <Card>
                                <Card.Body>
                                    <div className="d-md-flex">
                                        <div className="flex">
                                            {/* <div class="text-highlight">30%</div> */}
                                            <small className="h-1x">Current Transaction</small>
                                        </div>
                                    </div>
                                    <Row className="text-primary">
                                        {/* <Col><span className="text-highlight text-bold text-md">44</span></Col> */}
                                        <Col><FeatherIcon className="mt-2 pull-right" icon="arrow-down" size="24"/></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={4} xs={12}>
                        <Link to="/admin/providers/past-transaction">
                            <Card>
                                <Card.Body>
                                    <div className="d-md-flex">
                                        <div className="flex">
                                            {/* <div class="text-highlight">30%</div> */}
                                            <small className="h-1x">Past Transaction</small>
                                        </div>
                                    </div>
                                    <Row className="text-danger">
                                        {/* <Col><span className="text-highlight text-bold text-md">32</span></Col> */}
                                        <Col><FeatherIcon className="mt-2 pull-right" icon="arrow-right" size="24"/></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default ConsultationTransaction