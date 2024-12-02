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
        <p>ManageService</p>
        <form onSubmit={manageService}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
            
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default ManageService;
  