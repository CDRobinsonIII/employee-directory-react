import React from "react";
import EmployeeCard from "./EmployeeCard";

const styles = {
    table: {
        border: "1px solid black",
        width: "80%"
    },
    th: {
        border: "1px solid black",
        color: "white",
        backgroundColor: "#282c34",
        alignText: "center"
    },
    thName: {
        border: "1px solid black",
        color: "white",
        backgroundColor: "#282c34",
        alignText: "center",
        cursor: "pointer"
    }
  };

export default function FetchEmployees(props) {
    return (
        <table style={styles.table}>
            <tbody>
                <tr>
                    <th style={styles.th}>Image</th>
                    <th onClick ={props.sortClick} style={styles.thName}>Name <span>{props.currentSort}</span></th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>DOB</th>
                </tr>
                {props.employees.map(employee =>
                    <EmployeeCard
                        key={employee.id.value}
                        picture={employee.picture.thumbnail}
                        first={employee.name.first}
                        last={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob.date}
                    />)}
            </tbody>
        </table>
    );
}