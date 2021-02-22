import React from "react";

export default function EmployeeCard(props) {
    return (
        <tr>
            <td>{props.picture}</td>
            <td>{props.first + " " + props.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
}