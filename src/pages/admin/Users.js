import React, { useState, useEffect } from 'react'
import { Row, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from '../../api/index'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'

function Users() {
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        getAllUsers(1);
    }, [])


    const url = '/admin/users';

    const getAllUsers = async (pageNumber) => {
        const response = await fetch(`${config.baseUrl}` + url + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();
        // console.log(jsonData.data.data)
        setUsers(jsonData.data.data);
        setTotal(jsonData.data.total);
        setPerPage(jsonData.data.per_page);
        setCurrentPage(jsonData.data.current_page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }

    let renderPageNumbers;

    renderPageNumbers = pageNumbers.map(number => {
        let classes = currentPage === number ? 'page-item active' : 'page-item';
      
        return (
            
            <li className={classes}>
                <span className="page-link" key={number} onClick={() => getAllUsers(number)}>{number}</span>
            </li>
        );
    });


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
                    <Card>
                        <Card.Header>
                            All Users
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
                                        <li className="page-item">
                                            <span className="page-link" aria-label="Previous">
                                                <span aria-hidden="true" onClick={() => getAllUsers(currentPage - 1)}>&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </li>
                                            {renderPageNumbers}
                                        <li className="page-item">
                                            <span className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true" onClick={() => getAllUsers(currentPage + 1)}>&raquo;</span>
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

export default Users