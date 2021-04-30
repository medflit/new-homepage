import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Container, Accordion, Button, Modal, Form } from 'react-bootstrap'
import config from '../../../api'
import { useLocation } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import AuthLayout from '../../../layouts/auth'

import {formatNumber} from '../../../helpers/functions'

// import getList from '../../../helpers/functions' 

function Patient() {
    const [modalShow, setModalShow] = useState(false);
    const [patient, setPatientProfile] = useState();
    const [treat, setTreatment] = useState();
    // const [subscription, setSubscription] = useState();
    const [amount, setAmount] = useState();
    const [countries, setCountry] = useState();
    const [treatmentPlan, setTreatmentPlan] = useState();
    const [treatmentPlanID, setTreatmentPlanID] = useState(1);

    const location = useLocation();

    // console.log("Location: ", location);

    useEffect(() => {
        getPatientProfile(getID());
        treatmentPlans(getID());
        listOption();
        getProviderID();
        getID();
        getPatientProfileID();
        getProviderProfileID();
        getProviderID();
        getSubID();
    }, []);
    // const patientID = location.state.patientID;
    const patientProfileID = location.state.patientProfileID;
    console.log("PPID",patientProfileID);
    // const providerID = location.state.providerID;
    const providerProfileID = location.state.providerProfileID;
    console.log("PPIID", providerProfileID)
    const subID = location.state.subID;
    console.log("subID", subID)


    const getID = () => {
        const patientID = location.state.patientID;

        console.log("patientID - ", patientID);
        return patientID;
    }

    const getPatientProfileID = () => {
        const patientProfileID = location.state.patientProfileID;
        console.log("patientProfileID: " , patientProfileID)
        return patientProfileID;
    }

    const getProviderID = () => {
        const providerID = location.state.providerID;
        console.log("providerID: " , providerID)
        return providerID;
    }

    const getProviderProfileID = () => {
        const providerProfileID = location.state.providerProfileID;
        console.log("providerProfileID: " , providerProfileID)
        return providerProfileID;
    }

    const getSubID = () => {
        const subID = location.state.subID;
        console.log("subID: " , subID)
        return subID;
    }

    const listOption = () => {
        let url = 'https://helloworld.com.ng/medflit-api/api/list-options';
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setCountry(data.data.countries);
            // console.log(data.data.treatmentPlans);
            setTreatmentPlan(data.data.treatmentPlans);
        })        
    }
    
    // const id = getID();
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
    };

    // let patientProfileID = patient?.profile?.id;

    // let subID = patient?.subscription?.id;

    // let providerProfileID = patient?.subscription?.assigned_doctor?.provider?.profile_id;

    const activateSub = async () => {
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
        const response = await fetch(`${config.baseUrl}/admin/banks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            body: JSON.stringify(data)
        });

        const jsonData = await response.json()
        // console.log(jsonData);
        // setSubscription(jsonData)

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

    const handleChange = (e) => {
        setTreatmentPlanID(e.target.value);
        console.log("Treatment Plan Selected!! " + treatmentPlanID);
    }

    const treatmentPlans = async (id) => {
        const url = '/calls/treatment/get?user_id=';
        const response = await fetch(`${config.baseUrl}` + url + `${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setTreatment(jsonData.data);
        console.log(jsonData.data)
    }

    // const treatmentAmount = e => {
    //     const amount = e.target.dataset.amount;

    //     return amount;
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const treatment_plan_id = e.target.value;
        // console.log("tpid: " + treatment_plan_id);
        // const amount = e.target.dataset.amount;

        const first_data = {
            "treatment_plan_id" : treatmentPlanID,
            "provider_id" : providerProfileID,
            "patient_id" : patientProfileID,
            "subscription_id" : subID,
        }

        const response = await fetch(`${config.baseUrl}/calls/treatment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            body: JSON.stringify(first_data)
        });

        const json_returns = await response.json()
        // console.log(json_returns.data)

        .then(({error, response}) => {  
            if (error) {
                console.log(error);
                toast.error("No doctor assigned to this patient yet!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                // console.log("You can proceed")
                toast.success("Treatment plan activated successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        });

    }

    return (
        <AuthLayout>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
                >
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
                <Modal.Body>
                    <Form className="" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Select Treatment Plan</label>
                                <select className="form-control" name="treatmentPlanID" value={treatmentPlanID} onChange={handleChange} data-plugin="select2"  data-option="{}" data-minimum-results-for-search="Infinity">  
                                    { treatmentPlan?.map((treatment, index) => {
                                        // console.log(treatment?.id);
                                        return (
                                        <option value={treatment?.id} data-amount={parseInt(treatment?.price)}>{treatment?.name} ({treatment?.class}) - ({formatNumber(treatment?.price)})</option>
                                        )
                                    })}                                                        
                                </select>
                            </div>
                        </div>
                        <Row className="justify-center">
                            <div className="mr-2">
                                <Button size="xs" variant="outline-primary" onClick={() => setModalShow(false)}>Cancel</Button>
                            </div>
                            <div>
                                <Button size="xs" type="submit" variant="primary">Activate</Button>
                            </div>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>

            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Patient Profile</h2>
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
                    <Col md={4} className="order-md-2">
                        <Card>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={4}>
                                            <img src={ ProfileImage } className="w-80 avatar img-fluid mb-3"/>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="page-title m-auto">
                                                <small className="text-muted">{patient?.profile?.medical_id}</small>
                                                <h2 className="text-md text-highlight">{patient?.profile?.firstname + " " + patient?.profile?.lastname}</h2>
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
                                                    <Button variant="primary" size="xs"  onClick={()=> activateSub()}>Activate</Button>
                                                </div>
                                                
                                                 :  <div className="page-title m-auto">
                                                        <small className="text-muted">Plan:</small>
                                                        <h2 className="text-md text-highlight">{patient?.subscription?.plan?.name}</h2>
                                                    </div>   
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                        { patient?.subscription?.active !== false ?
                        <Card>
                            <Card.Header>
                                Treatment Plans
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
                                                    <small className="text-muted">Plans:</small>
                                                    { treat?.data?.map((plan, index) => {
                                                        return (
                                                            
                                                            <span>
                                                            <li className="text-sm text-highlight">{plan?.treatmentPlan?.name} (N{formatNumber(plan?.treatmentPlan?.price)})</li>
                                                            {/* <li className="text-sm text-highlight"></li> */}
                                                            </span>
                                                        )
                                                    }) }
                                                </div>   
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                            { treat?.total > 0 ? 

                                <div></div> :
                                <Card.Footer>
                                    <Button variant="primary" size="xs" onClick={() => setModalShow(true)}>Activate Treatment</Button>
                                </Card.Footer>
                            }
                            
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
                                                    <input type="text" className="form-control" value={patient?.profile?.firstname} required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Lastname</label>
                                                    <input type="text" className="form-control" value={patient?.profile?.lastname} required/>
                                                </div>
                                            </div>                                            
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Email Address</label>
                                                    <input type="email" className="form-control" value={patient?.email} required />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" value={patient?.username} required/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Marital Status</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value={patient?.marital_status}>{patient?.marital_status}</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Gender</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value={patient?.profile?.gender}>{patient?.profile?.gender}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Occupation</label>
                                                    <input type="text" className="form-control" value={patient?.occupation} required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Date of Birth</label>
                                                    <input type="text" className="form-control" value={patient?.profile?.dob} required/>
                                                </div>
                                            </div>  
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Genotype</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value={patient?.profile?.patient?.genotype}>{patient?.profile?.patient?.genotype}</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Blood group</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                        <option value={patient?.profile?.patient?.blood_group}>{patient?.profile?.patient?.blood_group}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Telephone</label>
                                                    <input type="text" className="form-control" value={patient?.phone} required/>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Select Country</label>
                                                    <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">  
                                                        { countries?.map((country, index) => {
                                                            if(country?.id === patient?.profile?.country) {
                                                                let curCountry = country?.name
                                                                return (<option value={curCountry}>{curCountry}</option>)
                                                            }
                                                            }) 
                                                        }                                                        
                                                    </select>
                                                </div>
                                            </div>  
                                            <div className="form-group">
                                                <label>Address</label>
                                                <textarea className="form-control" rows="6" data-minwords="6" required placeholder="Type your message" value={patient?.addresses[0]?.street + ", " + patient?.profile?.city}>{patient?.addresses[0]?.street + ", " + patient?.profile?.city}</textarea>
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
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <div className="d-flex align-items-center pointer">
                                                    <div>
                                                        <span class="w-48 avatar circle bg-info-lt" data-toggle-class="loading">
                                                            <img src={ProfileImage} alt="."/>
                                                        </span>
                                                    </div>
                                                    <div class="flex"></div>
                                                    <div class="mx-3">
                                                        <FeatherIcon icon="chevron-right" size="16"/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <form role="form">
                                                    <div class="form-group">
                                                        <label>Profile picture</label>
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" id="customFile"/>
                                                            <label class="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary mt-2">Update</button>
                                                </form>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <div className="mt-4 align-items-center b-t pointer">
                                            <div className="mb-3">
                                                <div><p className="pro-serv">Change Password</p></div>
                                            </div>
                                            <div className="flex"></div>
                                            <form role="form">
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