import React from 'react'
import Breadcrumbs from 'react-router-dynamic-breadcrumbs'
import {BrowserRouter as Router} from 'react-router-dom';

import FeatherIcon from 'feather-icons-react'

const routesList = {
    '/admin/dashboard': 'Dashboard',
    '/admin/patient': 'Patient Profile',
    'admin/patients': 'Patient List'
} 

class AppBreadcrumbs extends React.Component {
    render() {
        return (
            <Router>
                
                <Breadcrumbs mappedRoutes={routesList} routeMatcherRegex="([\w-]+)"
                    WrapperComponent={(props) =>
                        <span class="btn btn-md text-muted">
                            <span class="d-sm-inline mx-1 breadcrumb-text">{props.children}</span>
                            <FeatherIcon icon="arrow-right" size="14"/>
                        </span>}
                    ActiveLinkComponent={(props) =>
                            <span class="btn btn-md text-muted">
                                <span class="d-sm-inline mx-1 breadcrumb-text">{props.children}</span>
                                <FeatherIcon icon="arrow-right" size="14"/>
                            </span>}
                    LinkComponent={(props) =>
                        <span class="btn btn-md text-muted">
                            <span class="d-sm-inline mx-1 breadcrumb-text">{props.children}</span>
                            <FeatherIcon icon="arrow-right" size="14"/>
                        </span>
                    } 
                />
            </Router>
        )
    }
}

export default AppBreadcrumbs