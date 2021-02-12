import React, { Components } from 'react'
import heroIllustration from '../../assets/images/hero_image.png';

import { Container, Row, Col } from 'react-bootstrap';


function Benefits() {
    return(
        <section className="benefits">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2>Amazing Benefits</h2>
                        <p>Here are the amazing stuffs you can benefit from using Medflit and many more.</p>
                    </Col>
                </Row>
                <div>
                    <Row className="border-around">
                        <Col md={4} sm={6} xs={12} className="border-right hover padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top_ padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-top_ hover padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-top hover padding-inner">
                            <img src={ heroIllustration } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Benefits