import React, { Components } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

function Pricing() {
    return(
        <section className="pricing">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2>How we charge</h2>
                        {/* <p>We have considered medflit to be more affordable and pocket friendly.</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col md="5">
                        <p>Firstly, get an appointment with a <br className="d-md-block" /> Doctor for as low as N1k.</p>
                        <h6>Show benefits</h6>

                        <p>Lastly, purchase a treatment plan after <br className="d-md-block" /> finished talking to your doctor</p>
                        <h6>Show benefits</h6>
                    </Col>
                    <Col md="7">
                        <div className="pricing-plan">
                            <h5>Book a Doctor</h5>
                            <p className="small"><small>Unlimited access to a Doctor</small></p>

                            <h2>N1,000 <span className="sub"><sup>/ Month</sup></span></h2>
                            <h6>read more</h6>

                            <hr />
                            <div className="perk">
                                <p>30 mins voice call</p>
                                <p>30 mins video call</p>
                                <p>Unlimited chat</p>
                                <p>One doctor per month</p>
                            </div>                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing