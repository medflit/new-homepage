import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import AuthLayout from '../../layouts/auth'
import config from '../../api'
import FeatherIcon from 'feather-icons-react'
import {Container, Row, Card, Form, Button} from 'react-bootstrap'


const EditAssignment = () => {
    const [patient, setPatientProfile] = useState();
    const [providerName, setProviderName] = useState();
    const [providers, setProviders] = useState();
    const [doctorID, setDoctorID] = useState();
    const [newDoctorName, setNewDoctorName] = useState();
    const [providerUID, setProviderUID] = useState();

    useEffect(() => {
        getProviderID();
        getProviderUID();
        getPatientID();
        // getDoctorName();
        getPatientProfile(getPatientID());
        // getProviderName(getProviderID());
    }, [])

    const location = useLocation();

    // console.log("Location: ", location);

    const getProviderID = () => {
        let providerID = location.state.providerID;

        // console.log("Provider ID - ", providerID);
        return providerID;
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
        const url = '/admin/users/find?id=';
        const response = await fetch(`${config.baseUrl}` + url + `${id}`, {
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
        const url = '/admin/users/find?id=';
        const response = await fetch(`${config.baseUrl}` + url + `${id}`, {
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

    const handleChange = (e) => {
        setDoctorID(e.target.value)


        // const getAllProviders = async () => {
        const url = '/providers';
        fetch(`${config.baseUrl}` + url, {
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
                if(dt?.biodata?.medical_id === doctorID) {
                    setNewDoctorName(dt?.biodata?.firstname + " " + dt?.biodata?.lastname)
                }
            })
        })
    }

    const handleSubmit = async (e) => {

    }

    return (
        <AuthLayout>
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
                    <Card>
                        <Card.Header>
                        <small>Doctor Name: </small>{newDoctorName}
                        </Card.Header>
                        <Card.Body>
                            <Form className="" onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                           
                                    <Form.Label>Doctor's Unique ID </Form.Label>
                                    <Form.Control type="text" 
                                        // id="username" 
                                        name="doctoruid" 
                                        data-id={getProviderID()}
                                        defaultValue={getProviderUID()}
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
                                        <Button size="sm" type="submit" variant="primary">Re-assign</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default EditAssignment