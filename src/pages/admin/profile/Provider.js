import React, {Component} from 'react'
import { Row, Col, Card, Container, Nav, Accordion, Button, Table } from 'react-bootstrap'

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import AuthLayout from '../../../layouts/auth'

function Provider() {
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
                                            <a className="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Overview</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Review</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Bank Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_4">Transactions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_5">Activity Log</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_6">Settings</a>
                                        </li>
                                    </ul>
                                </div>            
                            </Card.Body>
                        </Card>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab_1">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <form id="form" data-plugin="parsley" data-option="{}">
                                        <div id="rootwizard" data-plugin="bootstrapWizard" data-option="{
                                            tabclassName: '',
                                            nextSelector: '.button-next', 
                                            previousSelector: '.button-previous', 
                                            firstSelector: '.button-first', 
                                            lastSelector: '.button-last',
                                            onTabClick: function(tab, navigation, index) {
                                            return false;
                                            },
                                            onNext: function(tab, navigation, index) {
                                            var instance = $('#form').parsley();
                                            instance.validate();
                                            if(!instance.isValid()) {
                                                return false;
                                            }
                                            }
                                        }">
                                            <ul className="nav mb-3">
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab1" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">1</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Personal Info</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab2" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">2</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Professional Info</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab3" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">3</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Hospital Details</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-3">
                                                <div className="tab-pane active" id="tab1">
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
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Address</label>
                                                            <textarea className="form-control" rows="6" data-minwords="6" required placeholder="Type your message"></textarea>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Doctor's bio</label>
                                                            <textarea className="form-control" rows="6" data-minwords="6" required placeholder="Type your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="table-responsive">
                                                            <Table className="table table-theme table-row v-middle">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            S/N
                                                                        </th>
                                                                        <th className="text-muted">Medical School</th>
                                                                        <th className="text-muted">Course</th>
                                                                        <th className="text-muted">Graduation year</th>
                                                                        <th style={{width: "50px"}}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className=" v-middle" dataId="15">
                                                                        <td>
                                                                            1
                                                                        </td>
                                                                        <td>
                                                                            <div className="item-title text-color ">
                                                                                <input type="text" className="form-control" placeholder="Medical school"/>
                                                                            </div>                                            
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" "><input type="text" className="form-control" placeholder="Course"/></div>
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=""><input type="text" className="form-control" placeholder="Graduation year"/></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="badge badge-danger badge-lg">X</div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                        
                                                    </div>

                                                    <div className="form-row">
                                                        <div className="form-group col-sm-3">
                                                            <label>Years of Exp.(?)</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Medium of service</label>
                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                <option value="one">Online</option>
                                                                <option value="three">Home &amp; Online</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Online Price</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Home service price</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab2">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Profession</label>
                                                                <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                    <option value="one">Medical Doctor</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Speciality</label>
                                                                <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                    <option value="one">Infectious Speciality</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="table-responsive">
                                                                <Table className="table table-theme table-row v-middle">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                S/N
                                                                            </th>
                                                                            <th className="text-muted">Name of Aff.</th>
                                                                            <th className="text-muted">Aff. Abbrev.</th>
                                                                            <th className="text-muted">Website</th>
                                                                            <th className="text-muted">Description</th>
                                                                            <th style={{width: "50px"}}></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className=" v-middle" dataId="15">
                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                <div className="item-title text-color ">
                                                                                    <input type="text" className="form-control" placeholder=""/>
                                                                                </div>                                            
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=" "><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=""><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=""><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="badge badge-danger badge-lg">X</div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">License ID</label>
                                                                <input type="text" className="form-control" placeholder=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Resume
                                                                </label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Uni. Certificate</label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Medical License
                                                                </label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Enter Certifications</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Languauges</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="tab3">
                                                    <div className="form-group">
                                                        <label className="text-muted">Hospital Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <h5>Services and Procedures</h5>
                                                    </div>
                                                    <hr/>
                                                    <p>Clinical services</p>
                                                    <div className="form-row">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                Paediatrics
                                                            </label>
                                                        </div>
                                                        <div class="form-check ml-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Anaesthesia
                                                            </label>
                                                        </div>
                                                        <div class="form-check ml-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Intensive care
                                                            </label>
                                                        </div>
                                                        <div class="form-check ml-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Diabetes
                                                            </label>
                                                        </div>
                                                        <div class="form-check ml-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Obstetrics&Gynaecology
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <button type="submit" className="btn btn-primary">Update Profile</button>
                                                    </div>
                                                </div>
                                                <div className="row py-3">
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-white button-next">
                                                            <FeatherIcon icon="chevron-left" size="18"/>
                                                        </button>
                                                        <button type="button" className="btn btn-white button-previous">
                                                            <FeatherIcon icon="arrow-left" size="18"/>
                                                        </button>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex justify-content-end">
                                                            <button type="button" className="btn btn-white button-next">
                                                                <FeatherIcon icon="arrow-right" size="18"/>
                                                            </button>
                                                            <button type="button" className="btn btn-white button-last">
                                                                <FeatherIcon icon="chevron-right" size="18"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>    
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_2">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <span className="btn btn-md text-muted">
                                            <span className="d-sm-inline mx-1 breadcrumb-text">No reviews yet</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_3">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <span className="btn btn-md text-muted">
                                            <span className="d-sm-inline mx-1 breadcrumb-text">Bank details here</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_4">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>No transaction found</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                            <div className="tab-pane fade" id="tab_5">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>You do not have any activity at the moment</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_6">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <div className="d-flex align-items-center pointer">
                                                    <div>
                                                        <span className="w-48 avatar circle bg-info-lt" data-toggle-className="loading">
                                                            <img src={ProfileImage} alt="."/>
                                                        </span>
                                                    </div>
                                                    <div className="flex"></div>
                                                    <div className="mx-3">
                                                        <FeatherIcon icon="chevron-right" size="16"/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label>Profile picture</label>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="customFile"/>
                                                            <label className="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mt-2">Update</button>
                                                </form>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            <div className="d-flex align-items-center b-t pointer">
                                                <FeatherIcon icon="lock" size="16"/>
                                                <div className="px-3">
                                                    <div>Password</div>
                                                </div>
                                                <div className="flex"></div>
                                                <div>
                                                    <FeatherIcon icon="chevron-right" size="16"/>
                                                </div>
                                            </div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label>Old Password</label>
                                                        <input type="password" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password Again</label>
                                                        <input type="password" className="form-control"/>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mt-2">Update</button>
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


export default Provider