import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import AuthLayout from '../../layouts/auth'
import * as service from '../../api'
import FeatherIcon from 'feather-icons-react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

import {Spinner} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';


const EditAssignment = () => {
    const [showAssignForm, setShowAssignForm] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(true);
    const [patient, setPatientProfile] = useState();
    const [providerName, setProviderName] = useState();
    const [providers, setProviders] = useState();
    const [doctorPID, setDoctorPID] = useState();
    const [newDoctorUID, setNewDoctorUID] = useState();
    const [newDoctorName, setNewDoctorName] = useState();
    const [providerUID, setProviderUID] = useState();

    const [loading, setLoading] = useState(false);
    const [assignLoading, setAssignLoading] = useState(false);
    const [searchText, setSearchText] = useState("Search");
    const [assignText, setAssignText] = useState("Assign");

    useEffect(() => {
        getProviderID();
        // getProviderUID();
        getPatientID();
        getSubID();
        getPatientProfile(getPatientID());
    })

    const location = useLocation();

    // console.log("Location: ", location);

    const getProviderID = () => {
        let providerID = location.state.providerID;

        // console.log("Provider ID - ", providerID);
        return providerID;
    }

    const getSubID = () => {
        let subID = location.state.subID;

        // console.log("sub ID - ", subID);
        return subID;
    }

    const getProviderUID = () => {
        let providerUID = location.state.providerUID;

        // console.log("Doctor UID - ", providerUID);
        return providerUID;
    }

    const getPatientID = () => {
        const patientID = location.state.patientID;

        // console.log("Patient ID - ", patientID);
        return patientID;
    }

    const getPatientProfile = async (id) => {
        const response = await fetch(`${service.config.baseUrl + service.config.findUser}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setPatientProfile(jsonData.data);
        // console.log(jsonData)
        setNewDoctorName(jsonData.data.subscription.assigned_doctor.biodata.firstname + " " + jsonData.data.subscription.assigned_doctor.biodata.lastname)
    }

    const getProviderName = async (id) => {
        const response = await fetch(`${service.config.baseUrl + service.config.findUser}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setProviderName(jsonData.data.biodata.firstname + " " + jsonData.data.biodata.lastname);
        // console.log(jsonData)
    }

    const handleClick = () => {
        setLoading(true);
        setSearchText("Searching...");
        setTimeout(() => {
            setShowSearchForm(false);
            setShowAssignForm(true);
        }, 3000);
    }

    const handleAssign = () => {
        setAssignLoading(true);
        setAssignText("Assigning...");
    }

    const handleChange = (e) => {
        console.log("iddd: ", e.target.value)
        setProviderUID(e.target.value)

        fetch(`${service.config.baseUrl + service.config.providerList}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setProviders(data.data);
            // console.log(data.data)

            data.data.map((dt,index) => {
                // console.log(dt);
                if(dt?.biodata?.medical_id === providerUID) {
                    setNewDoctorName(dt?.biodata?.firstname + " " + dt?.biodata?.lastname)
                }
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch(`${service.config.baseUrl + service.config.searchPatient}${providerUID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.data.length === 0) {
                toast.error("Doctor does not exist", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setProviders(data.data[0].firstname + " " + data.data[0].lastname);
                // setProviderUID(data.data[0].medical_id)
                setDoctorPID(data.data[0].id)
                setNewDoctorUID(data.data[0].medical_id)
            }
        })
    }

    const patientID = location.state.patientID;
    const subID = location.state.subID;
    const patientPID = location.state.patientPID;
    const providerPID = location.state.providerPID;
    const pUID = location.state.providerUID;


    const assignDoctor = (e) => {
        e.preventDefault();
        setDoctorPID(e.target.value)
        const data = {
            "subscription_id" : subID,
            "provider_id" : doctorPID,
            "patient_id" : patientPID
        }

        fetch(`${service.config.baseUrl + service.config.assignDoctor}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            // console.log(res.json())
            return res.json()
        })

        .then((data) => {  
            if (data.error) {
                // console.log(data);
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                
            } else {
                // console.log(data)
                toast.success("Doctor assigned successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                let pUID = newDoctorUID;
            }
        });
    }

    return (
        <AuthLayout>
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Edit Assigned Doctor</h2>
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
                    <Col md={6}>
                        { showSearchForm &&
                            (<Card>
                                <Card.Header>
                                <small>Current Doctor: </small><span className="pull-right" style={{fontWeight: "700", color: "darkred"}}>{newDoctorName}</span>
                                </Card.Header>
                                <Card.Body>
                                    <Form className="" onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                                
                                            <Form.Label>Doctor's Unique ID </Form.Label>
                                            <Form.Control type="text" 
                                                // id="username" 
                                                name="providerUID"
                                                defaultValue={newDoctorUID}
                                                value={newDoctorUID}
                                                onChange={handleChange}
                                                />
                                                
                                        </Form.Group>
                                        {/* {providers.map((provider, index) => {
                                                    if(provider?.biodata?.medical_id === providerUID) {
                                                        setDoctorName(provider?.biodata?.firstname + " " + provider?.biodata?.lastname)
                                                    }
                                                })} */}
                                        <Row className="justify-center">
                                            <div>
                                                <Button size="sm" type="submit" onClick={handleClick} variant="primary"> {loading && <Spinner animation="border" size="16" role="status">
                                                    </Spinner>}
                                                    &nbsp;{searchText}
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>)
                        }
                        { showAssignForm &&           
                            (<Card >
                                <Card.Body>
                                    <Form className="" onSubmit={assignDoctor}>
                                        <Form.Group controlId="formBasicEmail">
                                                
                                            <Form.Label>New Doctor's Name </Form.Label>
                                            <Form.Control type="text" 
                                                // id="username" 
                                                name="doctorPID"
                                                defaultValue={doctorPID}
                                                value={providers}
                                                disabled
                                                />
                                                
                                        </Form.Group>
                                        <Row className="justify-center">
                                            <div>
                                                <Button size="sm" type="submit" onClick={handleAssign} variant="primary"> {assignLoading && <Spinner animation="border" size="16" role="status">
                                                    </Spinner>}
                                                    &nbsp;{assignText}
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>)
                        }
                    </Col>

                      {/* <Col>   
                        
                    </Col> */}
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default EditAssignment