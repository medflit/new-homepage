import React from 'react'

import AuthLayout from '../../../layouts/auth'

import { Row, Col, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'

const PastTransaction = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Past Transaction</h2>
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
                        <p className="">Consultation stats</p>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Number of patients consulted</small>
                                    </div>
                                </div>
                                <Row className="text-primary">
                                    <Col><span className="text-highlight text-bold text-md">44</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="users" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-md-flex">
                                    <div className="flex">
                                        {/* <div class="text-highlight">30%</div> */}
                                        <small className="h-1x">Total amount paid</small>
                                    </div>
                                </div>
                                <Row className="text-danger">
                                    <Col><span className="text-highlight text-bold text-md">32</span></Col>
                                    <Col><FeatherIcon className="mt-2 pull-right" icon="dollar" size="24"/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card>
                    <Card.Header>
                        Transaction Log
                    </Card.Header>
                    <Card.Body>
                        <div className="mb-5">
                            <div className="toolbar ">
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-icon btn-white" dataToggle="tooltip" title="Trash" id="btn-trash">
                                        <FeatherIcon icon="trash" className="text-muted"/>
                                    </button>
                                    <button className="btn btn-sm btn-icon btn-white sort " data-sort="item-title" data-toggle="tooltip" title="Sort">
                                        <i className="sorting"></i>
                                    </button>
                                </div>
                                <form className="flex">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-theme form-control-sm search" placeholder="Search" required/>
                                        <span className="input-group-append">
                                            <button className="btn btn-white no-border btn-sm" type="button">
                                            <span className="d-flex text-muted"><FeatherIcon icon="search" size="16"/></span>
                                        </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="table-responsive">
                                <Table className="table table-theme table-row v-middle">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>S/N
                                            </th>
                                            <th className="text-muted">Provider Name</th>
                                            <th className="text-muted">Unique ID.</th>
                                            <th className="text-muted"><span>Month</span></th>
                                            <th style={{width: "50px"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=" v-middle" dataId="15">
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                <div className="item-title text-color ">Samson Samuels</div>                                            
                                            </td>
                                            <td>
                                                <div className="item-title text-color ">MDFT1234</div>                                            
                                            </td>
                                            <td>
                                                <span className="item-title text-color">
                                                    February
                                                </span>
                                            </td>
                                            <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item><Link to="/admin/providers/stats">View stats</Link></Dropdown.Item>
                                                    <Dropdown.Item><Link to="/admin/providers/payment">Make payment</Link></Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                
                    </Card.Body>
                </Card>
                <div className="d-flex">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                    <small className="text-muted py-2 mx-2">Total <span id="count">15</span> items</small>
                </div>
            </Container>
        </AuthLayout>
    )
}

export default PastTransaction