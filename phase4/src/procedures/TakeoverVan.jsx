
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function TakeoverVan() {
    const [username, setUsername] = useState("csoares8");
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);

    const takeoverVan = async (event) => {
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
        <form onSubmit={takeoverVan}>
          <p>TakeoverVan</p>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          </div>
          <div>
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
          </div>
          <div>
            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default TakeoverVan;
  