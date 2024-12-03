import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import AddLocation from "../procedures/AddLocation.jsx";

function Location() {
    const prepareLocations = async () => {
      const response = await apiCaller("/location");
      setLocations(response);
    };

    const [locations, setLocations] = useState([]);

    useEffect(() => {
      if (locations.length === 0) {
        prepareLocations();
      }
    });

    return (
      <div className="Location">
        <p>Location</p>
        <table><tbody>
          <tr>
            <th>Label</th>
            <th>X Coord</th>
            <th>Y Coord</th>
            <th>Space</th>
          </tr>
          {locations.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.x_coord}</td>
              <td>{item.y_coord}</td>
              <td>{item.space}</td>
            </tr>
          ))}
          </tbody></table>
          <AddLocation />
      </div>
    );
  }
  
  export default Location;
  