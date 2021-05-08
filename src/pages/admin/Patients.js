import React, { useState, useEffect } from 'react'
import { Row, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import config from '../../api/index'

import {dateFormatting} from '../../helpers/functions'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'
import { ToastContainer, toast } from 'react-toastify';

function Patients() {
    const [patients, setPatient] = useState([]);
    const [search, setSearch] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();

    const history = useHistory();

    useEffect(() => {
        getAllPatients(1);
    }, [])

    const getAllPatients = async (pageNumber) => {
        const url = '/patients/find';
        const response = await fetch(`${config.baseUrl}` + url + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setPatient(jsonData.data);
        setTotal(jsonData.paginator.total);
        setPerPage(jsonData.paginator.per_page);
        setCurrentPage(jsonData.paginator.current_page);
    };

    const handleSearch = (e) => {
        // e.preventDefault();
        if (e.key === 'Enter') {
            e.preventDefault();
            fetch('http://helloworld.com.ng/medflit-api/api/patients/search?q=' + `${e.target.value}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (data.data.length === 0) {
                    toast.error("Patient does not exist", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    // setSearch(data.data);
                    const userID = data.data[0].user_id;
                    const url = '/admin/users/find?id=';
                    fetch(`${config.baseUrl}` + url + `${userID}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("access_token"),
                        },
                    }).then((response) =>{
                        return response.json();
                    }).then((data2) => {
                        if(data2.error) {
                            console.log(data2.message)
                        } else {
                            setTimeout(() => {
                                history.push(
                                    {
                                        pathname: `/admin/search-patient/${e.target.value}`,
                                        state: {
                                            patientDetail: data2.data,
                                        }
                                });
                                // setAlert(false);
                            }, 1000);
                        }
                    })

                }
            }).catch((error) => {
                console.log(error);
            })
        }
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
                    <span className="page-link" key={number} onClick={() => getAllPatients(number)}>{number}</span>
                </li>
            );
        }
    });


    return (
        <AuthLayout>
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Patients List</h2>
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
                            Patients List
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
                                    <input type="text" className="form-control form-control-theme form-control-sm search" placeholder="Search" onKeyDown={handleSearch}/>
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
                                { patients.map((patient, index) => {
                                    // console.log(patient); 
                                      return(  
                                        <tr className="v-middle" key={patient?.id}>
                                        {/* <td>
                                            <label className="ui-check m-0 ">
                                                <input type="checkbox" name="id" value="15"/>
                                                <i></i>
                                            </label>
                                        </td> */}
                                        <td>
                                            <div className="item-title text-color">{index + 1}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.email}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.profile?.firstname}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.profile?.lastname}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.profile?.medical_id}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.subscription?.active ? <span class='badge badge-success'>Subscribed</span> : <span class='badge badge-secondary'>Not subscribed</span>}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.subscription?.expires_at ? patient.subscription.expires_at : "Not Subscribed"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{dateFormatting(patient?.profile?.created_at)}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{patient?.subscription?.active ? <span class='badge badge-success'>Active</span> : <span class='badge badge-secondary'>Not Active</span> }</div> 
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                {/* onClick={() => viewUser(patient.id)} */}
                                                
                                                    <Dropdown.Item>
                                                        <Link to={{pathname: `/admin/profile/patient/${patient.id}`, state: { "patientID": patient?.id, 
                                                        "providerProfileID": patient?.subscription?.assigned_doctor?.provider?.profile_id,
                                                                 "patientProfileID": patient?.profile?.id, 
                                                                 "providerID": patient?.subscription?.assigned_doctor?.id, 
                                                                 "subID": patient?.subscription?.id
                                                                 }}}>View</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">Block</Dropdown.Item>
                                                    <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                      )
                                    })}
                                </tbody> 
                            </Table>
                        </div>
                        <div className="d-flex">
                            <ul className="pagination">
                                <li className="page-item">
                                    <span className="page-link" aria-label="Previous">
                                        <span aria-hidden="true" onClick={() => getAllPatients(currentPage - 1)}>&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </li>
                                    {renderPageNumbers}
                                <li className="page-item">
                                    <span className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true" onClick={() => getAllPatients(currentPage + 1)}>&raquo;</span>
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

export default Patients