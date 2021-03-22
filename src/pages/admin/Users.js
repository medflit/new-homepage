import React, { useState, useEffect } from 'react'
import { Row, Container, Table, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from '../../api/index'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])


    const url = '/admin/users';

    const getAllUsers = async () => {
        const response = await fetch(`${config.baseUrl}` + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();
        // console.log(jsonData.data.data)
        setUsers(jsonData.data.data);
    };

    const dateFormat = (ddd) => {
        // let ddd = "";
        ddd = ddd.split("-");
        let newDate = new Date( ddd[2], ddd[1] - 1, ddd[0]);
        console.log(newDate.getTime());

        return (newDate.getDate())
    }


    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">All Users</h2>
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
                                        <th style={{width: "20px"}}>
                                            <label className="ui-check m-0">
                                                <input type="checkbox"/>
                                                <i></i>
                                            </label>
                                        </th>
                                        <th className="text-muted">First Name</th>
                                        <th className="text-muted">Last Name</th>
                                        <th className="text-muted">Unique ID</th>
                                        <th className="text-muted">Email</th>
                                        <th className="text-muted">Gender</th>
                                        <th className="text-muted">Phone</th>
                                        <th className="text-muted">Type</th>
                                        <th style={{width: "50px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                { users.map((user, index) => {
                                    // console.log(user); 
                                      return(  
                                        <tr className="v-middle" key={user.id}>
                                        <td>
                                            <label className="ui-check m-0 ">
                                                <input type="checkbox" name="id" value="15"/>
                                                <i></i>
                                            </label>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.usertype === 2 ? user.profile.firstname : "-"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.usertype === 2 ? user.profile.lastname : "-"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.usertype === 2 ? user.profile.medical_id : "-"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.email}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.usertype === 2 ? user.profile.gender : "-"}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{user.phone}</div>
                                        </td>
                                        <td>
                                            <div className="item-title text-color">{(user.usertype === 2 ? "Patient" : "Provider")}</div> 
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item><Link to="/admin/profile/patient">View</Link></Dropdown.Item>
                                                    {/* <Dropdown.Item href="#">Block</Dropdown.Item> */}
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
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">4</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">5</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                            <small className="text-muted py-2 mx-2">Total <span id="count">15</span> items</small>
                        </div>
                    </div>
                </Row>
            </Container>
        </AuthLayout>
    
    )
}

export default Users