import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Container, Accordion, Button } from 'react-bootstrap'
import * as service from '../../../api'
import { useLocation } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import {formatNumber}  from '../../../helpers/functions'

import AuthLayout from '../../../layouts/auth'

import {Spinner} from 'react-bootstrap'

function Patient() {
    const [patient, setPatientProfile] = useState();
    const [treat, setTreatment] = useState();
    const [countries, setCountry] = useState();
    const [treatmentPlanID, setTreatmentPlanID] = useState(null);

    const [loading, setLoading] = useState(false);
    const [activateText, setActivateText] = useState("Activate")

    const {state} = useLocation();

    console.log(state)

    useEffect(() => {
        getPatientProfile(getID());
        treatmentPlans(getID());
        listOption();
        getID();
    }, []);

    const patientProfileID = state.patientProfileID;
    const patientID = state.id;
    const providerProfileID = state.providerProfileID;
    const subID = state.subID;

    const getID = () => {
        const id = state.id;
        return id;
    }

    const listOption = () => {
        fetch(`${service.config.baseUrl + service.config.listOptions}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setCountry(data.data.countries);
        })        
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
    };

    const activateSub = async () => {
        setLoading(true);
        setActivateText("Activating...");
        const data = {
            "paid_at": "29-03-2021",
            "profile_id": patientProfileID,
            "channel": "Transfer",
            "description": "Subscription",
            "amount": 1000,
            "payable_id": 1,
            "payable_type": "App\\Models\\Subscription",
            "payment_for": "subscribe",
            "duration_id": 1,
            "treatment_id": 1
        }
        const response = await fetch(`${service.config.baseUrl + service.config.activatePay}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            body: JSON.stringify(data)
        });

        const jsonData = await response.json()

        .then(({error, response}) => {            
            !error &&
                toast.success("Subscription activated successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);

            error && 
            toast.error("Error activating subscription!", {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    }

    const treatmentPlans = async (id) => {
        const response = await fetch(`${service.config.baseUrl + service.config.userTreatment}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setTreatment(jsonData.data);
        setTreatmentPlanID(jsonData.data?.data[0]?.treatment_plan_id)
    }

    // console.log("treatmentPlanID: ", treatmentPlanID);
    const activateTreatment = async () => {

        setLoading(true);
        setActivateText("Activating...");

        const data = {
            "treatment_plan_id" : treatmentPlanID,
            "provider_id" : providerProfileID,
            "patient_id" : patientProfileID,
            "subscription_id" : subID,
        }

        const response = await fetch(`${service.config.baseUrl + service.config.activateTreatment}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            body: JSON.stringify(data)
        });

        const json_returns = await response.json()

        .then((data) => {  
            if (data.error) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                // setTimeout(() => {
                //     window.location.reload();
                // }, 1000);
            } else {
                // console.log("You can proceed")
                // console.log(data)
                const treatment_id = data.data.id
                const amount = data.data.treatmentPlan.price

                const data2 = {
                    "paid_at": "29-03-2021",
                    "profile_id": patientProfileID,
                    "channel": "Transfer",
                    "description": "Treatment",
                    "amount": amount,
                    "payable_id": 1,
                    "payable_type": "App\\Models\\Treatment",
                    "payment_for": "treatment",
                    "duration_id": 1,
                    "treatment_id": treatment_id
                }

                fetch(`${service.config.baseUrl + service.config.activatePay}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("access_token"),
                    },
                    body: JSON.stringify(data2)
                }).then((res) => {
                    return res.json()
                }).then((data) => {
                    if(data.error) {
                        toast.error(data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    } else {
                        toast.success("Treatment plan activated successfully!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                })
            }
        });

    }

    return (
        <AuthLayout>
            
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Patient Profile</h2>
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
                    <Col md={4} className="order-md-2">
                        <Card>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={4}>
                                            <img src={ ProfileImage } alt="" className="w-80 avatar img-fluid mb-3"/>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="page-title m-auto">
                                                <small className="text-muted">{patient?.biodata?.medical_id}</small>
                                                <h2 className="text-md text-highlight">{patient?.biodata?.firstname + " " + patient?.biodata?.lastname}</h2>
                                            </div>
                                            <hr/>
                                            <div className="page-title m-auto">
                                                <small className="text-muted">Current balance</small>
                                                <h2 className="text-md text-highlight">N0</h2>
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
                                            {patient?.subscription?.active === false ?
                                                <div>
                                                    <div className="mb-3">
                                                        <small className="text-muted">You have not subscribed yet. Subscribe now to make unlimited calls to doctors.</small>
                                                    </div>
                                                    <Button variant="primary" size="xs"  onClick={()=> activateSub()}>{activateText}</Button>
                                                </div>
                                                
                                                 :  <div className="page-title m-auto">
                                                        <small className="text-muted">Plan:</small>
                                                        <h2 className="text-md text-highlight">{patient?.subscription?.plan?.name} (Paid)</h2>
                                                    </div>   
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* Treatment Code here */}

                        { patient?.subscription?.active !== false ?
                        <Card>
                            <Card.Header>
                                Treatment Plan
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={12}>
                                            { treat?.total === 0 ?
                                                <div>
                                                    <div className="mb-3">
                                                        <small className="text-muted">You do not have an active treatment plan.</small>
                                                    </div>
                                                    
                                                </div>
                                                
                                                :  
                                                <div className="page-title m-auto">
                                                    <small className="text-muted">Plan:</small>
                                                    { treat?.data[0]?.payment === null ?
                                                        <div><h2 className="text-md text-highlight">{treat?.data[0]?.treatmentPlan?.name + " - N" + formatNumber(treat?.data[0]?.treatmentPlan?.price)} (Not paid)</h2>
                                                        <Button variant="primary" size="xs" onClick={activateTreatment}> {loading && <Spinner animation="border" size="16" role="status">
                                                            </Spinner>}
                                                            &nbsp;{activateText}
                                                        </Button></div>

                                                        : <h2 className="text-md text-highlight">{treat?.data[0]?.treatmentPlan?.name} (Paid)</h2>
                                                    }
                                                </div>   
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>                            
                        </Card>

                        : <div></div>
                        }

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
                                                    <input type="text" className="form-control" defaultValue={patient?.biodata?.firstname} readOnly/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Lastname</label>
                                                    <input type="text" className="form-control" defaultValue={patient?.biodata?.lastname} readOnly/>
                                                </div>
                                            </div>                                            
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control" defaultValue={patient?.email} readOnly />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" defaultValue={patient?.username} readOnly/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Marital Status</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option defaultValue={patient?.marital_status}>{patient?.marital_status}</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Gender</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option defaultValue={patient?.biodata?.gender}>{patient?.biodata?.gender}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Occupation</label>
                                                    <input type="text" className="form-control" defaultValue={patient?.occupation} readOnly/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Date of Birth</label>
                                                    <input type="text" className="form-control" defaultValue={patient?.biodata?.dob} readOnly/>
                                                </div>
                                            </div>  
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Genotype</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option defaultValue={patient?.biodata?.patient?.genotype}>{patient?.biodata?.patient?.genotype}</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Blood group</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option defaultValue={patient?.biodata?.patient?.blood_group}>{patient?.biodata?.patient?.blood_group}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Telephone</label>
                                                    <input type="text" className="form-control" defaultValue={patient?.phone} readOnly/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Select Country</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">  
                                                        { countries?.map((country, index) => {
                                                            if(country?.id === patient?.biodata?.country) {
                                                                let curCountry = country?.name
                                                                return (<option defaultValue={curCountry}>{curCountry}</option>)
                                                            }
                                                            }) 
                                                        }                                                        
                                                    </select>
                                                </div>
                                            </div>  
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea className="form-control" rows="6" data-minwords="6" readOnly placeholder="Type your message" value={patient?.addresses[0]?.street + ", " + patient?.biodata?.city}>{patient?.addresses[0]?.street + ", " + patient?.biodata?.city}</textarea>
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
                                            {/* <Accordion.Toggle variant="link" eventKey="0">
                                                <div className="d-flex align-items-center pointer">
                                                    <div>
                                                        <span className="w-48 avatar circle bg-info-lt" data-toggle-className="loading">
                                                            <img src={ProfileImage} alt="."/>
                                                        </span>
                                                    </div>
                                                    <div className="flex"></div>
                                                    <div className="mx-3">
                                                        <FeatherIcon icon="chevron-right" size="16"/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle> */}
                                            <Accordion.Collapse eventKey="0">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Profile picture</label>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="customFile"/>
                                                            <label className="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mt-2">Update</button>
                                                </form>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <div className="mt-4 align-items-center b-t pointer">
                                            <div className="mb-3">
                                                <div><p className="pro-serv">Change Password</p></div>
                                            </div>
                                            <div className="flex"></div>
                                            <form>
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