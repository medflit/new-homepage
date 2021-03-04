import React from 'react'

import AuthLayout from '../../layouts/auth'
import ConsultationLog from './snippets/ConsultationLog'
import DirectConsultation from './snippets/DirectConsultation'

import {Container} from 'react-bootstrap'

const Consultations = () => {
    return (
        <AuthLayout>
            <Container>
                <div className="consultation-log">
                    <ConsultationLog/>
                </div>
                <div className="direct-consult mt-5">
                    <DirectConsultation/>
                </div>
            </Container>
        </AuthLayout>
    )
}

export default Consultations