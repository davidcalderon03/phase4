import React, { useState, useEffect } from "react";
import {apiCaller} from "../util.js";
function RemoveDriverRole() {
    const [username, setUsername] = useState("walterwhite");

    const removeDriverRole = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/removedriverrole", {
            method: "POST",
            body: JSON.stringify({
                username: username
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="RemoveDriverRole">
        <p>RemoveDriverRole</p>
        <form onSubmit={removeDriverRole}>

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RemoveDriverRole;
  