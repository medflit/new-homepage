import React from 'react'
import { Card, Row, Col, Container, Table, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'

function Providers() {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Providers List</h2>
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
                                        <th style={{width: "20px"}}>
                                            <label className="ui-check m-0">
                                                <input type="checkbox"/>
                                                <i></i>
                                            </label>
                                        </th>
                                        <th className="text-muted">Full Name</th>
                                        <th className="text-muted">Prof. Class</th>
                                        <th className="text-muted d-none d-sm-block">Medical Org.</th>
                                        <th className="text-muted d-none d-sm-block">Org. Tel</th>
                                        <th className="text-muted"><span className="">License ID</span></th>
                                        <th className="text-muted"><span className="">Resume</span></th>
                                        <th className="text-muted"><span className="">Uni. Cert.</span></th>
                                        <th className="text-muted"><span className="">Med. License.</span></th>
                                        <th className="text-muted"><span className="d-none d-sm-block">Provider status</span></th>
                                        <th style={{width: "50px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" v-middle" dataId="15">
                                        <td>
                                            <label className="ui-check m-0 ">
                                                <input type="checkbox" name="id" value="15"/>
                                                <i></i>
                                            </label>
                                        </td>
                                        <td>
                                            <div className="item-title text-color ">Samson S.</div>                                            
                                        </td>
                                        <td className="flex">
                                            <div className=" d-none d-sm-block item-title text-color ">---</div>
                                        </td>
                                        <td className="flex">
                                            <div className=" d-none d-sm-block item-title text-color ">---</div>
                                        </td>
                                        <td>
                                            <div className="item-except text-muted text-sm h-1x">
                                                MDFT1234543
                                            </div>
                                        </td>
                                        <td className="flex">
                                            <div className=" d-none d-sm-block item-title text-color ">---</div>
                                        </td>
                                        
                                        <td className="flex">
                                            <div className=" d-none d-sm-block item-title text-color ">---</div>
                                        </td>
                                        <td className="flex">
                                            <div className=" d-none d-sm-block item-title text-color ">---</div>
                                        </td>
                                        <td>
                                            <span className=" d-none d-sm-block badge badge-secondary badge-sm">
                                                Unverify
                                            </span>
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item><Link to="/admin/profile/provider">View</Link></Dropdown.Item>
                                                    <Dropdown.Item href="#">Verify</Dropdown.Item>
                                                    <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#">Add to free plan</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    </tbody>
                            </Table>
                        </div>
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
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default Providers