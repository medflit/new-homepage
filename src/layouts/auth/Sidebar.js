import React, {Component} from 'react'
import logo from '../../assets/images/medflit-logo.png';

import FeatherIcon from 'feather-icons-react'
import { Modal } from 'react-bootstrap'

import { Route, Link, NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div id="aside" className="page-sidenav no-shrink bg-light nav-dropdown fade" aria-hidden="true">
            <div className="sidenav h-100 modal-dialog bg-light">
                <div className="navbar">
                    <Link to="/" className="navbar-brand ">
                        
                        <img src={logo} className="" width="80" alt="logo" />
                    </Link>
                </div>
                <div className="flex scrollable hover">
                    <div className="nav-active-text-primary" data-nav>
                        <ul className="nav bg">
                            <li className="nav-header hidden-folded">
                                <span className="text-muted">Main</span>
                            </li>
                            <li>
                                <Link to="/admin/dashboard">
                                    <span className="nav-icon"><FeatherIcon icon="home" size="18"/></span>
                                    <span className="nav-text">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="user" size="18"/></span>
                                    <span className="nav-text">Update Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="settings" size="18"/></span>
                                    <span className="nav-text">System Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="users" size="18"/></span>
                                    <span className="nav-text">All Users</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/patients">
                                    <span className="nav-icon "><FeatherIcon icon="users" size="18"/></span>
                                    <span className="nav-text">Patients Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="user" size="18"/></span>
                                    <span className="nav-text">Doctors Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="user" size="18"/></span>
                                    <span className="nav-text">Partners Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="user" size="18"/></span>
                                    <span className="nav-text">Pharmacy Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="home" size="18"/></span>
                                    <span className="nav-text">Hospital Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="users" size="18"/></span>
                                    <span className="nav-text">User Benefits</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="star" size="18"/></span>
                                    <span className="nav-text">Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="home" size="18"/></span>
                                    <span className="nav-text">Withdrawals</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="share" size="18"/></span>
                                    <span className="nav-text">Appointments</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="phone-forwarded" size="18"/></span>
                                    <span className="nav-text">Call Logs</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="list" size="18"/></span>
                                    <span className="nav-text">Consultations</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="target" size="18"/></span>
                                    <span className="nav-text">Order Logs</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="bar-chart-2" size="18"/></span>
                                    <span className="nav-text">Analytics</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="mail" size="18"/></span>
                                    <span className="nav-text">Bulk Emails</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="menu" size="18"/></span>
                                    <span className="nav-text">Transactions</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="message-square" size="18"/></span>
                                    <span className="nav-text">Support</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="nav-icon "><FeatherIcon icon="menu" size="18"/></span>
                                    <span className="nav-text">Activity Log</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar