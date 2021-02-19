import React, { Components } from 'react'
import handPhone from '../../assets/images/handphone.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';
import powerful from '../../assets/images/powerful.png';

import customer from '../../assets/images/customer.png';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';

function Testimonials() {
    return(
        <section className="testimonials">
            <Container>
                <div className="primary-color-bg testimonial-inner">
                    <Row>
                        <Col md={12} className="">
                            <h3>What our customers are saying</h3>
                        </Col>
                        <Col className="mt-5">
                            <Carousel className="text-center" controls={false} indicators={false}>
                                <Carousel.Item>
                                    <p>"This is the best medical lab. I love everything about this<br className="d-none d-md-block"/> app, you can call, chat and video chat a doctor for a <br className="d-none d-md-block"/>whole month for just 1k!
                                    "</p>
                                    <h5>Taofeeq Alade</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"It started as abdominal pain,  then painful urination and discharge, <br className="d-none d-md-block"/> i was reluctant to visit a physical hospital because of their judgmental.  I consulted doctors online, <br className="d-none d-md-block"/> he ordered a test and medications and the pain stopped. <br className="d-none d-md-block"/> Thank you medflit
                                    "</p>
                                    <h5>Caroline Chuckwuemeka</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"I had infection, consulted medflit doctor online, <br className="d-none d-md-block"/>he prescribed medications that I took and I felt better.
                                    "</p>
                                    <h5>Jerry Samuel</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"I had infection, consulted medflit doctor online, <br className="d-none d-md-block"/>he prescribed medications that I took and I felt better.
                                    "</p>
                                    <h5>Titilayo Demilade</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"This app had helped me conceive I have PCOS <br className="d-none d-md-block"/>and was told I would never have kids. This app helped me conceive.<br className="d-none d-md-block"/> So thankful. Highly recommended.
                                    "</p>
                                    <h5>Jessica Anthony</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"Simply the best at what it does. I used Medflit to track my cycle, <br className="d-none d-md-block"/>I got notifications about ovulation, and within 1 <br className="d-none d-md-block"/>month of trying to conceive we got pregnant.
                                    "</p>
                                    <h5>Joan Nicholas</h5>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>"Amazing! This has been a helpful and amazing app. <br className="d-none d-md-block"/>I got pregnant in one try. Thanks alot.
                                    "</p>
                                    <h5>Pea Johnson</h5>
                                </Carousel.Item>
                            </Carousel>
                        </Col> 
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials