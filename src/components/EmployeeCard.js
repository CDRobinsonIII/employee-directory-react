import React from "react";
import moment from "moment";

const styles = {
    td: {
      border: "1px solid black",
      textAlign: "center"
    }
  };

export default function EmployeeCard(props) {

    const currentDate = moment(props.dob).format('MM/DD/YYYY');

    return (
        <tr>
            <td style={styles.td}><img src={props.picture} alt="thumbnail headshot of employee"></img></td>
            <td style={styles.td}>{props.first + " " + props.last}</td>
            <td style={styles.td}>{props.phone}</td>
            <td style={styles.td}>{props.email}</td>
            <td style={styles.td}>{currentDate}</td>
        </tr>
    );
}