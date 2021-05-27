const config = {
    baseUrl: "http://api.medflit.com/api",
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

export default config