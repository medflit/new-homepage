import React, {Component} from 'react'
import ScriptTag from 'react-script-tag'

import AppBreadcrumbs from '../../pages/admin/extras/AppBreadcrumbs'

import * as $ from 'jquery';

import '../../assets/css/theme.css';

import FeatherIcon from 'feather-icons-react'

import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Footer from './Footer'

const AuthLayout = ( {children} ) => {
    return (
        <div className="layout-row">
            <Sidebar/>
            <div id="main" className="layout-column flex">
                <Navigation/>
                <div id="content" className="flex">
                    <div className="page-hero page-container " id="page-hero">
                        <div className="padding d-flex">
                            <div className="page-title">
                                <h2 className="text-md text-highlight">Dashboard</h2>
                                <small className="text-muted">Welcome,
                                    <strong> Admin</strong>
                                </small>
                            </div>
                            <div className="flex"></div>
                            <div>
                                <AppBreadcrumbs/>
                            </div>
                        </div>
                    </div>
                    <div class="page-content page-container" id="page-content">
                        <div class="padding">  
                            {children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/libs/feather-icons/dist/feather.min.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/js/plugins/feathericon.js" />

            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/js/theme.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/js/utils.js" />
        </div>
    )
}

export default AuthLayout