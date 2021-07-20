import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Card, Table, Dropdown, Button, Form, Modal} from 'react-bootstrap'
import AuthLayout from '../../layouts/auth'
import * as service from '../../api/index'
import FeatherIcon from 'feather-icons-react'

import {Spinner} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

import { useHistory } from "react-router-dom";


const AssignmentLog = () => {
    const [modalShow, setModalShow] = useState(false);
    const [assignedPatients, setAssignedPatients] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();

    const [doctorUID, setDoctorUID] = useState();
    const [patientUID, setPatientUID] = useState();

    const [patient, setPatient] = useState();
    const [provider, setProvider] = useState();

    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("Search");

    const history = useHistory();

    useEffect(() => {
        getAllAssignedPatients(1);
    }, [])

    const getAllAssignedPatients = async (pageNumber) => {
        const response = await fetch(`${service.config.baseUrl + service.config.patientList}` + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();
        // console.log(jsonData.data.data)
        setAssignedPatients(jsonData.data);
        setTotal(jsonData.paginator.total);
        setPerPage(jsonData.paginator.per_page);
        setCurrentPage(jsonData.paginator.current_page);
    }

    const handleClick = () => {
        setLoading(true);
        setSearchText("Searching...");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Promise.all([
            fetch(`${service.config.baseUrl + service.config.searchPatient}` + `${patientUID}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
            fetch(`${service.config.baseUrl + service.config.searchDoctor}` + `${doctorUID}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }),
        ]).then((responses) => {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                // console.log(response.json())
                return response.json();
            }));
        }).then((data) => {
            if(data[0].data.length === 0) {
                toast.error("Patient does not exist", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } if(data[1].data.length === 0) {
                toast.error("Doctor does not exist", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } 
            else {
                setPatient(data[0].data);
                setProvider(data[1].data);
                setTimeout(() => {
                    history.push(
                        {
                            pathname: "/admin/assign-doctor",
                            state: {
                                patientDetail: data[0].data[0],
                                doctorDetail: data[1].data[0]
                            }
                    });
                    // setAlert(false);
                }, 3000);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }

    let renderPageNumbers;

    renderPageNumbers = pageNumbers.map(number => {
        let classes = currentPage === number ? 'page-item active' : 'page-item';
      
        if (number == 1 || number == total || (number >= currentPage - 2 && number <= currentPage + 2)) {
            return (
                <li className={classes}>
                    <span className="page-link" key={number} onClick={() => getAllAssignedPatients(number)}>{number}</span>
                </li>
            );
        }
    });

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
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Patient Unique ID</Form.Label>
                            <Form.Control type="text" 
                                // id="username" 
                                name="patientUID" 
                                placeholder="MF0000"
                                value={patientUID}
                                onChange={e => setPatientUID(e.target.value)} 
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Doctor's Unique ID</Form.Label>
                            <Form.Control type="text" 
                                // id="username" 
                                name="doctorUID" 
                                placeholder="MF0909" 
                                value={doctorUID}
                                onChange={e => setDoctorUID(e.target.value)} 
                                />
                        </Form.Group>
                        <Row className="justify-center">
                            <div>
                                <Button size="sm" type="submit" onClick={handleClick} variant="primary"> {loading && <Spinner animation="border" size="16" role="status">
                                </Spinner>}
                                &nbsp;{searchText}</Button>
                            </div>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Assignment Log</h2>
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
                            Assignment Log <span className="pull-right"><Button variant="primary" size="xs" onClick={() => setModalShow(true)}>Assign New</Button></span>
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
                                                <th className="text-muted">Patient #</th>
                                                <th className="text-muted">Patient Name</th>
                                                <th className="text-muted">Doctor #</th>
                                                <th className="text-muted">Assigned Doctor</th>
                                                <th className="text-muted">Sub Type</th>
                                                <th className="text-muted">Expiry Date</th>
                                                <th className="text-muted">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { assignedPatients && assignedPatients.map((patient, index) => {

                                                if(patient?.subscription?.assigned_doctor !== null && patient?.subscription?.active === true) {
                                                    return (
                                                        <tr className="v-middle" key={patient?.id}>
                                                            <td>
                                                                <div className="item-title text-color">{patient?.biodata?.medical_id}</div>
                                                            </td>
                                                            <td>
                                                                <div className="item-title text-color">{patient?.biodata?.firstname + " " + patient?.profile?.lastname}</div>
                                                            </td>
                                                            
                                                            <td>
                                                                <div className="item-title text-color">{patient?.subscription?.assigned_doctor?.biodata?.medical_id }</div>
                                                            </td>
                                                            <td>
                                                                <div className="item-title text-color">{patient?.subscription?.assigned_doctor?.biodata?.firstname + " " + patient?.subscription?.assigned_doctor?.biodata?.lastname}</div>
                                                            </td>
                                                            <td>
                                                                <div className="item-title text-color">{patient?.subscription?.plan?.name}</div>
                                                            </td>
                                                            <td>
                                                                <div className="item-title text-color">{patient?.subscription?.expires_at}</div>
                                                            </td>
                                                            <td>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                                        <FeatherIcon icon="more-vertical" size="16"/>
                                                                    </Dropdown.Toggle>
    
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item ><Link to={{pathname: `/admin/edit-assignment/${patient?.biodata?.user_id}`, state: { 
                                                                            "patientID": patient?.biodata?.user_id, "patientPID": patient?.profile?.id, "subID": patient?.subscription?.id, "providerPID": patient?.subscription?.assigned_doctor?.biodata?.id, "providerUID": patient?.subscription?.assigned_doctor?.biodata?.medical_id}}}>Edit</Link></Dropdown.Item>
                                                                        <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                
                                            }) }
                                            
                                        </tbody>
                                    </Table>
                                </div>
                                
                                <div className="d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <span className="page-link" aria-label="Previous">
                                                <span aria-hidden="true" onClick={() => getAllAssignedPatients(currentPage - 1)}>&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </li>
                                            {renderPageNumbers}
                                        <li className="page-item">
                                            <span className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true" onClick={() => getAllAssignedPatients(currentPage + 1)}>&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </span>
                                        </li>
                                    </ul>
                                    <small className="text-muted py-2 mx-2">Total <span id="count">{total}</span> items</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default AssignmentLog