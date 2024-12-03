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
        <form onSubmit={removeDriverRole}>
        <p>RemoveDriverRole</p>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        </div>
        <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RemoveDriverRole;
  