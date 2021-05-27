import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

import { useForm } from 'react-hook-form'

import config from '../api/index'

import PropTypes from 'prop-types';

// import LoginAdmin from '../services/Auth'

import DefaultLayout from '../layouts/default'

import { useHistory } from "react-router-dom";

// {setToken}
function AdminLogin() {
    const { register, handleSubmit, errors } = useForm();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    const history = useHistory();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setMessage({
            data: "Login in progress...",
            type: "alert-warning",
        });
        fetch(`${config.baseUrl + config.login}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // const error = true;s
                console.log(data);
                if ( data.error ) {
                    // const error = false;
                    setMessage({
                        data: data.message,
                        type: "alert-danger",
                    });
                    
                } else {
                    // const error = true;
                    if (data.data.usertype === 1) {
                        setMessage({
                            data: data.message + ", redirecting to dashboard...",
                            type: "alert-success"
                        })
                        setTimeout(() => {
                            console.log(data)
                            localStorage.setItem("access_token", data.data.access_token);
                            history.push("/admin/dashboard");
                        }, 3000);
                    } else {
                        setMessage({
                            data: "Not an administrator",
                            type: "alert-danger"
                        })
                    }   
                }
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