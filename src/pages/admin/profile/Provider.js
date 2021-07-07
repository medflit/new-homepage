import React, {useEffect, useState} from 'react'
import { Row, Col, Card, Container, Accordion, Button, Table } from 'react-bootstrap'
import config from '../../../api'

import { useLocation, useRouteMatch } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'
import ProfileImage from '../../../assets/images/customer.png'

import AuthLayout from '../../../layouts/auth'

function Provider() {
    const [provider, setProviderProfile] = useState();
    const [countries, setCountry] = useState();

    const location = useLocation();

    console.log("Location: ", location.state.id);

    // const url = '/patients/find/';
    // const { match: { params } } = props;


    useEffect(() => {
        getProviderProfile(getID());
        getID();
    }, []);

    const getID = () => {
        const id = location.state.id;
        return id;
    }

    const getCountry = () => {
        fetch(`${config.baseUrl + config.listOptions}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setCountry(data.data.countries);
        })        
    }

    const getProviderProfile = async (id) => {
        const response = await fetch(`${config.baseUrl + config.findUser}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setProviderProfile(jsonData.data);
        console.log(jsonData)
    };

    return (
        <AuthLayout>
            <div className="page-hero page-container " id="page-hero">
                <div className="padding d-flex">
                    <div className="page-title">
                        <h2 className="text-md text-highlight">Provider Profile</h2>
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
                    <Col md={4} className="order-md-2">
                        <Card>
                            <Card.Body>
                                <div className="">
                                    <Row>
                                        <Col sm={4}>
                                            <img src={ ProfileImage } alt="" className="w-80 avatar img-fluid"/>
                                        </Col>
                                        <Col sm={8}>
                                            <div className="page-title m-auto">
                                                <h2 className="text-md text-highlight">{provider?.biodata?.firstname} {provider?.biodata?.lastname}</h2>
                                                <small className="text-muted">{provider?.biodata?.medical_id}
                                                </small>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8} className="order-md-1">
                        <Card>
                            <Card.Body>
                                <div className="d-flex">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#" data-toggle="tab" data-target="#tab_1">Overview</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_2">Review</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_3">Bank Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_4">Transactions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_5">Activity Log</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-toggle="tab" data-target="#tab_6">Settings</a>
                                        </li>
                                    </ul>
                                </div>            
                            </Card.Body>
                        </Card>
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
                                                            <div className="text-muted">Personal Info</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab2" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">2</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Professional Info</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link text-center" href="#tab3" data-toggle="tab">
                                                        <span className="w-32 d-inline-flex align-items-center justify-content-center circle bg-light active-bg-success">3</span>
                                                        <div className="mt-2">
                                                            <div className="text-muted">Hospital Details</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-3">
                                                <div className="tab-pane active" id="tab1">
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Firstname</label>
                                                            <input type="text" className="form-control" value={provider?.biodata?.firstname} required/>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Lastname</label>
                                                            <input type="text" className="form-control" value={provider?.biodata?.lastname} required/>
                                                        </div>
                                                    </div>                                            
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Email Address</label>
                                                            <input type="email" className="form-control" value={provider?.email} required />
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Username</label>
                                                            <input type="text" className="form-control" value={provider?.username} required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Marital Status</label>
                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                <option value={provider?.marital_status}>{provider?.marital_status}</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Gender</label>
                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                <option value="one">{provider?.biodata?.gender}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Telephone</label>
                                                            <input type="text" className="form-control" value={provider?.phone} required/>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Select Country</label>
                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                { countries?.map((country, index) => {
                                                                    if(country?.id === provider?.biodata?.country) {
                                                                        let curCountry = country?.name
                                                                        return (<option value={curCountry}>{curCountry}</option>)
                                                                    }
                                                                    }) 
                                                                }   
                                                            </select>
                                                        </div>
                                                    </div>  
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Address</label>
                                                            <textarea className="form-control" rows="6" value={provider?.addresses[0]?.street + ", " + provider?.biodata?.city} data-minwords="6" required>{provider?.addresses[0]?.street + ", " + provider?.biodata?.city}</textarea>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Doctor's bio</label>
                                                            <textarea className="form-control" rows="6" value={provider?.biodata?.bio} data-minwords="6" required>{provider?.biodata?.bio}</textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="table-responsive">
                                                            <Table className="table table-theme table-row v-middle">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            S/N
                                                                        </th>
                                                                        <th className="text-muted">Medical School</th>
                                                                        <th className="text-muted">Course</th>
                                                                        <th className="text-muted">Graduation year</th>
                                                                        <th style={{width: "50px"}}></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className=" v-middle" dataId="15">
                                                                        <td>
                                                                            1
                                                                        </td>
                                                                        <td>
                                                                            <div className="item-title text-color ">
                                                                                <input type="text" className="form-control" placeholder="Medical school"/>
                                                                            </div>                                            
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=" "><input type="text" className="form-control" placeholder="Course"/></div>
                                                                        </td>
                                                                        <td className="flex">
                                                                            <div className=""><input type="text" className="form-control" placeholder="Graduation year"/></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="badge badge-danger badge-lg">X</div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                        
                                                    </div>

                                                    <div className="form-row">
                                                        <div className="form-group col-sm-3">
                                                            <label>Years of Exp.(?)</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Medium of service</label>
                                                            <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                <option value="one">Online</option>
                                                                <option value="three">Home &amp; Online</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Online Price</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                        <div className="form-group col-sm-3">
                                                            <label>Home service price</label>
                                                            <input type="text" className="form-control" placeholder=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab2">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Profession</label>
                                                                <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                    <option value="one">{provider?.provider?.profession?.name}</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Speciality</label>
                                                                <select className="form-control" data-plugin="select2" data-option="{}" data-minimum-results-for-search="Infinity">
                                                                    <option value="one">Infectious Speciality</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="table-responsive">
                                                                <Table className="table table-theme table-row v-middle">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                S/N
                                                                            </th>
                                                                            <th className="text-muted">Name of Aff.</th>
                                                                            <th className="text-muted">Aff. Abbrev.</th>
                                                                            <th className="text-muted">Website</th>
                                                                            <th className="text-muted">Description</th>
                                                                            <th style={{width: "50px"}}></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className=" v-middle" dataId="15">
                                                                            <td>
                                                                                1
                                                                            </td>
                                                                            <td>
                                                                                <div className="item-title text-color ">
                                                                                    <input type="text" className="form-control" placeholder=""/>
                                                                                </div>                                            
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=" "><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=""><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td className="flex">
                                                                                <div className=""><input type="text" className="form-control" placeholder=""/></div>
                                                                            </td>
                                                                            <td>
                                                                                <div className="badge badge-danger badge-lg">X</div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">License ID</label>
                                                                <input type="text" className="form-control" placeholder=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Resume
                                                                </label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Uni. Certificate</label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Upload Medical License
                                                                </label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Enter Certifications</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label className="text-muted">Languauges</label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="tab3">
                                                    <div className="form-group">
                                                        <label className="text-muted">Hospital Name</label>
                                                        <input type="text" value={provider?.provider?.hospital_name} className="form-control"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <h5>Services and Procedures</h5>
                                                    </div>
                                                    <hr/>
                                                    <p className="pro-serv">Clinical services</p>
                                                    <div className="form-row">
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                Paediatrics
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Anaesthesia
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Intensive care
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Diabetes
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Obstetrics&Gynaecology
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <p className="pro-serv">Surgical services</p>
                                                    <div className="form-row">
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Orthopeadic surgery
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Neuro surgery
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Urology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Plastic surgery
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            General surgery
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Vascular surgery
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Maxillofacial surgery
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <p className="pro-serv">Medical services</p>
                                                    <div className="form-row">
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            General medicine
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Dermatology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Cardiology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Neurology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Nephrology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Rheumatology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Oncology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Haematology
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <p className="pro-serv">Diagnostics services</p>
                                                    <div className="form-row">
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Radiology
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Laboratory
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Electrophysiology
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <p className="pro-serv">Support services</p>
                                                    <div className="form-row">
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Physiotherapy
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Pharmacy
                                                            </label>
                                                        </div>
                                                        <div class="form-check mr-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                            Prosthetics & OrthoticElectrophysiology
                                                            </label>
                                                        </div>
                                                    </div>


                                                    <div className="text-right mt-4">
                                                        <button type="submit" className="btn btn-primary">Update Profile</button>
                                                    </div>
                                                </div>
                                                {/* <div className="row py-3">
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-white button-next">
                                                            <FeatherIcon icon="chevron-left" size="18"/>
                                                        </button>
                                                        <button type="button" className="btn btn-white button-previous">
                                                            <FeatherIcon icon="arrow-left" size="18"/>
                                                        </button>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex justify-content-end">
                                                            <button type="button" className="btn btn-white button-next">
                                                                <FeatherIcon icon="arrow-right" size="18"/>
                                                            </button>
                                                            <button type="button" className="btn btn-white button-last">
                                                                <FeatherIcon icon="chevron-right" size="18"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </form>    
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_2">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <span className="btn btn-md text-muted">
                                            <span className="d-sm-inline mx-1 breadcrumb-text">No reviews yet</span>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_3">
                                <Card id="feed-1">
                                    <Card.Header>
                                        <p>Bank Details</p>
                                    </Card.Header>
                                    <Card.Body>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>Bank Name</label>
                                                    <select className="form-control">
                                                        <option value="">Select bank</option>
                                                        <option value="">GTB</option>
                                                        <option value="">UBA</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Account Number</label>
                                                    <input type="text" className="form-control" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="text-right mt-4">
                                                <button type="submit" className="btn btn-primary">Add Bank</button>
                                            </div>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_4">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>No transaction found</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                            <div className="tab-pane fade" id="tab_5">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <p>You do not have any activity at the moment</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="tab-pane fade" id="tab_6">
                                <Card id="feed-1">
                                    <Card.Body>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <div className="d-flex align-items-center pointer">
                                                    <div>
                                                        <span className="w-48 avatar circle bg-info-lt" data-toggle-className="loading">
                                                            <img src={ProfileImage} alt="."/>
                                                        </span>
                                                    </div>
                                                    <div className="flex"></div>
                                                    <div className="mx-3">
                                                        <FeatherIcon icon="chevron-right" size="16"/>
                                                    </div>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <label>Profile picture</label>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="customFile"/>
                                                            <label className="custom-file-label" for="customFile">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mt-2">Update</button>
                                                </form>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <div className="mt-4 align-items-center b-t pointer">
                                            <div className="mb-3">
                                                <div><p className="pro-serv">Change Password</p></div>
                                            </div>
                                            <div className="flex"></div>
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>Old Password</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>New Password</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>New Password Again</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                                <button type="submit" className="btn btn-primary mt-2">Update</button>
                                            </form>
                                        </div>
                                        
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


export default Provider