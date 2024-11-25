import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddDriverRole() {
    const [username, setUsername] = useState("walterwhite");
    const [licenseID, setLicenseID] = useState(123456);
    const [licenseType, setLicenseType] = useState("commercial");
    const [successfulTrips, setSuccessfulTrips] = useState(11);

    const addDriverRole = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/adddriverrole", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                licenseID: Number(licenseID),
                licenseType: licenseType,
                successfulTrips: Number(successfulTrips)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddDriverRole">
        <p>AddDriverRole</p>
        <form onSubmit={addDriverRole}>

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

            <label>License ID:</label>
            <input type="text" value={licenseID} onChange={(e) => setLicenseID(e.target.value)} /><br />

            <label>License Type:</label>
            <input type="text" value={licenseType} onChange={(e) => setLicenseType(e.target.value)} /><br />

            <label>Successful Trips:</label>
            <input type="text" value={successfulTrips} onChange={(e) => setSuccessfulTrips(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddDriverRole;
  