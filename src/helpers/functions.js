
export const capitalize = (sentence) => {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

export const dateFormatting = (timeStr) => {

    if(timeStr === null) {
        return "Not set"
    }
    let date = new Date(timeStr);
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dateStr = day+"/"+month+"/"+year;

    return (dateStr)
}

export const dateFormat = (myDate) => {
    myDate = myDate.split("-");
    let newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    console.log(newDate.getTime());

    return (newDate.getDate())
}

export const checkResume = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[0]
    }
}

export const checkMedicalLicense = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[1]
    }
}

export const checkUniCert = (documents) => {
    if(documents.length === 0) {
        return ""
    }else {
        return documents[2]
    }
}

export const fullname = (firstname, lastname) => {
    return firstname + " " + lastname;
}

export const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getPaymentType = (payableType) => {
    const type = payableType.split("\\");

    if (type[type.length - 1] === "LabTestPrescription") {
        return "Lab Payment";
    } else {
        return type[type.length - 1];
    }
}

// function ListOptions() {
//     const [treatmentPlan, setTreatmentPlan] = useState();
//     const [countries, setCountry] = useState();
//     const [state, setState] = useState();
//     const [duration, setDuration] = useState();
//     const [profession, setProfession] = useState();
//     const [specialty, setSpecialty] = useState();
//     const [paymentType, setPaymentType] = useState();
//     const [subscriptionPlan, setSubscriptionPlan] = useState();
//     const [payable, setPayable] = useState();
//     const [bank, setBank] = useState();

    
//     // let url = 'https://helloworld.com.ng/medflit-api/api/list-options';

//     const getList = async (id) => {
//         let url = 'https://helloworld.com.ng/medflit-api/api/list-options';
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + localStorage.getItem("access_token"),
//             },
//         }).then((res) => {
//             return res.json();
//         }).then((data) => {
//             setCountry(data.data.countries);
//             setCountry(data.data.countries);
//             setState(data.data.states);
//             setDuration(data.data.durations);
//             setPayable(data.data.payables);
//             setProfession(data.data.professions);
//             setSpecialty(data.data.specialties);
//             setPaymentType(data.data.paymentTypes);
//             setSubscriptionPlan(data.data.subscriptionPlans);
//             setBank(data.data.banks);
//             setTreatmentPlan(data.data.treatmentPlans);
//         })   

        

//     }

//     const getCountry = () => {
//         let url = 'https://helloworld.com.ng/medflit-api/api/list-options';
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + localStorage.getItem("access_token"),
//             },
//         }).then((res) => {
//             return res.json();
//         }).then((data) => {
//             setCountry(data.data.countries);
//         })        
//     }
//     return (
//         <>
//         </>
//     )
// }
// export default {getList}