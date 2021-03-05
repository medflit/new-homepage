import React from 'react';

// import router components
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

// import pages
import Home from '../pages/Home';
import AdminLogin from '../pages/AdminLogin';
import Conditions from '../pages/Conditions';
import Faq from '../pages/Faq';
import About from '../pages/About';
import Partners from '../pages/Partners';

//import Admin routes
import Dashboard from '../pages/admin/Dashboard';
import Patients from '../pages/admin/Patients';
import Providers from '../pages/admin/Providers';
import Consultations from '../pages/admin/Consultations';
import ConsultationTransaction from '../pages/admin/ConsultationTransaction';
import Inbox from '../pages/admin/Inbox';
import InboxShow from '../pages/admin/inbox/ShowInbox';

//import profiles routes
import Patient from '../pages/admin/profile/Patient'
import Provider from '../pages/admin/profile/Provider'

//import providers components
import CurrentTransaction from '../pages/admin/providers/CurrentTransaction'
import PastTransaction from '../pages/admin/providers/PastTransaction'
import Stats from '../pages/admin/providers/Stats'
import Payments from '../pages/admin/providers/Payment'


const Routes = () => {
    return (
        <HashRouter>
            {/* Outer pages routes */}
            <Route exact path="/" component={ Home }/>
            <Route path="/admin-login" component={ AdminLogin }/>
            <Route path="/conditions" component={ Conditions }/>
            <Route path="/faq" component={ Faq }/>
            <Route path="/about" component={ About }/>
            <Route path="/partners" component={ Partners }/>

            {/* Admin routes */}
            <Route path="/admin/dashboard" component={ Dashboard }/>
            <Route path="/admin/patients" component={ Patients }/>
            <Route exact path="/admin/providers" component={ Providers }/>
            <Route path="/admin/consultations" component={ Consultations }/>
            <Route path="/admin/consultation-transaction" component={ ConsultationTransaction }/>
            <Route exact path="/admin/inbox" component={ Inbox }/>
            <Route path="/admin/inbox/show-inbox" component={ InboxShow }/>



            {/* Profile routes */}
            <Route path="/admin/profile/patient" component={ Patient }/>
            <Route path="/admin/profile/provider" component={ Provider }/>

            {/* Providers routes */}
            <Route path="/admin/providers/current-transaction" component={ CurrentTransaction }/>
            <Route path="/admin/providers/past-transaction" component={ PastTransaction }/>
            <Route path="/admin/providers/stats" component={ Stats }/>
            <Route path="/admin/providers/payment" component={ Payments }/>
        </HashRouter>
    )
}

export default Routes