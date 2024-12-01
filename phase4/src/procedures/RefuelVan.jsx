
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function RefuelVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);
    const [morefuel, setMorefuel] = useState(40);


    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/refuelvan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag)
                morefuel: Number(morefuel)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="RefuelVan">
        <p>RemoveVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Morefuel:</label>
            <input type="text" value={morefuel} onChange={(e) => setMorefuel(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RefuelVan;
  