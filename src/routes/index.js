import React from 'react';

// import router components
import { BrowserRouter as Router,  Route, Switch, Redirect, HashRouter } from 'react-router-dom';

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
import Users from '../pages/admin/Users';
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
import CurrentStats from '../pages/admin/providers/CurrentStats'
import PastStats from '../pages/admin/providers/PastStats'
import Payments from '../pages/admin/providers/Payment'

import useToken from '../components/app/useToken'

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken))
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token')
//     const userToken = JSON.parse(tokenString)
//     return userToken?.token
// }

const Routes = (props) => {
    // const {token, setToken} = useToken()

    // if(!token) {
    //     return <AdminLogin setToken={setToken} />
    // }
    // function to guard the component for private access
    const authGuard = (Component) => () => {
        return localStorage.getItem("access_token") ? (
        <Component />
        ) : (
        <Redirect to="/admin-login" />
        );
    };
    return (
        <Router {...props}>
            <Switch>
                {/* <Route path="*">
                    <NotFound/>
                </Route> */}
                {/* Outer pages routes */}
                <Route exact path="/" component={ Home }/>
                <Route path="/admin-login" component={ AdminLogin }/>
                <Route path="/conditions" component={ Conditions }/>
                <Route path="/faq" component={ Faq }/>
                <Route path="/about" component={ About }/>
                <Route path="/partners" component={ Partners }/>

                {/* Admin routes */}
                <Route path="/admin/dashboard" render={authGuard(Dashboard)}/>
                <Route path="/admin/patients" render={authGuard(Patients)}/>
                <Route exact path="/admin/providers" render={authGuard(Providers)}/>
                <Route path="/admin/users" render={authGuard(Users)}/>
                <Route path="/admin/consultations" render={authGuard(Consultations)}/>
                <Route path="/admin/consultation-transaction" render={authGuard(ConsultationTransaction)}/>
                <Route exact path="/admin/inbox" render={authGuard(Inbox)}/>
                <Route path="/admin/inbox/show-inbox" render={authGuard(InboxShow)}/>



                {/* Profile routes */}
                <Route path="/admin/profile/patient" render={authGuard(Patient)}/>
                <Route path="/admin/profile/provider" render={authGuard(Provider)}/>

                {/* Providers routes */}
                <Route path="/admin/providers/current-transaction" render={authGuard(CurrentTransaction)}/>
                <Route path="/admin/providers/past-transaction" render={authGuard(PastTransaction)}/>
                <Route path="/admin/providers/current-stats" render={authGuard(CurrentStats)}/>
                <Route path="/admin/providers/past-stats" render={authGuard(PastStats)}/>
                <Route path="/admin/providers/payment" render={authGuard(Payments)}/>
            </Switch>
        </Router>
    )
}

export default Routes