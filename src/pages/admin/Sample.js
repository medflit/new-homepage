import React from 'react'

export default function Sample(props) {

    // const displayPatients = (props) => {
    //     const [menu, patients] = props;

    //     if(patients.length > 0) {
    //         return (
    //             patients.map((patient, index) => {
    //                 console.log(patient);

    //                 return (
    //                     <tr className="v-middle" key={patient.id}>
    //                         <td>
    //                             <label className="ui-check m-0 ">
    //                                 <input type="checkbox" name="id" value="15"/>
    //                                 <i></i>
    //                             </label>
    //                         </td>
    //                         <td>
    //                             <div className="item-title text-color">{patient.username}</div>
    //                             <div className="item-title text-color">{patient.phone}</div>
    //                             <div className="item-title text-color">{patient.email}</div>
    //                             <td>
    //                                 <Dropdown>
    //                                     <Dropdown.Toggle size="xs" variant="secondary" id="dropdown-basic">
    //                                         <FeatherIcon icon="more-vertical" size="16"/>
    //                                     </Dropdown.Toggle>

    //                                     <Dropdown.Menu>
    //                                         <Dropdown.Item><Link to="/admin/profile/patient">View</Link></Dropdown.Item>
    //                                         <Dropdown.Item href="#">Block</Dropdown.Item>
    //                                         <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
    //                                     </Dropdown.Menu>
    //                                 </Dropdown>
    //                             </td>
    //                         </td>
    //                     </tr>
    //                 )
    //             })
    //         )
    //     } else {
    //         return (
    //             <p>No patients found!</p>
    //         )
    //     }
    // }

    // return (
    //     <>
    //         {displayPatients(props)}
    //     </>
    // )
}