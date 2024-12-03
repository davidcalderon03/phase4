import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function LocationView() {
    const prepareLocationView = async () => {
      const response = await apiCaller("/locationview");
      setLocationView(response);
    };

    const [locationView, setLocationView] = useState([]);

    useEffect(() => {
      if (locationView.length === 0) {
        prepareLocationView();
      }
    });

    return (
      <div className="LocationView">
        <p>Location View</p>
        <table><tbody>
          <tr>
            <th>Label</th>
            <th>Name</th>
            <th>X Coordinate</th>
            <th>Y Coordinate</th>
            <th>Space</th>
            <th>Number of Vans</th>
            <th>Van Ids</th>
            <th>Remaining Space</th>
          </tr>
          {locationView.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.long_name}</td>
              <td>{item.x_coord}</td>
              <td>{item.y_coord}</td>
              <td>{item.space}</td>
              <td>{item.num_vans}</td>
              <td>{item.van_ids}</td>
              <td>{item.remaining_space}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default LocationView;