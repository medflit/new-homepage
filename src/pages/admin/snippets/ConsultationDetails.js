import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Container, Accordion, Button, Table } from 'react-bootstrap'
import config from '../../../api'

import { useLocation, useRouteMatch } from 'react-router-dom'
import AuthLayout from '../../../layouts/auth'
import FeatherIcon from 'feather-icons-react'


const ConsultationDetails = () => {
    const [consultation, setConsultation] = useState();
    const [prescription, setPrescription] = useState();
    const [labTest, setLabTest] = useState();

    const location = useLocation();

    console.log("Location: ", location.state.patient_id);

    // const url = '/patients/find/';
    // const { match: { params } } = props;


    useEffect(() => {
        getConsultation(getID());  
        // getID();
    }, []);

    const id = location.state.patient_id;
    const id2 = location.state.id;

    const getID = () => {
        console.log("My ID - ", id);
        console.log("My ID2 - ", id2);
        return id;
    }

    const url = '/reports/user-report?user_id=';
    // const id = getID();
    const getConsultation = async (id) => {
        const response = await fetch(`${config.baseUrl}` + url + `${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        console.log(jsonData.data)
        setConsultation(jsonData.data.consultations.data);
        setPrescription(jsonData.data.prescriptions.data);
        console.log(jsonData.data.prescriptions.data);
        setLabTest(jsonData.data.labTests.data);
        console.log(jsonData.data.labTests.data)
    };
    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Consultation Details</h2>
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
                    
                    <Col md={12} className="order-md-1">
                       
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab_1">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <form id="form" data-plugin="parsley" data-option="{}">
                                        <div id="rootwizard" data-plugin="bootstrapWizard" data-option="{
                                            tabclassName: '',
                                            nextSelector: '.button-next', 
                                            previousSelector: '.button-previous', 
                                            firstSelector: '.button-first', 
                                            lastSelector: '.button-last',
                                            onTabClick: function(tab, navigation, index) {
                                            return false;
                                            },
                                            onNext: function(tab, navigation, index) {
                                            var instance = $('#form').parsley();
                                            instance.validate();
                                            if(!instance.isValid()) {
                                                return false;
                                            }
                                            }
                                        }">
                                            <ul className="nav mb-3">
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab1" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">1</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Diagnosis</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab2" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">2</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Prescription</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab3" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">3</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Laboratory</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-3">
                                                <div className="tab-pane active" id="tab1">
                                                    <div className="form-row">
                                                        {/* {consultation.map((consult) => {
                                                            // console.log(consult);
                                                            consult.id === id2 ? "" : ""
                                                        })} */}
                                                        <div className="form-group col-sm-4">
                                                            <label>Patient's complain</label>
                                                            <textarea className="form-control" value={consultation && consultation[0]?.reason_for_consult} rows="6" data-minwords="6" required></textarea>
                                                        </div>
                                                        <div className="form-group col-sm-4">
                                                            <label>Observations</label>
                                                            <textarea className="form-control" value={consultation && consultation[0]?.observation} rows="6" data-minwords="6" required></textarea>
                                                        </div>
                                                        <div className="form-group col-sm-4">
                                                            <label>Conclusions</label>
                                                            <textarea className="form-control" value={consultation && consultation[0]?.provider_advice} rows="6" data-minwords="6" required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-sm-12">
                                                        <label>What kind of issue is the patient experiencing?</label> <br/>

                                                        </div>
                                                        { consultation && consultation[0]?.issue === "medical" ? 
                                                            <div class="form-radio mr-2">
                                                                <input class="form-radio-input" name="radio1" type="radio" value="" id="defaultRadio1" checked/>
                                                                <label class="form-radio-label" for="defaultRadio1">
                                                                    Medical &nbsp;&nbsp;
                                                                </label>
                                                            </div>
                                                        : 
                                                            <div class="form-radio mr-2">
                                                                <input class="form-radio-input" name="radio1" type="radio" value="" id="defaultRadio1" />
                                                                <label class="form-radio-label" for="defaultRadio1">
                                                                    Medical &nbsp;&nbsp;
                                                                </label>
                                                            </div>
                                                        }

                                                        { consultation && consultation[0]?.issue === "mental" ? 
                                                            <div class="form-radio mr-2">
                                                                <input class="form-radio-input" name="radio1" type="radio" value="" id="defaultRadio1" checked/>
                                                                <label class="form-radio-label" for="defaultRadio1">
                                                                    Mental &nbsp;&nbsp;
                                                                </label>
                                                            </div>
                                                        : 
                                                            <div class="form-radio mr-2">
                                                                <input class="form-radio-input" name="radio1" type="radio" value="" id="defaultRadio1" />
                                                                <label class="form-radio-label" for="defaultRadio1">
                                                                    Mental &nbsp;&nbsp;
                                                                </label>
                                                            </div>
                                                        }
                                                        
                                                    </div>  
                                                    <hr/>
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-8">
                                                            <label>Diagnosis</label>
                                                            <input type="text" className="form-control" value={consultation && consultation[0]?.dianosis} required />
                                                        </div>
                                                    </div>                                                  
                                                </div>
                                                <div className="tab-pane" id="tab3">
                                                    <div className="form-row">
                                                        <div className="table-responsive">
                                                            <Table className="table table-theme table-row v-middle">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            S/N
                                                                        </th>
                                                                        <th className="text-muted">Test</th>
                                                                        <th className="text-muted">Instruction</th>
                                                                        <th style={{width: "50px"}}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    { labTest && labTest.map((test, index) => {

                                                                        return (
                                                                            <tr className=" v-middle" dataId="15">
                                                                                <td>
                                                                                    {index + 1}
                                                                                </td>
                                                                                <td>
                                                                                    <div className="item-title text-color ">
                                                                                        <input type="text" className="form-control" value={test?.test_name} placeholder=""/>
                                                                                    </div>                                            
                                                                                </td>
                                                                                <td className="flex">
                                                                                    <div className=" "><input type="text" className="form-control" value={test.instruction} placeholder=""/></div>
                                                                                </td>
                                                                                <td>
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    }) }
                                                                    
                                                                </tbody>
                                                            </Table>
                                                        </div>
                        
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab2">
                                                    <div className="form-row">
                                                        <div className="table-responsive">
                                                            <Table className="table table-theme table-row v-middle">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            S/N
                                                                        </th>
                                                                        <th className="text-muted">Medication</th>
                                                                        <th className="text-muted">Dosage</th>
                                                                        <th className="text-muted">Frequency</th>
                                                                        <th className="text-muted">Duration</th>
                                                                        <th className="text-muted">Route</th>
                                                                        <th style={{width: "50px"}}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    { prescription && prescription.map((item, index) => {

                                                                        return (
                                                                        <tr className=" v-middle" key={item?.id}>
                                                                        <td>
                                                                            {index + 1}
                                                                        </td>
                                                                        <td>
                                                                            <div className="item-title text-color ">
                                                                                <input type="text" className="form-control" value={item?.medication_name} placeholder=""/>
                                                                            </div>                                            
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" "><input type="text" className="form-control" value={item?.dosage} placeholder=""/></div>
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" "><input type="text" className="form-control" value={item?.frequency} placeholder=""/></div>
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" "><input type="text" className="form-control" value={item?.duration} placeholder=""/></div>
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" ">
                                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                                <option value="">By Mouth</option>
                                                                                <option value="">By Intramuscular</option>
                                                                                <option value="">By Intravenous</option>
                                                                                <option value="">By Subcutaneous</option>
                                                                                <option value="">By Subligual</option>
                                                                            </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            
                                                                        </td>
                                                                    </tr>
                                                                
                                                                        )
                                                                    }) }
                                                                    
                                                                
                                                                </tbody>
                                                            </Table>
                                                        </div>
                        
                                                    </div>
                                                </div>
                                                <div className="row py-3">
                                                    
                                                    <div className="col-6">
                                                        <button type="button" href="#tab1" data-toggle="tab" className="btn btn-white button-next">
                                                            <FeatherIcon icon="chevron-left" size="18"/>
                                                        </button>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex justify-content-end">
                                                            <button type="button"  href="#tab2" data-toggle="tab" className="btn btn-white button-last">
                                                                <FeatherIcon icon="chevron-right" size="18"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>    
                                    </Card.Body>
                                </Card>
                            </div>
                            
                        </div>
                    </Col>                    
                </Row>
            </Container>
        </AuthLayout>
    )
}


export default ConsultationDetails