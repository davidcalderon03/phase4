import React, { useState, useEffect } from "react";
import {apiCaller} from "../util.js";
function FireEmployee() {
    const [username, setUsername] = useState("walterwhite");
    const [id, setId] = useState("lcc");

    const fireEmployee = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/fireemployee", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                id: id
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="FireEmployee">
        <p>FireEmployee</p>
        <form onSubmit={fireEmployee}>

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default FireEmployee;