import React, {Component} from 'react'
import { Row, Col, Card, Container, Nav, Accordion, Button } from 'react-bootstrap'

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import AuthLayout from '../../../layouts/auth'

function Patient() {
    return (
        <AuthLayout>
            <Container>
                <Row>
                    <Col md={4} className="order-md-2">
                        <Card>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={4}>
                                            <img src={ ProfileImage } className="w-80 avatar img-fluid"/>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="page-title m-auto">
                                                <h2 className="text-md text-highlight">Samson Samuels</h2>
                                                <small className="text-muted">Patient
                                                </small>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8} className="order-md-1">
                        <Card>
                            <Card.Body>
                                <div className="d-flex">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Transactions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Health Report</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_4">Activity Log</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_5">Settings</a>
                                        </li>
                                    </ul>
                                </div>            
                            </Card.Body>
                        </Card>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab_1">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <form data-plugin="parsley" data-option="{}">
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Firstname</label>
                                                    <input type="text" className="form-control" required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Lastname</label>
                                                    <input type="text" className="form-control" required/>
                                                </div>
                                            </div>                                            
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control" required />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" required/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Marital Status</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value="one">First</option>
                                                        <option value="three">Third</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Gender</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value="one">First</option>
                                                        <option value="three">Third</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Occupation</label>
                                                    <input type="text" className="form-control" required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Date of Birth</label>
                                                    <input type="text" className="form-control" required/>
                                                </div>
                                            </div>  
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Genotype</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value="one">First</option>
                                                        <option value="three">Third</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Blood group</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value="one">First</option>
                                                        <option value="three">Third</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Telephone</label>
                                                    <input type="text" className="form-control" placeholder="XXX-XXX-XXXX" required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Select Country</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value="one">First</option>
                                                        <option value="three">Third</option>
                                                    </select>
                                                </div>
                                            </div>  
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea className="form-control" rows="6" data-minwords="6" required placeholder="Type your message"></textarea>
                                            </div>

                                            
                                            <div className="text-right">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_2">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>No transaction found</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_3">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <span className="btn btn-md text-muted">
                                            <span className="d-sm-inline mx-1 breadcrumb-text">Download report</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_4">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>You do not have any activity at the moment</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_5">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <div className="d-flex align-items-center pointer">
                                                    <div>
                                                        <span class="w-48 avatar circle bg-info-lt" data-toggle-class="loading">
                                                            <img src={ProfileImage} alt="."/>
                                                        </span>
                                                    </div>
                                                    <div class="flex"></div>
                                                    <div class="mx-3">
                                                        <FeatherIcon icon="chevron-right" size="16"/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <form role="form">
                                                    <div class="form-group">
                                                        <label>Profile picture</label>
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" id="customFile"/>
                                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary mt-2">Update</button>
                                                </form>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <div class="d-flex align-items-center b-t pointer">
                                                <FeatherIcon icon="lock" size="16"/>
                                                <div class="px-3">
                                                    <div>Password</div>
                                                </div>
                                                <div class="flex"></div>
                                                <div>
                                                    <FeatherIcon icon="chevron-right" size="16"/>
                                                </div>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                                <form role="form">
                                                    <div class="form-group">
                                                        <label>Old Password</label>
                                                        <input type="password" class="form-control"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" class="form-control"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>New Password Again</label>
                                                        <input type="password" class="form-control"/>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary mt-2">Update</button>
                                                </form>
                                        </Accordion.Collapse>
                                        
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


export default Patient