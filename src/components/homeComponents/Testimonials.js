import React, { Components } from 'react'
import handPhone from '../../assets/images/handphone.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';
import powerful from '../../assets/images/powerful.png';

import customer from '../../assets/images/customer.png';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

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
                            <Row>
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={true}
                                    breakpoints={{
                                        
                                        400: {
                                            width: 400,
                                            slidesPerView: 1,
                                        },
                                    }}
                                >
                                    <SwiperSlide className="ss">
                                        <p className="text-center">This is the best medical lab. I love everything about this<br className="d-none d-md-block"/> app, you can call, chat and video chat a doctor for a <br className="d-none d-md-block"/>whole month for just 1k!
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide className="ss">
                                        <p className="text-center">It started as abdominal pain,  then painful urination and discharge, <br className="d-none d-md-block"/> i was reluctant to visit a physical hospital because of their judgmental.  I consulted doctors online, <br className="d-none d-md-block"/> he ordered a test and medications and the pain stopped. <br className="d-none d-md-block"/> Thank you medflit
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide className="ss">
                                        <p className="text-center">I had infection, consulted medflit doctor online, <br className="d-none d-md-block"/>he prescribed medications that I took and I felt better.
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide className="ss">
                                        <p className="text-center">This app had helped me conceive I have PCOS <br className="d-none d-md-block"/>and was told I would never have kids. This app helped me conceive.<br className="d-none d-md-block"/> So thankful. Highly recommended.
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide className="ss">
                                        <p className="text-center">Simply the best at what it does. I used Medflit to track my cycle, <br className="d-none d-md-block"/>I got notifications about ovulation, and within 1 <br className="d-none d-md-block"/>month of trying to conceive we got pregnant.
                                        </p>
                                    </SwiperSlide>
                                    <SwiperSlide className="ss">
                                        <p className="text-center">Amazing! This has been a helpful and amazing app. <br className="d-none d-md-block"/>I got pregnant in one try. Thanks alot.
                                        </p>
                                    </SwiperSlide>
                                </Swiper>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

{/* <Col md={6}>
    <Row>
        <Col md={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
            <img src={ customer } width="100" alt=""/>                                    
        </Col>
        <Col md={6} xs={6} className="m-auto">
            <h5>Segun Obe</h5>
            <p className="customer-name">CEO, Paystack</p>                                   
        </Col>
        
    </Row>
</Col>
<Col md={6}>
    <p>“Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely”
    </p>
</Col> */}

export default Testimonials