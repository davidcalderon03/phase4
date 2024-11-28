import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function HireEmployee() {
    const [username, setUsername] = useState("walterwhite");
    const [id, setId] = useState("lcc");

    const hireEmployee = async (event) => {
        event.preventDefault();
        console.log("HIRING EMPLOYEE");
        const response = await apiCaller("/hireemployee", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                id: id,
                
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="HireEmployee">
        <p>HireEmployee</p>
        <form onSubmit={hireEmployee}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
            
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddEmployee;
  