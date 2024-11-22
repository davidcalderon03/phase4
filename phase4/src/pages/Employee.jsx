import React, { useState, useEffect } from "react";
function Employee() {
    const apiCaller = async (endpoint, options = {}) => {
      options.credentials = options.credentials || "include";
      options.headers = options.headers || {};
      options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
      const response = await fetch("http://localhost:3000/employee", options)
      .then(response => response.json());
      return response;
    };
    
    const prepareEmployees = async () => {
      const response = await apiCaller("/employee");
      console.log(response);
      setEmployees(response);
    };

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      if (employees.length == 0) {
        prepareEmployees();
      }
    });

    return (
      <div className="Employee">
        <p>Employee</p>
        <ul>
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
        </ul>
      </div>
    );
  }
  
  export default Employee;
  