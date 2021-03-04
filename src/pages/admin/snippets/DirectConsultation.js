import React from 'react'

import { Row, Col, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'

const DirectConsultation = () => {
    return (
        <div>
                <Row>
                    <Card>
                        <Card.Header>
                            Direct Consultation
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
                                        <th className="text-muted">Patient</th>
                                        <th className="text-muted">Unique ID</th>
                                        <th className="text-muted">Doctor</th>
                                        <th className="text-muted"><span className="">Diagnosis</span></th>
                                        <th className="text-muted"><span>Consultation No.</span></th>
                                        <th className="text-muted"><span>Date</span></th>
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
                                            <div className="item-title text-color ">Sim Shagaya</div>
                                            
                                        </td>
                                        <td>
                                            <div className="item-title text-color ">
                                                Headache
                                            </div>
                                        </td>
                                        <td>
                                            <span className="item-title text-color ">
                                                CON443344
                                            </span>
                                        </td>
                                        <td>
                                            <span className="item-title text-color ">
                                                Wed, 14th Feb, 2021
                                            </span>
                                        </td>
                                        <td>
                                            <a href="#" className="badge badge-secondary badge-md">View</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            </Row>
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
        </div>
    )
}

export default DirectConsultation