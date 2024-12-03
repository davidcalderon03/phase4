
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function RefuelVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);
    const [fuel, setFuel] = useState(40)

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/refuelvan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag),
                fuel: Number(fuel)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="RefuelVan">
        <p>RefuelVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Fuel:</label>
            <input type="text" value={fuel} onChange={(e) => setFuel(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RefuelVan;
  