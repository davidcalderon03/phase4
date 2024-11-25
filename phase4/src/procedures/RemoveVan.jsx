
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function RemoveVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/removevan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="RemoveVan">
        <p>RemoveVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RemoveVan;
  