
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function TakeoverVan() {
    const [username, setUsername] = useState("walterwhite");
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/takeovervan", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                id: id,
                tag: Number(tag)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="TakeoverVan">
        <p>TakeoverVan</p>
        <form onSubmit={submitForm}>

            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default TakeoverVan;
  