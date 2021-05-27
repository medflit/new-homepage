import React from 'react'
import AuthLayout from '../../layouts/auth'
import {Table, Col, Row, Container, Card, Dropdown} from 'react-bootstrap'

import {Link, useLocation} from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'


const SearchUser = () => {

    const location = useLocation();

    const user = location.state.userDetails;

    return (
        <AuthLayout>
            <Container>
                <Row>
                    <Card>
                        <Card.Header>
                            User
                        </Card.Header>
                        <Card.Body>

                            <div className="mb-5">
                                <div className="table-responsive">
                                    <Table className="table table-theme table-row v-middle">
                                        <thead>
                                            <tr>
                                                <th style={{width: "20px"}}>
                                                    <label className="ui-check m-0">
                                                        <input type="checkbox"/>
                                                        <i></i>
                                                    </label>
                                                </th>
                                                <th className="text-muted">First Name</th>
                                                <th className="text-muted">Last Name</th>
                                                <th className="text-muted">Unique ID</th>
                                                <th className="text-muted">Email</th>
                                                <th className="text-muted">Gender</th>
                                                <th className="text-muted">Phone</th>
                                                <th className="text-muted">Type</th>
                                                <th style={{width: "50px"}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* { users.map((user, index) => {
                                            // console.log(user); 
                                            return(   */}
                                            <tr className="v-middle" key={user?.id}>
                                                <td>
                                                    <label className="ui-check m-0 ">
                                                        <input type="checkbox" name="id" value="15"/>
                                                        <i></i>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.firstname}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.lastname}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.biodata?.medical_id}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.email}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.profile?.gender}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{user?.phone}</div>
                                                </td>
                                                <td>
                                                    <div className="item-title text-color">{(user.usertype === 2 ? "Patient" : "Provider")}</div> 
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
                                                            <FeatherIcon icon="more-vertical" size="16"/>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            {user.usertype === 2 ? <Dropdown.Item><Link to={{pathname: `/admin/profile/patient/${user?.biodata?.user_id}`, state: { "id": user?.biodata?.user_id}}}>View</Link></Dropdown.Item> 
                                                            : <Dropdown.Item><Link to={{pathname: `/admin/profile/provider/${user?.biodata?.user_id}`, state: { "id": user?.biodata?.user_id}}}>View</Link></Dropdown.Item> }
                                                            
                                                            <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            {/* )
                                            })} */}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </AuthLayout>
    )
}

export default SearchUser