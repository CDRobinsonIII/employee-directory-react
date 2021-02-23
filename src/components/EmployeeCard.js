import React from "react";
import moment from "moment";

export default function EmployeeCard(props) {

    const currentDate = moment(props.dob).format('MM/DD/YYYY');

    return (
        <tr>
            <td><img src={props.picture} alt="thumbnail headshot of employee"></img></td>
            <td>{props.first + " " + props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{currentDate}</td>
        </tr>
    );
}