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
        <p>AddOwner</p>
        <form onSubmit={addOwner}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br />
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <label>Birthdate:</label>
            <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} /><br />
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddOwner;
  