import { useState } from 'react'
import config from '../api/index'


function GetPatients() {

    const [patients, setPatient] = useState([]);

    const url = '/patients/find';

    const getAllPatients = async () => {
        const response = await fetch(`${config.baseUrl}` + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
        });

        const jsonData = await response.json();

        setPatient(jsonData.data);
    };
}

export default GetPatients;  