import React, { Components } from 'react'
import handPhone from '../../assets/images/handphone.png';
import playStore from '../../assets/images/playstore.png';
import appStore from '../../assets/images/appstore.png';

import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

function DownloadApp() {
    return(
        <section className="download-app">
            <Container>
                <div className="primary-color-bg download-inner">
                    <Row>
                        <Col md={5} className="d-none d-md-block">
                            <img src={ handPhone } width="65%" className="" alt="" />
                        </Col>
                        <Col md={7} xs={12}>
                            <h1>Why not book a Doctor now?</h1>
                            <p>Save time and effort. Medflit is your best choice.</p>

                            <div className="mt-4 br">
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
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default DownloadApp