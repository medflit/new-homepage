

//Grants the user access to use the app.
const loginApi = 'http://helloworld.com.ng/medflit-api/api/login'
//Returns list of providers
const providerList = 'http://helloworld.com.ng/medflit-api/api/providers/find'
//Returns list of patients
const patientList = 'http://helloworld.com.ng/medflit-api/api/patients/find'
//Gets all users
const allUsers = 'http://helloworld.com.ng/medflit-api/api/admin/users'
//search patient by MRN unique ID, name and email
const searchPatients = 'http://helloworld.com.ng/medflit-api/api/patients/search?q=test'
//search doctor
const searchProviders = 'http://helloworld.com.ng/medflit-api/api/providers/search?q=test'
//consultation table
const getConsultation = 'http://helloworld.com.ng/medflit-api/api/reports/all-consultations'
//Transaction table
const transactions = 'http://helloworld.com.ng/medflit-api/api/payment/all'
//lab logs
const callLogs = 'http://helloworld.com.ng/medflit-api/api/calls/call-logs'
//activate - deactivate subscriptions
const subscriptions = 'http://helloworld.com.ng/medflit-api/api/subscriptions/edit' 
// {
//     'subscription_id',
//     'action', // activate or deactivate
// }

//Add/Remove assign doctors
const assignDoctors = 'http://helloworld.com.ng/medflit-api/api/subscriptions/assign'
// {
//     'subscription_id',
//     'provider_id',
//     'patient_id',
//     'reason',
//     'publish'
// }

// api/admin/users/publish

// Sample request:
// {
//     "email": "test2@email.com"
// }






const config = {
    baseUrl: "http://api.medflit.com/api"
};

export default config