import React from 'react';

// import pages
import Home from '../pages/Home';
import AdminLogin from '../pages/AdminLogin';
import Conditions from '../pages/Conditions';
import Faq from '../pages/Faq';
import About from '../pages/About';
import Partners from '../pages/Partners';

//import Admin pages
import Dashboard from '../pages/admin/Dashboard';
import Patients from '../pages/admin/Patients';

//import profiles
import Patient from '../pages/admin/profile/Patient'

// import router components
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

const Routes = () => {
    return (
        <HashRouter>
            <Route exact path="/" component={ Home }/>
            <Route path="/admin-login" component={ AdminLogin }/>
            <Route path="/conditions" component={ Conditions }/>
            <Route path="/faq" component={ Faq }/>
            <Route path="/about" component={ About }/>
            <Route path="/partners" component={ Partners }/>

            {/* Admin routes */}
            <Route path="/admin/dashboard" component={ Dashboard }/>
            <Route path="/admin/patients" component={ Patients }/>

            {/* Profile routes */}
            <Route path="/admin/profile/patient" component={ Patient }/>
        </HashRouter>
    )
}

export default Routes