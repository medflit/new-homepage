import React, { Components } from 'react'
import powerful from '../../assets/images/powerful.png';
import pickup from '../../assets/images/pickup.png';
import screening from '../../assets/images/screening.png';
import emr from '../../assets/images/emr.png';
import drug from '../../assets/images/drug.png';
import payment from '../../assets/images/easy-payment.png';
import instant from '../../assets/images/instant.png';
import affordable from '../../assets/images/affordable.png';

import { Container, Row, Col } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.scss';

function WhyMedflit() {
    return(
        <section className="why-medflit">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2>Why Medflit?</h2>
                    </Col>
                </Row>
                <Row className="dd">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={true}
                        breakpoints={{
                            
                            400: {
                                width: 400,
                                slidesPerView: 2,
                            },
                          }}
                        >
                        <SwiperSlide className="medflit-item">
                            <img src={ powerful } width="100" alt="" className="float-righ"/>
                            <h5>Powerful</h5>
                            <p className="">Powerful technology that enables Video, Chat, and Audio Calls</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ pickup } width="100" alt="" className="float-righ"/>
                            <h5>Prescription Pickup</h5>
                            <p className="">Pick up prescriptions at your preferred pharmacy location.</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ screening } width="100" alt="" className="float-righ"/>
                            <h5>Health Screening</h5>
                            <p className="">Health screening, diagnosis and treatment of non-emergency medical conditions.</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ emr } width="100" alt="" className="float-righ"/>
                            <h5>EMR</h5>
                            <p className="">Electronic Retrieval of Medical Records</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ affordable } width="100" alt="" className="float-righ"/>
                            <h5>Affordable</h5>
                            <p className="">Affordable healthcare services at flat rate.</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ payment } width="100" alt="" className="float-righ"/>
                            <h5>Easy Payment</h5>
                            <p className="">Provision of Medflit Card for easy payment and other payment options.</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ instant } width="100" alt="" className="float-righ"/>
                            <h5>Instant Access</h5>
                            <p className="">Instant access to a wide pool of qualified doctors of various specialties.</p>
                        </SwiperSlide>
                        <SwiperSlide className="medflit-item">
                            <img src={ drug } width="100" alt="" className="float-righ"/>
                            <h5>Drug Prescription</h5>
                            <p className="">Digital prescriptions and drugs delivery to your home or office..</p>
                        </SwiperSlide>
                    </Swiper>                    
                </Row>
            </Container>
        </section>
    )
}

SwiperCore.use([Autoplay]);

export default WhyMedflit