import React from 'react'

import AuthLayout from '../../../layouts/auth'

import FeatherIcon from 'feather-icons-react'

import { Link } from 'react-router-dom'

import { Container, Row, Col, Table, Card } from 'react-bootstrap'

const InboxShow = () => {
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Chat History</h2>
                    </div>
                    <div className="flex"></div>
                    <div>
                        <span class="btn btn-md text-muted">
                            <span class="d-sm-inline mx-1 breadcrumb-text"></span>
                            <FeatherIcon icon="arrow-right" size="14"/>
                        </span>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <div class="py-2 px-4 border-bottom d-none d-lg-block">
                                    <div class="d-flex align-items-center py-1">
                                        <div class="position-relative">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                        </div>
                                        <div class="flex-grow-1 pl-3">
                                            <strong>Dr Alex Samuel</strong>
                                            <div class="text-muted small"><em>Kemi MD00087</em></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="position-relative">
                                    <div class="chat-messages p-4">

                                        <div class="chat-message-right pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:34 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                            </div>
                                        </div>

                                        <div class="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:35 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Cum ea graeci tractatos.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:36 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                                Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:37 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
                                            </div>
                                        </div>

                                        <div class="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:38 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:39 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                            </div>
                                        </div>

                                        <div class="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:40 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Cum ea graeci tractatos.
                                            </div>
                                        </div>

                                        <div class="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:41 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:42 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                                Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                            </div>
                                        </div>

                                        <div class="chat-message-right mb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:43 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div class="font-weight-bold mb-1">You</div>
                                                Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                            </div>
                                        </div>

                                        <div class="chat-message-left pb-4">
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
                                                <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                                            </div>
                                            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                <div class="font-weight-bold mb-1">Sharon Lessman</div>
                                                Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </AuthLayout>
    )
}

export default InboxShow