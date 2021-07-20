import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import AuthLayout from '../../layouts/auth'
import * as service from '../../api'
import FeatherIcon from 'feather-icons-react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import {Spinner} from 'react-bootstrap'


const AssignDoctor = () => {
    // const [patient, setPatientProfile] = useState();
    const [patientSubID, setPatientSubID] = useState();
    const [assignText, setAssignText] = useState("Assign");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getSubID(patientID);

    })

    const location = useLocation();

    const patientPID = location.state.patientDetail.id;
    const patientData= location.state.patientDetail;
    // console.log(patientData)
    const doctorPID = location.state.doctorDetail.id;
    const doctorData = location.state.doctorDetail;
    // console.log(doctorData);
    const patientID = location.state.patientDetail.user_id;

    const getSubID = async (id) => {
        const response = await fetch(`${service.config.baseUrl + service.config.findUser}${patientID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setPatientSubID(jsonData.data.subscription.id);
    };

    const handleClick = () => {
        setLoading(true);
        setAssignText("Assigning...");
    }

    const assignDoctor = async (e) => {
        e.preventDefault();
        const data = {
            "subscription_id" : patientSubID,
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
                console.log(data)
                toast.success("Doctor assigned successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        });
    }

    return (
        <AuthLayout>
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Assign Doctor</h2>
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
                        <Card>
                            <Card.Body>
                                <Form className="" onSubmit={assignDoctor}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Patient's Name </Form.Label>
                                        <Form.Control type="text" 
                                            // id="username" 
                                            name="patientPID" 
                                            defaultValue={patientPID}
                                            value={patientData.firstname + " " + patientData.lastname}
                                            disabled
                                            />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Doctor's Name </Form.Label>
                                        <Form.Control type="text" 
                                            name="doctorPID"
                                            defaultValue={doctorPID}
                                            value={doctorData.firstname + " " + doctorData.lastname}
                                            disabled
                                        />
                                    </Form.Group>
                                    <Row className="justify-center">
                                        <div>
                                        <Button size="sm" type="submit" onClick={handleClick} variant="primary"> 
                                            {loading && <Spinner animation="border" size="16" role="status">
                                            </Spinner>}
                                            &nbsp;{assignText}</Button>
                                        </div>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default AssignDoctor