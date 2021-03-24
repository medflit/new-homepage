import React, {useState} from 'react'
import { Row, Col, Card, Container, Accordion, Button, Modal } from 'react-bootstrap'

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import AuthLayout from '../../../layouts/auth'

function Patient() {
    const [modalShow, setModalShow] = useState(false);

    const ActivateModal = (props) => {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="p-5">
                <Row className="text-center">
                    <Col>
                        <h6>Activate Subscription</h6>
                        <Button variant="info">Subscription plan</Button>
                    </Col>
                    <Col>
                        <h6>Activate Treatment</h6>
                        <Button variant="secondary">Treatment plan</Button>
                    </Col>
                </Row>
            </Modal.Body>
          </Modal>
        );
    }
    return (
        <AuthLayout>
            <ActivateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Patient Profile</h2>
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
                    <Col md={4} className="order-md-2">
                        <Card>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={4}>
                                            <img src={ ProfileImage } className="w-80 avatar img-fluid mb-3"/>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="page-title m-auto">
                                                <small className="text-muted">Patient</small>
                                                <h2 className="text-md text-highlight">Samson Samuels</h2>
                                            </div>
                                            <hr/>
                                            <div className="page-title m-auto">
                                                <small className="text-muted">Current balance</small>
                                                <h2 className="text-md text-highlight">#4,500</h2>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                Subscription
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={12}>
                                            <div className="mb-3">
                                                <small className="text-muted">You have not subscribed yet. Subscribe now to make unlimited calls to doctors.</small>
                                            </div>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>Activate</Button>
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
                                        <div className="mt-4 align-items-center b-t pointer">
                                            <div className="mb-3">
                                                <div><p className="pro-serv">Change Password</p></div>
                                            </div>
                                            <div className="flex"></div>
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


export default Patient