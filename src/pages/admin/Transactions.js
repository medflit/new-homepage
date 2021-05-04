import React, {useState, useEffect} from 'react'
import {Table, Col, Row, Container, Card, Dropdown} from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";
import config from '../../api/index'

import {formatNumber, getPaymentType} from '../../helpers/functions'

import FeatherIcon from 'feather-icons-react'

import AuthLayout from '../../layouts/auth'


const Transactions = () => {
    const [transactions, setTransaction] = useState();
    const [total, setTotal] = useState();
    const [perPage, setPerPage] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [name, setName] = useState();
    // const [id, getID] = useState();

    useEffect(() => {
        getAllTransactions();
        // getUsername(25);
        // getIDS();
        // ggg();
    }, []);

    const getAllTransactions = async (pageNumber) => {
        const url = '/payment/all';
        const response = await fetch(`${config.baseUrl}` + url + `?page=${pageNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();
        console.log(jsonData.data.data);
        setTransaction(jsonData.data.data);

        setTotal(jsonData.data.total);
        setPerPage(jsonData.data.per_page);
        setCurrentPage(jsonData.data.current_page);

    };

    const getID = async () => {
        await transactions.map((transaction) => {
            // console.log(transaction);
            let userID;
            userID = transaction.user_id;
            console.log(userID);
            return userID;
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
                    <span className="page-link" key={number} onClick={() => getAllTransactions(number)}>{number}</span>
                </li>
            );
        }
    });

    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">User Transactions</h2>
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
                            All Transactions
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
                                        <th className="text-muted">#</th>
                                        <th className="text-muted">User</th>
                                        <th className="text-muted">ID No</th>
                                        <th className="text-muted">Payment Type</th>
                                        <th className="text-muted">Amount</th>
                                        <th className="text-muted">Reason</th>
                                        <th className="text-muted">Status</th>
                                        <th className="text-muted">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { transactions && transactions.map((transaction, index) => {
                                        return (
                                            <tr className="v-middle" >
                                            
                                                <td>
                                                    <div className="item-title text-color">{index + 1}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{transaction?.profile?.firstname + " " + transaction?.profile?.lastname} </div>
                                                    
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{transaction?.profile?.medical_id}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{transaction?.provider?.channel === "card" ? <span className="badge badge-success badge-sm">Card</span> : <span className="badge badge-warning badge-sm">Transfer</span>}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">N{formatNumber(transaction?.provider?.amount)}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{getPaymentType(transaction?.payable_type)}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">
                                                        {transaction.status ? <span className="badge badge-success badge-sm">Completed</span> : <span className="badge badge-success badge-sm">Completed</span>}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{new Date(transaction?.created_at).toDateString()}</div>
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
                                        <span aria-hidden="true" onClick={() => getAllTransactions(currentPage - 1)}>&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </li>
                                    {renderPageNumbers}
                                <li className="page-item">
                                    <span className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true" onClick={() => getAllTransactions(currentPage + 1)}>&raquo;</span>
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

export default Transactions