import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function ManageService() {
    const [username, setUsername] = useState("walterwhite");
    const [id, setId] = useState('lcc');

    const manageService = async (event) => {
        event.preventDefault();
        console.log("MANAGING SERVCE");
        const response = await apiCaller("/manageservice", {
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
      <div className="ManageService">
        <form onSubmit={manageService}>
          <p>ManageService</p>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          </div>
          <div>  
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default ManageService;
  