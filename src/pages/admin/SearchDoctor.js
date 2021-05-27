import React, { useEffect, useState } from 'react'

import {useLocation} from 'react-router-dom'
import AuthLayout from '../../layouts/auth';
import { Row, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {checkResume, checkMedicalLicense, checkUniCert, capitalize} from '../../helpers/functions'
import config from '../../api/index'
import FeatherIcon from 'feather-icons-react'

import { ToastContainer, toast } from 'react-toastify';

const SearchDoctor = () => {
    const location = useLocation()
    const doctorDetail = location.state.doctorDetail;

    const verify = async (email) => {
        const response = await fetch(`${config.baseUrl}` + "/admin/users/publish"  + `?email=${email}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        })

        const jsonData = await response.json()
       
        .then(({error, response}) => {            
            !error &&
                toast.success("User verified successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 3000);

            error && 
            toast.error("Cannot verify user!", {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    };

    return (
        <AuthLayout>
            <ToastContainer />
            <Container>
                <Row>
                    <Card>
                        <Card.Header>
                            Provider
                        </Card.Header>
                    <Card.Body>
                    <div className="mb-5">
                        <div className="table-responsive">
                            <Table className="table table-theme table-row v-middle">
                                <thead>
                                    <tr>
                                        <th className="text-muted">Full Name</th>
                                        <th className="text-muted">Unique ID</th>
                                        <th className="text-muted">Prof. Class</th>
                                        <th className="text-muted">Medical Org.</th>
                                        <th className="text-muted">Org. Tel</th>
                                        <th className="text-muted">License ID</th>
                                        <th className="text-muted">Resume</th>
                                        <th className="text-muted">Uni. Cert.</th>
                                        <th className="text-muted">Med. License.</th>
                                        <th className="text-muted">Provider status</th>
                                        <th style={{width: "50px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr className="v-middle" key={doctorDetail?.id}>
                                        
                                        <td>
                                            <div className="item-title text-color ">{capitalize(doctorDetail?.biodata?.firstname + " " + doctorDetail?.biodata?.lastname) }</div> 
                                        </td>
                                        <td>
                                            <div className="item-title text-color ">{doctorDetail?.biodata?.medical_id}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color ">{doctorDetail?.provider?.hospital_name}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">
                                            {doctorDetail.profile === null ? "-" : doctorDetail?.phone}
                                            </div>
                                        </td>
                                        <td className="flex">
                                            <div className="item-title text-color ">{doctorDetail?.biodata?.licenses?.id_number}</div>
                                        </td>
                                        <td className="flex">
                                            <div className="item-title text-color ">
                                            {doctorDetail?.provider?.uploaded_documents && <a href={checkResume(doctorDetail?.provider?.uploaded_documents).url}>View</a>}
                                            </div>
                                        </td>
                                        <td className="flex">
                                            <div className=" item-title text-color ">{doctorDetail?.provider?.uploaded_documents && <a href={checkMedicalLicense(doctorDetail?.provider?.uploaded_documents).url}>View</a>}</div>
                                        </td>
                                        <td className="flex">
                                            <div className=" item-title text-color ">{doctorDetail?.provider?.uploaded_documents && <a href={checkUniCert(doctorDetail?.provider?.uploaded_documents).url}>View</a>}</div>
                                        </td>
                                        <td>
                                            {doctorDetail?.publish ? <span className="badge badge-success">
                                                Verified
                                            </span> : <span className=" badge badge-secondary">
                                                Not verified
                                            </span>}
                                            
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item><Link to={{pathname: `/admin/profile/provider/${doctorDetail?.biodata?.user_id}`, state: { "id": doctorDetail?.biodata?.user_id}}}>View</Link></Dropdown.Item>
                                                    {doctorDetail.publish ? <Dropdown.Item>Unverify</Dropdown.Item> : <Dropdown.Item onClick={() => verify(doctorDetail.email)} >Verify</Dropdown.Item> }
                                                    
                                                    <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                                                    <Dropdown.Item>Add to free plan</Dropdown.Item>
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

export default SearchDoctor