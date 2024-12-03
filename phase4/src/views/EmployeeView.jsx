import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function EmployeeView() {
    const prepareEmployeeView = async () => {
      const response = await apiCaller("/employeeview");
      setEmployeeView(response);
    };

    const [employeeView, setEmployeeView] = useState([]);

    useEffect(() => {
      if (employeeView.length === 0) {
        prepareEmployeeView();
      }
    });

    return (
      <div className="EmployeeView">
        <table><caption>Employee View</caption><tbody>
          <tr>
            <th>Username</th>
            <th>TaxID</th>
            <th>Salary</th>
            <th>Hired</th>
            <th>Employee Experience</th>
            <th>License ID</th>
            <th>Driving Experience</th>
            <th>Manager Status</th>
          </tr>
          {employeeView.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.taxID}</td>
              <td>{item.salary}</td>
              <td>{item.hired}</td>
              <td>{item.employee_experience}</td>
              <td>{item.licenseID}</td>
              <td>{item.driving_experience}</td>
              <td>{item.manager_status}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default EmployeeView;
  