import React from 'react'
import heroIllustration from '../../assets/images/hero_image.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Animate from 'animate.css-react'

function Hero() {
    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col className="pad m-auto">
                        <h1>Enjoy Your Privacy. <br/>Book Doctors Online</h1>
                        <p>Medflit is a convenient and affordable telemedicine <br className="d-none d-md-block" />
                            platform that allows you to talk to a board-certified 
                            doctors <br className="d-none d-md-block" />by phone or video.</p>
                        <div className="mt-5 br">
                            <div className="mt-3 download-btn">
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.medflit">
                                    <img src={ playStore } className="img-fluid mr-3 app-btn" width="" alt=""/>
                                </a>
                                <a href="#">
                                    <img src={ appStore } className="img-fluid app-btn" width="" alt=""/>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-none d-md-block">
                        <div>
                            {/* <Animate
                                appear="fadeInDown"
                                durationAppear={1000}
                                component="div" >
                            </Animate> */}
                            <img src={ heroIllustration } className="hero_img" alt="" />                                                       

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero