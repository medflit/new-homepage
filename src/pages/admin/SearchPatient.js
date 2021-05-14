import React, { useEffect, useState } from 'react'

import {useLocation} from 'react-router-dom'
import AuthLayout from '../../layouts/auth';
import { Row, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {dateFormatting} from '../../helpers/functions'

import FeatherIcon from 'feather-icons-react'

const SearchPatient = () => {
    const location = useLocation()
    const patientDetail = location.state.patientDetail;

    // console.log(patientDetail)

    return (
        <AuthLayout>
            <Container>
                <Row>
                    <Card>
                        <Card.Header>
                            Patient
                        </Card.Header>
                    <Card.Body>
                    <div className="mb-5">
                        <div className="table-responsive">
                            <Table className="table table-theme table-row v-middle">
                                <thead>
                                    <tr>
                                        <th className="text-muted">S/N</th>
                                        <th className="text-muted">Email</th>
                                        <th className="text-muted">First Name</th>
                                        <th className="text-muted">Last Name</th>
                                        <th className="text-muted">Unique ID</th>
                                        <th className="text-muted">Sub status</th>
                                        <th className="text-muted">Sub Expiry</th>
                                        <th className="text-muted">Date</th>
                                        <th className="text-muted">Status</th>
                                        <th style={{width: "50px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr className="v-middle" key={patientDetail?.id}>
                                        
                                        <td>
                                            <div className="item-title text-color">1</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.email}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.biodata?.firstname}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.biodata?.lastname}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.biodata?.medical_id}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.subscription?.active ? <span class='badge badge-success'>Subscribed</span> : <span class='badge badge-secondary'>Not subscribed</span>}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.subscription?.expires_at ? patientDetail.subscription.expires_at : "Not Subscribed"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{dateFormatting(patientDetail?.created_at)}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patientDetail?.subscription?.active ? <span class='badge badge-success'>Active</span> : <span class='badge badge-secondary'>Not Active</span> }</div> 
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                {/* onClick={() => viewUser(patient.id)} */}
                                                
                                                    <Dropdown.Item>
                                                        <Link to={{pathname: `/admin/profile/patient/${patientDetail.id}`, state: { "patientID": patientDetail?.id, 
                                                        "providerProfileID": patientDetail?.subscription?.assigned_doctor?.provider?.profile_id,
                                                                 "patientProfileID": patientDetail?.biodata?.id, 
                                                                 "providerID": patientDetail?.subscription?.assigned_doctor?.id, 
                                                                 "subID": patientDetail?.subscription?.id
                                                                 }}}>View</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">Block</Dropdown.Item>
                                                    <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
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
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default SearchPatient