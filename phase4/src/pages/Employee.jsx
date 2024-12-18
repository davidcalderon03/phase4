import React, { useState, useEffect } from "react";
import AddEmployee from "./../procedures/AddEmployee.jsx";
import {apiCaller} from "./../util.js";
function Employee() {
    const prepareEmployees = async () => {
      const response = await apiCaller("/employee");
      setEmployees(response);
    };

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      if (employees.length === 0) {
        prepareEmployees();
      }
    });

    return (
      <div className="Employee">
        <div style={{display: "flex"}}>
        <table><caption>Employee</caption><tbody>
          <tr>
            <th>Username</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>TaxID</th>
            <th>Hired</th>
          </tr>
          {employees.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.salary}</td>
              <td>{item.experience}</td>
              <td>{item.taxID}</td>
              <td>{item.hired}</td>
            </tr>
          ))}
          </tbody></table>
        <AddEmployee />
        </div>
      </div>
    );
  }
  
  export default Employee;
  