import React, { Components } from 'react'
import doctor from '../../assets/images/stethoscope.svg';
import pregnancy from '../../assets/images/pregnancy.svg';
import immunization from '../../assets/images/syringe.svg';
import calendar from '../../assets/images/calendar.svg';
import menstruation from '../../assets/images/pregnancy-test.svg';
import pay from '../../assets/images/edc.svg';

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
                            <img src={ doctor } width="100" className="" alt="" />
                            <h4>Book a Doctor</h4>
                            <p>Select out of the hundreds of professional doctors we have on our platform</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top_ padding-inner">
                            <img src={ calendar } width="100" className="" alt="" />
                            <h4>Free Pregnancy Calculator</h4>
                            <p>Helps pregnant women to calculate their due date and trimester throughout Pregnancy period.</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-top_ hover padding-inner">
                            <img src={ immunization } width="100" className="" alt="" />
                            <h4>Free Immunization Tracker</h4>
                            <p>Provides all the immunization schedules that are age appropriate for babies with a powerful reminder trackers.</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top padding-inner">
                            <img src={ menstruation } width="100" className="" alt="" />
                            <h4>Free Menstrual Calculator</h4>
                            <p>Helps women to track their menstrual cycle, fertile window, and ovulation day, for a higher chance of conceiving.</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-right hover border-top padding-inner">
                            <img src={ pregnancy } width="100" className="" alt="" />
                            <h4>Free Pregnancy Tracker</h4>
                            <p>This shows every milestone every baby should accomplish while in the womb every week till delivery at no cost.</p>
                        </Col>
                        <Col md={4} sm={6} xs={12} className="border-top hover padding-inner">
                            <img src={ pay } width="100" className="" alt="" />
                            <h4>Medflit Pay</h4>
                            <p>Medflit provides a credit facility that allows you to borrow money to buy drugs, do lab tests and consult doctors online.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Benefits