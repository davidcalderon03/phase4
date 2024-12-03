import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddService() {
    const [id, setId] = useState("lph");
    const [longName, setLongName] = useState("Los Pollos Hermanos");
    const [homeBase, setHomeBase] = useState("albuquerque");
    const [manager, setManager] = useState("gusfring16");

    const addService = async (event) => {
        event.preventDefault();
        console.log("ADDING SERVICE");
        const response = await apiCaller("/addservice", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                longName: longName,
                homeBase: homeBase,
                manager:  manager        
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddService">
        <p>AddService</p>
        <form onSubmit={addService}>
            <label>Id:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
            <label>Delivery Service Name:</label>
            <input type="text" value={longName} onChange={(e) => setLongName(e.target.value)} /><br />
            <label>Home Base:</label>
            <input type="text" value={homeBase} onChange={(e) => setHomeBase(e.target.value)} /><br />
            <label>Manager:</label>
            <input type="text" value={manager} onChange={(e) => setManager(e.target.value)} /><br />
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddService;