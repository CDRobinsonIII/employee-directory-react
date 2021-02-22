import React from "react";

export default function EmployeeCard(props) {
    return (
        <div>
            <div>{props.first + " " + props.last}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div>{props.dob}</div>
            <div>{props.picture}</div>
        </div>
    );
}