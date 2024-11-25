
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function DriveVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);
    const [destination, setDestination] = useState("airport");

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/drivevan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag),
                destination: destination,
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="DriveVan">
        <p>DriveVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Destination:</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default DriveVan;
  