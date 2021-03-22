import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

import { useForm } from 'react-hook-form'

import config from '../api/index'

import PropTypes from 'prop-types';

// import LoginAdmin from '../services/Auth'

import DefaultLayout from '../layouts/default'

import { useHistory } from "react-router-dom";

// async function LoginAdmin(credentials) {
//     // let history = useHistory();
//     return fetch(`${config.baseUrl}/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//             body: JSON.stringify(credentials)
//         })
//         .then(data => data.json()
//     )
// }

// {setToken}
function AdminLogin() {
    const { register, handleSubmit, errors } = useForm();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    // const [alert, setAlert] = useState(false)

    const history = useHistory();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setMessage({
            data: "Login in progress...",
            type: "alert-warning",
        });
        fetch(`${config.baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(({ error, data }) => {
                setMessage({
                    data: error ? "Invalid email/username or password" : "Logged in successfully, redirecting...",
                    type: error ? "alert-danger" : "alert-success",
                });
                !error &&
                    setTimeout(() => {
                        localStorage.setItem("access_token", data.access_token);
                        history.push("/admin/dashboard");
                        // setAlert(false);
                    }, 3000);

                !error && e.target.reset();
            });
        
        // setAlert(true);
    };


    return (
        <DefaultLayout>
            <Row className="mt-5">
                <Col md={{ span: 4, offset: 4 }} className="bordered">
                    {message && (
                        <div
                            className={`alert fade show d-flex ${message.type}`}
                            role="alert"
                        >
                            {message.data}
                            <span
                            aria-hidden="true"
                            className="ml-auto cursor-pointer"
                            onClick={() => setMessage(null)}
                            >
                            &times;
                            </span>
                        </div>
                    )}
                    <Form onSubmit={ handleSubmit(onSubmit) }>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address/Username</Form.Label>
                            <Form.Control type="text" 
                                // id="username" 
                                name="username" 
                                placeholder="Enter username/email" 
                                onChange={e => setUsername(e.target.value)} 
                                ref= {
                                    register({
                                        required: {
                                            value: true,
                                            message: "Please enter your username/email address",
                                        },
                                    })
                                }
                                required
                            />
                            {/**
                             * we provide validation configuration for email field above
                             * error message are displayed with code below
                             */}
                            {errors.username && (
                                <span className="danger">
                                    {errors.email.message}
                                </span>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                // id="password" 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={e => setPassword(e.target.value)} 
                                ref= {
                                    register({
                                        required: {
                                            value: true,
                                            message: "Please enter your password",
                                        },
                                    })
                                }
                                required
                            />
                            {errors.password && (
                                <span className="danger">
                                {errors.password.message}
                                </span>
                            )}
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button className="primary-bg" type="submit">
                            Login
                        </Button>

                        
                    </Form>
                </Col>
            </Row>
        </DefaultLayout>
            
    )
}

AdminLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default AdminLogin