import React from 'react'
import logo from '../../assets/images/medflit-logo.png';
import FeatherIcon from 'feather-icons-react'

import { Route, Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div id="header" className="page-header">
            <div className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand d-lg-none">
                    <img src={logo} className="" width="80" alt="logo" />
                    {/* <span className="hidden-folded d-inline l-s-n-1x d-lg-none">Basik</span> */}
                </Link>
                <div className="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
                    <form className="input-group m-2 my-lg-0 ">
                        <div className="input-group-prepend">
                            <button type="button" className="btn no-shadow no-bg px-0 text-inherit">
                                <FeatherIcon icon="search" size="18"/>
                            </button>
                        </div>
                        <input type="text" className="form-control no-border no-shadow no-bg typeahead" placeholder="Search components..." data-plugin="typeahead" data-api="../assets/api/menu.json"/>
                    </form>
                </div>
                <ul className="nav navbar-menu order-1 order-lg-2">
                    <li className="nav-item d-none d-sm-block">
                        <a className="nav-link px-2" data-toggle="fullscreen" data-plugin="fullscreen">
                            <FeatherIcon icon="maximize" size="18"/>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link px-2" data-toggle="dropdown">
                            <FeatherIcon icon="settings" size="18"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-center mt-3 w-md animate fadeIn">
                            <div className="setting px-3">
                                <div className="mb-2 text-muted">
                                    <strong>Setting:</strong>
                                </div>
                                <div className="mb-3" id="settingLayout">
                                    <label className="ui-check ui-check-rounded my-1 d-block">
                                        <input type="checkbox" name="stickyHeader"/>
                                        <i></i>
                                        <small>Sticky header</small>
                                    </label>
                                    <label className="ui-check ui-check-rounded my-1 d-block">
                                        <input type="checkbox" name="stickyAside"/>
                                        <i></i>
                                        <small>Sticky aside</small>
                                    </label>
                                    <label className="ui-check ui-check-rounded my-1 d-block">
                                        <input type="checkbox" name="foldedAside"/>
                                        <i></i>
                                        <small>Folded Aside</small>
                                    </label>
                                    <label className="ui-check ui-check-rounded my-1 d-block">
                                        <input type="checkbox" name="hideAside"/>
                                        <i></i>
                                        <small>Hide Aside</small>
                                    </label>
                                </div>
                                <div className="mb-2 text-muted">
                                    <strong>Color:</strong>
                                </div>
                                <div className="mb-2">
                                    <label className="radio radio-inline ui-check ui-check-md">
                                        <input type="radio" name="bg" value=""/>
                                        <i></i>
                                    </label>
                                    <label className="radio radio-inline ui-check ui-check-color ui-check-md">
                                        <input type="radio" name="bg" value="bg-dark"/>
                                        <i className="bg-dark"></i>
                                    </label>
                                </div>
                                <div className="mb-2 text-muted">
                                    <strong>Layouts:</strong>
                                </div>
                                <div className="mb-3">
                                    <a href="dashboard.html" className="btn btn-xs btn-white no-ajax mb-1">Default</a>
                                    <a href="layout.a.html?bg" className="btn btn-xs btn-primary no-ajax mb-1">A</a>
                                    <a href="layout.b.html?bg" className="btn btn-xs btn-info no-ajax mb-1">B</a>
                                    <a href="layout.c.html?bg" className="btn btn-xs btn-success no-ajax mb-1">C</a>
                                    <a href="layout.d.html?bg" className="btn btn-xs btn-warning no-ajax mb-1">D</a>
                                </div>
                                <div className="mb-2 text-muted">
                                    <strong>Apps:</strong>
                                </div>
                                <div>
                                    <a href="dashboard.html" className="btn btn-sm btn-white no-ajax mb-1">Dashboard</a>
                                    <a href="music.html?bg" className="btn btn-sm btn-white no-ajax mb-1">Music</a>
                                    <a href="video.html?bg" className="btn btn-sm btn-white no-ajax mb-1">Video</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link px-2 mr-lg-2" data-toggle="dropdown">
                            <FeatherIcon icon="bell" size="18"/>
                            <span className="badge badge-pill badge-up bg-primary">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
                            <div className="scrollable hover" style={{maxHeight: "250px"}}>
                                <div className="list list-row">
                                    <div className="list-item " data-id="6">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-danger">
                                <img src="../assets/img/a6.jpg" alt="."/>
                        </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                Just saw this on the
                                                <a href='#'>@eBay</a> dashboard, dude is an absolute unit.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item " data-id="12">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-info">
                                                        A
                                                </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                <a href='#'>Support</a> team updated the status
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item " data-id="8">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-success">
                                <img src="../assets/img/a8.jpg" alt="."/>
                        </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                The biggest software developer conference
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item " data-id="4">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-success">
                                                    <img src="../assets/img/a4.jpg" alt="."/>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                Big News! Introducing
                                                <a href='#'>NextUX</a> Enterprise 2.1 - additional #Windows Server support
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item" data-id="11">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-info">
                                                    K
                                                </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                Prepare the documentation for the
                                                <a href='#'>Fitness app</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item " data-id="2">
                                        <div>
                                            <a href="#">
                                                <span className="w-32 avatar gd-primary">
                                                    <img src="../assets/img/a2.jpg" alt="."/>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="flex">
                                            <div className="item-feed h-2x">
                                                Can data lead us to making the best possible decisions?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex px-3 py-2 b-t">
                                <div className="flex">
                                    <span>6 Notifications</span>
                                </div>
                                <a href="page.setting.html">See all
                                    <i className="fa fa-angle-right text-muted"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" className="nav-link d-flex align-items-center px-2 text-color">
                            <span className="avatar w-24" style={{margin: "-2px;"}}>
                                <img src="../assets/img/a0.jpg" alt="..."/>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right w mt-3 animate fadeIn">
                            <a className="dropdown-item" href="page.profile.html">
                                <span>Jacqueline Reid</span>
                            </a>
                            <a className="dropdown-item" href="page.price.html">
                                <span className="badge bg-success text-uppercase">Upgrade</span>
                                <span>to Pro</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="page.profile.html">
                                <span>Profile</span>
                            </a>
                            <a className="dropdown-item d-flex" href="page.invoice.html">
                                <span className="flex">Invoice</span>
                                <span><b className="badge badge-pill gd-warning">5</b></span>
                            </a>
                            <a className="dropdown-item" href="page.faq.html">Need help?</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="page.setting.html">
                                <span>Account Settings</span>
                            </a>
                            <a className="dropdown-item" href="signin.html">Sign out</a>
                        </div>
                    </li>
                    <li className="nav-item d-lg-none">
                        <a href="#" className="nav-link px-2" data-toggle="collapse" data-toggle-className data-target="#navbarToggler">
                            <FeatherIcon icon="search" size="18"/>
                        </a>
                    </li>
                    <li className="nav-item d-lg-none">
                        <a className="nav-link px-1" data-toggle="modal" data-target="#aside">
                            <FeatherIcon icon="menu" size="18"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation