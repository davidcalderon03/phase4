import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddBusiness() {
    const [longName, setLongName] = useState("Golden Moth Chemical");
    const [rating, setRating] = useState("3");
    const [spent, setSpent] = useState("2500");
    const [location, setLocation] = useState("albuquerque");

    const addBusiness = async (event) => {
        event.preventDefault();
        console.log("ADDING BUSINESS");
        const response = await apiCaller("/addbusiness", {
            method: "POST",
            body: JSON.stringify({
                longName: longName,
                rating: Number(rating),
                spent: Number(spent),
                location: location      
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddLocation">
        <form onSubmit={addBusiness}>
            <p>AddBusiness</p>
            <div>
              <label>Business Name:</label>
              <input type="text" value={longName} onChange={(e) => setLongName(e.target.value)} /><br />
            </div>
            <div>
              <label>Rating:</label>
              <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} /><br />
            </div>
            <div>
              <label>Spent:</label>
              <input type="text" value={spent} onChange={(e) => setSpent(e.target.value)} /><br />
            </div>
            <div>
              <label>Location:</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} /><br />
            </div>
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddBusiness;