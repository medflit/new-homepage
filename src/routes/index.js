import React from 'react';
import { element } from 'react-dom'
// import router components
import { BrowserRouter as Router,  Route, Routes, Navigate } from 'react-router-dom';

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
import Transactions from '../pages/admin/Transactions';
import AssignmentLog from '../pages/admin/AssignmentLog';
import AssignDoctor from '../pages/admin/AssignDoctor';
import ConsultationTransaction from '../pages/admin/ConsultationTransaction';
import Inbox from '../pages/admin/Inbox';
import InboxShow from '../pages/admin/inbox/ShowInbox';

//import profiles routes
import Patient from '../pages/admin/profile/Patient'
import Provider from '../pages/admin/profile/Provider'
import ConsultationDetails from '../pages/admin/snippets/ConsultationDetails'

//import providers components
import CurrentTransaction from '../pages/admin/providers/CurrentTransaction'
import PastTransaction from '../pages/admin/providers/PastTransaction'
import CurrentStats from '../pages/admin/providers/CurrentStats'
import PastStats from '../pages/admin/providers/PastStats'
import Payments from '../pages/admin/providers/Payment'

// import useToken from '../components/app/useToken'
import EditAssignment from '../pages/admin/EditAssignment';
import SearchPatient from '../pages/admin/SearchPatient';
import SearchDoctor from '../pages/admin/SearchDoctor';
import SearchTransaction from '../pages/admin/SearchTransaction';
import SearchUser from '../pages/admin/SearchUser';

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken))
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token')
//     const userToken = JSON.parse(tokenString)
//     return userToken?.token
// }

const MyRoutes = (props) => {
    // const {token, setToken} = useToken()

    // if(!token) {
    //     return <AdminLogin setToken={setToken} />
    // }
    // function to guard the component for private access
    const authGuard = (Component) => {
        return localStorage.getItem("access_token") ? 
        ( <Component {...props}/> ) : 
        ( <Navigate to="/admin-login" /> );
    };
    return (
        <Router {...props}>
            <Routes>
                {/* <Route path="*">
                    <NotFound/>
                </Route> */}
                {/* Outer pages routes */}
                <Route exact path="/" element={ <Home/> }/>
                <Route path="/admin-login" element={ <AdminLogin/> }/>
                <Route path="/conditions" element={ <Conditions/> }/>
                <Route path="/faq" element={ <Faq/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/partners" element={ <Partners/> }/>

                {/* Admin routes */}
                <Route path="/admin/dashboard" element={ authGuard(Dashboard)}/>
                <Route path="/admin/patients" element={authGuard(Patients)}/>
                <Route exact path="/admin/providers" element={authGuard(Providers)}/>
                <Route path="/admin/users" element={authGuard(Users)}/>
                <Route path="/admin/consultations" element={authGuard(Consultations)}/>
                <Route path="/admin/transactions" element={authGuard(Transactions)}/>
                <Route path="/admin/assignment-log" element={authGuard(AssignmentLog)}/>
                <Route path="/admin/assign-doctor" element={authGuard(AssignDoctor)}/>
                <Route path="/admin/edit-assignment/:id" element={authGuard(EditAssignment)}/>
                <Route path="/admin/search-patient/:id" element={authGuard(SearchPatient)}/>
                <Route path="/admin/search-doctor/:id" element={authGuard(SearchDoctor)}/>
                <Route path="/admin/search-transaction/:id" element={authGuard(SearchTransaction)}/>
                <Route path="/admin/search-user/:id" element={authGuard(SearchUser)}/>
                <Route path="/admin/consultation-transaction" element={authGuard(ConsultationTransaction)}/>
                <Route exact path="/admin/inbox" element={authGuard(Inbox)}/>
                <Route path="/admin/inbox/show-inbox" element={authGuard(InboxShow)}/>



                {/* Profile routes */}
                <Route path="/admin/profile/patient/:id" element={authGuard(Patient)}/>
                <Route path="/admin/profile/provider/:id" element={authGuard(Provider)}/>
                <Route path="/admin/consultation-details/:id" element={authGuard(ConsultationDetails)}/>

                {/* Providers routes */}
                <Route path="/admin/providers/current-transaction" element={authGuard(CurrentTransaction)}/>
                <Route path="/admin/providers/past-transaction" element={authGuard(PastTransaction)}/>
                <Route path="/admin/providers/current-stats" element={authGuard(CurrentStats)}/>
                <Route path="/admin/providers/past-stats" element={authGuard(PastStats)}/>
                <Route path="/admin/providers/payment" element={authGuard(Payments)}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes