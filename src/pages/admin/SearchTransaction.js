import React from 'react'
import AuthLayout from '../../layouts/auth'
import {Table, Col, Row, Container, Card, Dropdown} from 'react-bootstrap'
import { useLocation } from "react-router-dom";

import {formatNumber, getPaymentType} from '../../helpers/functions'

const SearchTransaction = () => {
    const location = useLocation()
    const patientTransactions = location.state.patientTransactions;

    return (
        <AuthLayout>
            <Container>
                <Row>
                    <Card>
                        <Card.Header>
                            Transactions for {patientTransactions[0]?.profile?.firstname + " " + patientTransactions[0]?.profile?.lastname}
                        </Card.Header>
                    <Card.Body>
                    <div className="mb-5">
                        <div className="table-responsive">
                            <Table className="table table-theme table-row v-middle">
                                <thead>
                                    <tr>
                                        <th className="text-muted">#</th>
                                        <th className="text-muted">Payment Type</th>
                                        <th className="text-muted">Amount</th>
                                        <th className="text-muted">Reason</th>
                                        <th className="text-muted">Status</th>
                                        <th className="text-muted">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { patientTransactions && patientTransactions.map((transaction, index) => {
                                        return (
                                            <tr className="v-middle" >
                                            
                                                <td>
                                                    <div className="item-title text-color">{index + 1}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{transaction?.provider?.channel === "card" ? <span className="badge badge-success badge-sm">Card</span> : <span className="badge badge-warning badge-sm">Transfer</span>}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{ transaction?.provider?.amount ? formatNumber(transaction?.provider?.amount) : "Null"}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{ transaction?.payable_type ? getPaymentType(transaction?.payable_type) : "Null"}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">
                                                        {transaction?.status ? <span className="badge badge-success badge-sm">Completed</span> : <span className="badge badge-success badge-sm">Completed</span>}
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
                    </div>
                    </Card.Body>
                    </Card>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default SearchTransaction