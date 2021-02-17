import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

function AdminLogin() {
    return (
        <div>
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
                        <Button className="primary-bg" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
            
    )
}

export default AdminLogin