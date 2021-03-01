import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom'

import DefaultLayout from '../layouts/default'

function AdminLogin() {
    return (
        <DefaultLayout>
            <Row className="mt-5">
                <Col md={{ span: 4, offset: 4 }} className="bordered">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address/Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Link to="/admin/dashboard" className="primary-bg" type="submit">
                            Submit
                        </Link>
                    </Form>
                </Col>
            </Row>
        </DefaultLayout>
            
    )
}

export default AdminLogin