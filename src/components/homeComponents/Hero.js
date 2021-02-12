import React, { Component } from 'react'
import heroIllustration from '../../assets/images/hero_image.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Route, Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col className="p-5 m-auto">
                        <h1>Nigeria First Integrated Telemedicine</h1>
                        <p>Medflit is a convenient and affordable telemedicine
                            platform that allows you to talk to a board-certified 
                            doctor by phone or video  healthcare, accessible on mobile and online for everyone</p>
                        <div className="mt-5 br">
                            <div className="mt-3 download-btn">
                                <Link to="/playstore">
                                    <img src={ playStore } className="img-fluid mr-3 app-btn" width="" alt=""/>
                                </Link>
                                <Link to="/appStore">
                                    <img src={ appStore } className="img-fluid app-btn" width="" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block">
                        <div>
                            <img src={ heroIllustration } className="hero_img" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero