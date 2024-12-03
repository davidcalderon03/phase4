import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function DriverView() {
    const prepareDriverView = async () => {
      const response = await apiCaller("/driverview");
      setDriverView(response);
    };

    const [driverView, setDriverView] = useState([]);

    useEffect(() => {
      if (driverView.length === 0) {
        prepareDriverView();
      }
    });

    return (
      <div className="DriverView">
        <p>Driver View</p>
        <table><tbody>
          <tr>
            <th>Username</th>
            <th>LicenseID</th>
            <th>Successful Trips</th>
            <th>Number of Vans</th>
          </tr>
          {driverView.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.licenseID}</td>
              <td>{item.successful_trips}</td>
              <td>{item.num_vans}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default DriverView;