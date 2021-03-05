import React from 'react'

import AuthLayout from '../../layouts/auth'

import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Table, Card, Accordion, Button } from 'react-bootstrap'
import ProfileImage from '../../assets/images/customer.png'


const Inbox = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Inbox</h2>
                    </div>
                    <div className="flex"></div>
                    <div>
                        <span className="btn btn-md text-muted">
                            <span className="d-sm-inline mx-1 breadcrumb-text"></span>
                            <FeatherIcon icon="arrow-right" size="14"/>
                        </span>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col md={8} className="order-md-1">
                        <Card>
                            <Card.Body>
                                <div className="d-flex">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Active</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Unanswered</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Archive</a>
                                        </li>
                                    </ul>
                                </div>            
                            </Card.Body>
                        </Card>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab_1">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <div className="users-left">

                                            <div className="px-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <input type="text" className="form-control my-3" placeholder="Search patients..."/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 p-3">
                                                <strong>Patients</strong>
                                            </div>

                                            <a href="#" className="list-group-item list-group-item-action border-0">
                                                <div className="float-right"><span className="small time">13:24</span> <br/><span className="badge bg-primary float-right">5</span></div>
                                                
                                                <div className="d-flex align-items-start">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                                                    <div className="flex-grow-1 ml-3 patient-name">
                                                        Ikusika Isaiah
                                                        <div className="small h-1x"><span className="fa fa-circle chat-online"></span> Please take a look at the image I sent to you</div>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#" className="list-group-item list-group-item-action border-0">
                                                <div className="float-right"><span className="small time">13:24</span></div>
                                                
                                                <div className="d-flex align-items-start">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                                                    <div className="flex-grow-1 ml-3 patient-name">
                                                        Dupe Oloyede
                                                        <div className="small h-1x"><span className="fa fa-circle chat-online"></span> Please take a look at the image I sent to you</div>
                                                    </div>
                                                </div>
                                            </a>
                                            

                                            <hr className="d-block d-lg-none mt-1 mb-0"/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_2">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <div className="users-left">

                                            <div className="px-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <input type="text" className="form-control my-3" placeholder="Search patients..."/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 p-3">
                                                <strong>Patients</strong>
                                            </div>

                                            <a href="#" className="list-group-item list-group-item-action border-0">
                                                <div className="float-right"><span className="small time">13:24</span> <br/><span className="badge bg-primary float-right">5</span></div>
                                                
                                                <div className="d-flex align-items-start">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                                                    <div className="flex-grow-1 ml-3 patient-name">
                                                        Ikusika Isaiah
                                                        <div className="small h-1x"><span className="fa fa-circle chat-online"></span> Please take a look at the image I sent to you</div>
                                                    </div>
                                                </div>
                                            </a>

                                            <hr className="d-block d-lg-none mt-1 mb-0"/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_3">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <div className="users-left">

                                            <div className="px-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <input type="text" className="form-control my-3" placeholder="Search patients..."/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 p-3">
                                                <strong>Patients</strong>
                                            </div>

                                            <a href="#" className="list-group-item list-group-item-action border-0">
                                                <div className="float-right"><span className="small time">13:24</span> <br/><span className="badge bg-primary float-right">5</span></div>
                                                
                                                <div className="d-flex align-items-start">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                                                    <div className="flex-grow-1 ml-3 patient-name">
                                                        Ikusika Isaiah
                                                        <div className="small h-1x"><span className="fa fa-circle chat-online"></span> Please take a look at the image I sent to you</div>
                                                    </div>
                                                </div>
                                            </a>

                                            <hr className="d-block d-lg-none mt-1 mb-0"/>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>                    
                
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default Inbox