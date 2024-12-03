import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddWorkerRole() {
    const [username, setUsername] = useState("walterwhite");

    const addWorkerRole = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/addworkerrole", {
            method: "POST",
            body: JSON.stringify({
                username: username
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddWorkerRole">
        <form onSubmit={addWorkerRole}>
          <p>AddWorkerRole</p>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          </div>
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddWorkerRole;
  