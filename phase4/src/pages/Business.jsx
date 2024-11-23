import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function Business() {
    const prepareBusinesses = async () => {
      const response = await apiCaller("/business");
      setBusinesses(response);
    };

    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
      if (businesses.length === 0) {
        prepareBusinesses();
      }
    });

    return (
      <div className="Business">
        <p>Business</p>
        <table><tbody>
          <tr>
            <th>Long Name</th>
            <th>Rating</th>
            <th>Spent</th>
            <th>Location</th>
          </tr>
          {businesses.map((item, index) => (
            <tr key={index}>
              <td>{item.long_name}</td>
              <td>{item.rating}</td>
              <td>{item.spent}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody></table>
      </div>
    );
  }
  
  export default Business;
  