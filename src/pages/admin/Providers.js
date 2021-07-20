import React from 'react'
import { Row, Container, Table, Card, Dropdown } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import * as service from '../../api/index'
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import { capitalize, checkResume, checkMedicalLicense, checkUniCert } from '../../helpers/functions'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'

function Providers() {
    const [providers, setProvider] = useState([]);
    // const [user, setUser] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();

    const history = useHistory();

    useEffect(() => {
        getAllProviders(1);
    }, [])

    const verify = async (email) => {
        const response = await fetch(`${service.config.baseUrl + service.config.verifyDoctor} ?email=${email}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        })

        const jsonData = await response.json()
       
        .then(({error, response}) => {            
            !error &&
                toast.success("User verified successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 3000);

            error && 
            toast.error("Cannot verify user!", {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    };

    const getAllProviders = async (pageNumber) => {
        const response = await fetch(`${service.config.baseUrl + service.config.providerList}?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setProvider(jsonData.data);
        setTotal(jsonData.paginator.total);
        setPerPage(jsonData.paginator.per_page);
        setCurrentPage(jsonData.paginator.current_page);
    };

    const handleSearch = (e) => {
            e.preventDefault();
            fetch(`${service.config.baseUrl + service.config.searchDoctor}${searchValue}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access_token"),
                }
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (data.data.length === 0) {
                    toast.error("Doctor does not exist", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    // setSearch(data.data);
                    const userID = data.data[0].user_id;
                    const userType = data.data[0].usertype;

                    if (userType === 3) {
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
                                    history.push(
                                        {
                                            pathname: `/admin/search-doctor/${searchValue}`,
                                            state: {
                                                doctorDetail: data2.data,
                                            }
                                    });
                                    // setAlert(false);
                                }, 1000);
                            }
                        })
                    } else {
                        toast.error("Not a valid provider information", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    }

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
      
        if (number === 1 || number === total || (number >= currentPage - 2 && number <= currentPage + 2)) {
            return (
                <li className={classes}>
                    <span className="page-link" key={number} onClick={() => getAllProviders(number)}>{number}</span>
                </li>
            );
        }

        return ""
    });

    return (
        <AuthLayout>
            <ToastContainer />
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Providers List</h2>
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
                            Providers List
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-5">
                                <div className="toolbar ">
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-icon btn-white" title="Trash" id="btn-trash">
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
                                                <th style={{width: "20px"}}>
                                                    <label className="ui-check m-0">
                                                        <input type="checkbox"/>
                                                        <i></i>
                                                    </label>
                                                </th>
                                                <th className="text-muted">Full Name</th>
                                                <th className="text-muted">Unique ID</th>
                                                <th className="text-muted">Prof. Class</th>
                                                <th className="text-muted">Medical Org.</th>
                                                <th className="text-muted">Org. Tel</th>
                                                <th className="text-muted">License ID</th>
                                                <th className="text-muted">Resume</th>
                                                <th className="text-muted">Uni. Cert.</th>
                                                <th className="text-muted">Med. License.</th>
                                                <th className="text-muted">Provider status</th>
                                                <th style={{width: "50px"}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { providers && providers.map((provider, index) => {
                                                // console.log(provider);
                                                
                                                return (
                                                    <tr className=" v-middle" key={provider.id}>
                                                        <td>
                                                            <label className="ui-check m-0 ">
                                                                <input type="checkbox" name="id" value="15"/>
                                                                <i></i>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <div className="item-title text-color ">{capitalize(provider?.biodata?.firstname + " " + provider?.biodata?.lastname) }</div>                                            
                                                        </td>
                                                        <td className="flex">
                                                            <div className="item-title text-color ">{provider?.biodata?.medical_id}</div>
                                                        </td>
                                                        <td className="flex">
                                                            <div className="item-title text-color ">{provider?.provider?.hospital_name}</div>
                                                        </td>
                                                        <td>
                                                            <div className="item-title text-color">
                                                            {provider?.phone}
                                                            </div>
                                                        </td>
                                                        <td className="flex">
                                                            <div className="item-title text-color ">{provider?.provider?.licenses?.id_number}</div>
                                                        </td>
                                                        
                                                        <td className="flex">
                                                            <div className="item-title text-color ">
                                                            {provider?.provider?.uploaded_documents && <a href={checkResume(provider?.provider?.uploaded_documents).url}>View</a>}
                                                            </div>
                                                        </td>
                                                        <td className="flex">
                                                            <div className=" item-title text-color ">{provider?.provider?.uploaded_documents && <a href={checkMedicalLicense(provider?.provider?.uploaded_documents).url}>View</a>}</div>
                                                        </td>
                                                        <td className="flex">
                                                            <div className=" item-title text-color ">{provider?.provider?.uploaded_documents && <a href={checkUniCert(provider?.provider?.uploaded_documents).url}>View</a>}</div>
                                                        </td>
                                                        <td>
                                                            {provider?.publish ? <span className="badge badge-success">
                                                                Verified
                                                            </span> : <span className=" badge badge-secondary">
                                                                Not verified
                                                            </span>}
                                                            
                                                        </td>
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                                    <FeatherIcon icon="more-vertical" size="16"/>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item><Link to={{pathname: `/admin/profile/provider/${provider?.biodata?.user_id}`, state: { "id": provider?.biodata?.user_id}}}>View</Link></Dropdown.Item>
                                                                    {provider?.publish ? <Dropdown.Item>Unverify</Dropdown.Item> : <Dropdown.Item onClick={() => verify(provider?.email)} >Verify</Dropdown.Item> }
                                                                    
                                                                    <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                                                                    <Dropdown.Item>Add to free plan</Dropdown.Item>
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
                                                <span aria-hidden="true" onClick={() => getAllProviders(currentPage - 1)}>&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </span>
                                        </li>
                                            {renderPageNumbers}
                                        <li className="page-item">
                                            <span className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true" onClick={() => getAllProviders(currentPage + 1)}>&raquo;</span>
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

export default Providers