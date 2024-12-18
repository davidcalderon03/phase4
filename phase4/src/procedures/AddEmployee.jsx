import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddEmployee() {
    const [username, setUsername] = useState("walterwhite");
    const [firstName, setFirstName] = useState("Walter");
    const [lastName, setLastName] = useState("White");
    const [address, setAddress] = useState("New Mexico");
    const [birthdate, setBirthdate] = useState("2020-01-01");
    const [taxID, setTaxId] = useState("123-45-6789");
    const [hiredDate, setHiredDate] = useState("2030-01-01");
    const [experience, setExperience] = useState("12");
    const [salary, setSalary] = useState("2345");

    const addEmployee = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/addemployee", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                address: address,
                birthdate: birthdate,
                taxID: taxID,
                hiredDate: hiredDate,
                experience: Number(experience),
                salary: Number(salary)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddEmployee">
        <form onSubmit={addEmployee}>
        <p>AddEmployee</p>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
            <label>Birthdate:</label>
            <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </div>
        <div>
            <label>TaxID:</label>
            <input type="text" value={taxID} onChange={(e) => setTaxId(e.target.value)} />
        </div>
        <div>
            <label>Hired Date:</label>
            <input type="text" value={hiredDate} onChange={(e) => setHiredDate(e.target.value)} />
        </div>
        <div>
            <label>Experience:</label>
            <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <div>
            <label>Salary:</label>
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddEmployee;
  