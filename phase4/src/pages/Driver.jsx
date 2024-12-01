import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import AddDriverRole from "../procedures/AddDriverRole.jsx";
function Driver() {
    const prepareDrivers = async () => {
      const response = await apiCaller("/driver");
      setDrivers(response);
    };

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
      if (drivers.length === 0) {
        prepareDrivers();
      }
    });

    return (
      <div className="Driver">
        <p>Driver</p>
        <table><tbody>
          <tr>
            <th>Username</th>
            <th>License ID</th>
            <th>License Type</th>
            <th>Successful Trips</th>
          </tr>
          {drivers.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.licenseID}</td>
              <td>{item.license_type}</td>
              <td>{item.successful_trips}</td>
            </tr>
          ))}
          </tbody></table>
          <AddDriverRole />
          <RemoveDriverRole />
      </div>
    );
  }
  
  export default Driver;
  