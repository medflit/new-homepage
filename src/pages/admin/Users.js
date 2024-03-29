import React, { useState, useEffect } from 'react'
import { Row, Container, Table, Dropdown, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import * as service from '../../api/index'

import FeatherIcon from 'feather-icons-react'
import {Spinner} from 'react-bootstrap'
import AuthLayout from '../../layouts/auth'
import { ToastContainer, toast } from 'react-toastify';

function Users() {
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [searchValue, setSearchValue] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loadText, setLoadText] = useState("");
    useEffect(() => {
        getAllUsers(1);
    }, [])

    const navigate = useNavigate();

    const getAllUsers = async (pageNumber) => {
        const response = await fetch(`${service.config.baseUrl + service.config.allUsers}?page=${pageNumber}`, {
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

    const handleSearch = (e) => {
        e.preventDefault();
        setLoadText("Loading ")
        setLoading(true)
        fetch(`${service.config.baseUrl + service.config.searchPatient}${searchValue}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.data.length === 0) {
                toast.error("User does not exist", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                // setSearch(data.data);
                const userID = data.data[0].user_id;
                 
                fetch(`${service.config.baseUrl + service.config.findUser}${userID}`, {
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
                            navigate(
                                `/admin/search-user/${searchValue}`,
                                {
                                    state: {
                                        userDetails: data2.data,
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
    // }
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }

    let renderPageNumbers;

    renderPageNumbers = pageNumbers.map(number => {
        let classes = currentPage === number ? 'page-item active' : 'page-item';
      
        if (number === 1 || number === total || (number >= currentPage - 2 && number <= currentPage + 19)) {
            return (
                <li className={classes}>
                    <span className="page-link" key={number} onClick={() => getAllUsers(number)}>{number}</span>
                </li>
            );
        }

        return ""
    });


    return (
        <AuthLayout>
            <ToastContainer/>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">All Users</h2>
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
                    <Card>
                        <Card.Header>
                            All Users
                            <span className="pull-right">
                                {loadText} &nbsp;{loading && <Spinner animation="border" size="7" role="status">
                                </Spinner>}</span>
                        </Card.Header>
                        <Card.Body>

                            <div className="mb-5">
                                <div className="toolbar ">
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-icon btn-white" data-toggle="tooltip" title="Trash" id="btn-trash">
                                            <FeatherIcon icon="trash" className="text-muted"/>
                                        </button>
                                        <button className="btn btn-sm btn-icon btn-white sort " data-sort="item-title" data-toggle="tooltip" title="Sort">
                                            <i className="sorting"></i>
                                        </button>
                                    </div>
                                    <form className="flex" onSubmit={handleSearch}>
                                        <div className="input-group">
                                            <input type="text" className="form-control form-control-theme form-control-sm search" placeholder="Search" onChange={e => setSearchValue(e.target.value)}/>
                                            <span className="input-group-append">
                                                <button className="btn btn-white no-border btn-sm" type="submit">
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
                                        { users && users.map((user, index) => {
                                            // console.log(user); 
                                            return(  
                                                <tr className="v-middle" key={user?.id}>
                                                <td>
                                                    <div className="item-title text-color">{index + 1}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.firstname}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.lastname}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.medical_id}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.email}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.gender}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.phone}</div>
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
                                                            {user.usertype === 2 ? <Dropdown.Item><Link to={`/admin/profile/patient/${user.id}`} state={{ "id": user.id}}>View</Link></Dropdown.Item> : <Dropdown.Item><Link to={`/admin/profile/provider/${user.id}`} state={{ "id": user.id}}>View</Link></Dropdown.Item> }
                                                            
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