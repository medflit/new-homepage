import React, {Component} from 'react'
import ScriptTag from 'react-script-tag'

import AppBreadcrumbs from '../../pages/admin/extras/AppBreadcrumbs'

// import * as $ from 'jquery';

import '../../assets/css/theme.css';

import FeatherIcon from 'feather-icons-react'

import Navigation from './Navigation'
import Sidebar from './Sidebar'
import Footer from './Footer'

const AuthLayout = ( {children} ) => {
    return (
        <div className="layout-row bg-admin">
            <Sidebar/>
            <div id="main" className="layout-column flex">
                <Navigation/>
                <div id="content" className="flex">
                    <div className="page-content page-container" id="page-content">
                        <div className="padding">  
                            {children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/js/theme.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="../../assets/js/utils.js" />
        </div>
    )
}

export default AuthLayout