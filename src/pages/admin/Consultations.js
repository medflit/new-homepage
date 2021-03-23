import React from 'react'

import AuthLayout from '../../layouts/auth'
import ConsultationLog from './snippets/ConsultationLog'
import DirectConsultation from './snippets/DirectConsultation'

import FeatherIcon from 'feather-icons-react'

import {Container} from 'react-bootstrap'

const Consultations = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Consultations</h2>
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
                <div className="consultation-log">
                    <ConsultationLog/>
                </div>
            </Container>
        </AuthLayout>
    )
}

export default Consultations