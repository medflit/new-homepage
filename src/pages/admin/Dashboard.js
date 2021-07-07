import React, { useEffect, useState } from 'react'
import config from '../../api/index'

import { Row, Col, Container, Card } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react'

import { Link } from 'react-router-dom'

import AuthLayout from '../../layouts/auth'

function Dashboard() {
    const [patient, getPatients] = useState();
    const [provider, getProviders] = useState();
    const [user, getUSers] = useState();
    const [consultation, getConsultations] = useState();

    useEffect(() => {
        dashboardData();
    }, [])

    const dashboardData = async () => {

        Promise.all([
            fetch( `${config.baseUrl}/patients/find`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
            fetch(`${config.baseUrl}/providers`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
            fetch(`${config.baseUrl}/admin/users`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
            fetch(`${config.baseUrl}/reports/all-consultations`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
        ]).then((responses) => {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                // console.log(response.json())
                return response.json();
            }));
        }).then((res) => {
            getPatients(res[0].paginator.total);
            getProviders(res[1].paginator.total);
            getUSers(res[2].data.total);
            getConsultations(res[3].data.total);
        }).catch((error) => {
            console.log(error);
        })
    };


    return(
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Dashboard</h2>
                        <small className="text-muted">Welcome,
                            <strong> Admin</strong>
                        </small>
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
                    <Col md={3} xs={12}>
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
                                    <Col><span className="text-highlight text-bold text-md">{patient}</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={12}>
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
                                    <Col><span className="text-highlight text-bold text-md">{provider}</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="user" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Pharmacy Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-info">
                                    <Col><span className="text-highlight text-bold text-md">-</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Partners Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-warning">
                                    <Col><span className="text-highlight text-bold text-md">-</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Hospital Dashboard</small>
                                    </div>
                                </div>
                                <Row className="text-primary">
                                    <Col><span className="text-highlight text-bold text-md">-</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="home" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12}>
                    <Link to="/admin/users">
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Total Users</small>
                                    </div>
                                </div>
                                <Row className="text-success">
                                    <Col><span className="text-highlight text-bold text-md">{user}</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={12}>
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
                                    <Col><span className="text-highlight text-bold text-md">{consultation}</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="list" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col md={3} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Order Log</small>
                                    </div>
                                </div>
                                <Row className="text-secondary">
                                    <Col><span className="text-highlight text-bold text-md">-</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="menu" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        <small className="h-1x">Call Log</small>
                                    </div>
                                </div>
                                <Row className="text-secondary">
                                    <Col><span className="text-highlight text-bold text-md">-</span></Col>
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