import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function FetchEmployees(props) {
    return (
        <div>
            {props.employees.map(employee =>
                <EmployeeCard
                    first={employee.name.first}
                    last={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob.date}
                    picture={employee.picture.thumbnail}
                />)}
        </div>
    );
}