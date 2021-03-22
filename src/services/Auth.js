// import loginApi from '../api/index'; 
import { useHistory } from "react-router-dom";

//call to login api
export default async function LoginAdmin(credentials) {
    // let history = useHistory();
    return fetch('http://helloworld.com.ng/medflit-api/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json()
    // response => {
    //     let url = response + '/admin/dashboard'
    //     history.push(url)
    // }
    )
}