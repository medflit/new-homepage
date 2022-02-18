import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import AuthLayout from '../../layouts/auth'
import * as service from '../../api'
import FeatherIcon from 'feather-icons-react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

import {Spinner} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';


const EditAssignment = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    
    const [showAssignForm, setShowAssignForm] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(true);

    const [patient, setPatientProfile] = useState();
    const [providerName, setProviderName] = useState();

    const [provider, setProvider] = useState();
    const [doctorPID, setDoctorPID] = useState("");
    const [providerUID, setProviderUID] = useState(state.providerUID);
    // const [patientID, setPatientID] = useState(state.patientID)

    const [currentDoc, setCurrentDoc] = useState();
    const [newDocUID, setNewDocUID] = useState("");

    const [loading, setLoading] = useState(false);
    const [assignLoading, setAssignLoading] = useState(false);
    const [searchText, setSearchText] = useState("Search");
    const [assignText, setAssignText] = useState("Assign");


    console.log({state})
    const patientID = state.patientID;
    const subID = state.subID;
    const patientPID = state.patientPID;
    const providerPID = state.providerPID;
    // const providerUID = state.providerUID;

    useEffect(() => {
        getPatientProfile(patientID);
    }, [])

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
        // console.log(jsonData.data)
        setCurrentDoc(jsonData.data.subscription.assigned_doctor.biodata.firstname + " " + jsonData.data.subscription.assigned_doctor.biodata.lastname)
    }

    console.log(patient)

    const handleChange = (e) => {
        console.log("iddd: ", e.target.value)
        setProviderUID(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSearchText("Searching...");

        fetch(`${service.config.baseUrl + service.config.searchDoctor}${providerUID}`, {
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
                setProvider(data.data[0].firstname + " " + data.data[0].lastname);
                // console.log(provider)
                // setProviderUID(data.data[0].medical_id)
                setDoctorPID(data.data[0].profile_id)
                // setNewDoctorUID(data.data[0].medical_id)
                setShowSearchForm(false);
                setShowAssignForm(true);
            }
        })
    }

    


    const assignDoctor = (e) => {
        e.preventDefault();
        setAssignLoading(true);
        setAssignText("Assigning...");
        const data = {
            "subscription_id" : subID,
            "patient_id" : patientPID,
            "provider_id" : doctorPID,
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
                    navigate(
                        '/admin/assignment-log'
                    )
                }, 5000);
                // let pUID = newDoctorUID;
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
                        <span className="btn btn-md text-muted">
                            <span className="d-sm-inline mx-1 breadcrumb-text"></span>
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
                                <small>Current Doctor: </small><span style={{fontWeight: "700", color: "darkred"}}>{currentDoc}</span>
                                </Card.Header>
                                <Card.Body>
                                    <Form className="">
                                        <Form.Group controlId="formBasicEmail">
                                                
                                            <Form.Label>Enter new Doctor's Unique ID </Form.Label>
                                            <Form.Control type="text" 
                                                // id="username" 
                                                // name={newDocUID}
                                                // defaultValue={newDoctorUID}
                                                value={providerUID}
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
                                                <Button size="sm" type="submit" onClick={handleSearch} variant="primary"> {loading && <Spinner animation="border" size="16" role="status">
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
                                    <Form className="">
                                        <Form.Group controlId="formBasicEmail">
                                                
                                            <Form.Label>New Doctor's Name <span style={{fontWeight: "700", color: "darkred"}}>{provider}</span></Form.Label>
                                            <Form.Control type="text" 
                                                // id="username" 
                                                name="doctorPID"
                                                value={doctorPID}
                                                disabled
                                                />
                                                
                                        </Form.Group>
                                        <Row className="justify-center">
                                            <div>
                                                <Button size="sm" type="submit" onClick={assignDoctor} variant="primary"> {assignLoading && <Spinner animation="border" size="16" role="status">
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