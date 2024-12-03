import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddOwner() {
    const [username, setUsername] = useState("walterwhite");
    const [firstName, setFirstName] = useState("Walter");
    const [lastName, setLastName] = useState("White");
    const [address, setAddress] = useState("New Mexico");
    const [birthdate, setBirthdate] = useState("2020-01-01");
    const addOwner = async (event) => {
        event.preventDefault();
        console.log("ADDING OWNER");
        const response = await apiCaller("/addowner", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                address: address,
                birthdate: birthdate,
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };
    return (
      <div className="AddOwner">
        <form onSubmit={addOwner}>
        <p>AddOwner</p>
        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        </div>
        <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
        </div>
        <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
        </div>
        <div>
            <label>Birthdate:</label>
            <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} /><br />
        </div>
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddOwner;
  