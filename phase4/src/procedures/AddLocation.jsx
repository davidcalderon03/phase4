import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddLocation() {
    const [label, setLabel] = useState("albuquerque");
    const [xCoord, setXCoord] = useState("3");
    const [yCoord, setYCoord] = useState("15");
    const [space, setSpace] = useState("56");

    const addLocation = async (event) => {
        event.preventDefault();
        console.log("ADDING LOCATION");
        const response = await apiCaller("/addlocation", {
            method: "POST",
            body: JSON.stringify({
                label: label,
                xCoord: xCoord,
                yCoord: yCoord,
                space:  space        
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddLocation">
        <p>AddLocation</p>
        <form onSubmit={addLocation}>
            <label>Label:</label>
            <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} /><br />
            <label>X Coordinate:</label>
            <input type="text" value={xCoord} onChange={(e) => setXCoord(e.target.value)} /><br />
            <label>Y Coordinate:</label>
            <input type="text" value={yCoord} onChange={(e) => setYCoord(e.target.value)} /><br />
            <label>Space:</label>
            <input type="text" value={space} onChange={(e) => setSpace(e.target.value)} /><br />
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddLocation;