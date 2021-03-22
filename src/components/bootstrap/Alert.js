import React, {useState} from 'react'

import {Alert} from 'react-bootstrap'

function CustomAlert({variant}) {
    const [show, setShow] = useState(true);
    // if(show) {}
    return ({message}) => (
      <Alert show={show} variant={variant} onClose={() => setShow(false)} dismissible>
        <p>{message}</p>
      </Alert>
    );
}

// const ErrorAlert = CustomAlert({variant: "danger"});
// const SuccessAlert = CustomAlert({variant: "success"});

export default CustomAlert