export const config = {
    baseUrl: "https://api.medflit.com/api",
    login: "/login",
    providerList: "/providers",
    patientList: "/patients/find",
    allUsers: "/admin/users",
    findUser: "/admin/users/find?id=",
    searchPatient: "/patients/search?q=",
    searchDoctor: "/providers/search?q=",
    allConsultations: "/reports/all-consultations",
    allTransactions: "/payment/all",
    callLogs: "/calls/call-logs",
    subscriptions: "/subscriptions/edit",
    assignDoctor: "/subscriptions/assign",
    verifyDoctor: "/admin/users/publish",
    listOptions: "/list-options",
    activatePay: "/admin/banks",
    userTreatment: "/calls/treatment/get?user_id=",
    activateTreatment: "/calls/treatment",
    userTransaction: "/reports/payments?user_id=",

};

let token = localStorage.getItem("access_token")

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
}

export const getProviderProfile = async (provider) => {
    await fetch(`${config.baseUrl + config.findUser}${provider.id}`, { headers })
    .then((res) => res.json())
    .then(data => data.data)
}

export const getAllProviders = async (pageNumber) => {
    await fetch(`${config.baseUrl + config.providerList}?page=${pageNumber}`, { headers })
    .then((res) => res.json())
    .then(data => data.data)
} 