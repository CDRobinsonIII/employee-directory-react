import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function FetchEmployees(props) {
    return (
        <table>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            {props.employees.map(employee =>
                <EmployeeCard
                    picture={employee.picture.thumbnail}
                    first={employee.name.first}
                    last={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob.date}
                />)}
        </table>
    );
}