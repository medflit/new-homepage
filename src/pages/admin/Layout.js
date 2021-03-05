import React from 'react'

import AuthLayout from '../../layouts/auth'

import FeatherIcon from 'feather-icons-react'

import { Link } from 'react-router-dom'

import { Container, Row, Col, Table, Card } from 'react-bootstrap'

const Component = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Title</h2>
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

            </Container>

        </AuthLayout>
    )
}

export default Component