import React from "react";
import { useState, useEffect } from 'react'
import config from '../../../api/index'

import { Row, Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dateFormatting } from '../../../helpers/functions'

import FeatherIcon from 'feather-icons-react'

const ConsultationLog = () => {
    const [consultations, setConsultations] = useState([]);
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();


    useEffect(() => {
        getAllConsultations(1);
    }, []);

    const getAllConsultations = async (pageNumber) => {
        const response = await fetch(`${config.baseUrl + config.allConsultations}` + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setConsultations(jsonData.data.data);
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
        
        if (number == 1 || number == total || (number >= currentPage - 2 && number <= currentPage + 2)) {
            return (
                <li className={classes}>
                    <span className="page-link" key={number} onClick={() => getAllConsultations(number)}>{number}</span>
                </li>
            );
        }
    });



    return (
        <div>
            <Row>
                <Card>
                    <Card.Header>
                        Consultation Log
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
                                    <th style={{width: "20px"}}>S/N
                                    </th>
                                    {/* <th className="text-muted">Consult. ID</th> */}
                                    <th className="text-muted">Patient</th>
                                    <th className="text-muted">Unique ID.</th>
                                    <th className="text-muted">Doctor</th>
                                    <th className="text-muted">Diagnosis</th>
                                    <th className="text-muted"><span>Date</span></th>
                                    <th style={{width: "50px"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultations.map((consultation, index) => {
                                    // console.log(consultation);

                                    return (
                                    <tr className=" v-middle" key={consultation.id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    {/* <td>
                                        {consultation?.id}
                                    </td> */}
                                    <td>
                                        <div className="item-title text-color ">{consultation?.patient?.firstname + " " + consultation?.patient?.lastname}</div>                                            
                                    </td>
                                    <td>
                                        <div className="item-title text-color ">{consultation?.patient?.medical_id}</div>                                            
                                    </td>
                                    <td>
                                        <div className="item-title text-color ">{consultation?.provider?.firstname + " " + consultation?.provider?.lastname}</div>
                                        
                                    </td>
                                    <td>
                                        <div className="item-title text-color h-1x">
                                            {consultation?.dianosis}
                                        </div>
                                    </td>
                                    <td>
                                        <span className="item-title text-color">
                                            {dateFormatting(consultation.created_at)}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={{pathname: `/admin/consultation-details/${consultation.id}`, state: { "patient_id": consultation?.patient?.user_id, "id": consultation?.id}}} className="badge badge-secondary badge-md">View</Link>
                                        {/* <a href="#" className="badge badge-secondary badge-md">View</a> */}
                                    </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </div>
                    </div>
            
                    </Card.Body>
                </Card>
            </Row>
            <div className="d-flex">
                <ul className="pagination">
                    <li className="page-item">
                        <span className="page-link" aria-label="Previous">
                            <span aria-hidden="true" onClick={() => getAllConsultations(currentPage - 1)}>&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </span>
                    </li>
                        {renderPageNumbers}
                    <li className="page-item">
                        <span className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true" onClick={() => getAllConsultations(currentPage + 1)}>&raquo;</span>
                            <span className="sr-only">Next</span>
                        </span>
                    </li>
                </ul>
                <small className="text-muted py-2 mx-2">Total <span id="count">{total}</span> items</small>
            </div>
        </div>
    )
}

export default ConsultationLog