import React, { useState, useEffect } from "react";
import AddOwner from "../procedures/AddOwner.jsx";
import {apiCaller} from "./../util.js";
function BusinessOwner() {
    const prepareBusinessOwners = async () => {
      const response = await apiCaller("/businessowner");
      setBusinessOwners(response);
    };

    const [businessOwners, setBusinessOwners] = useState([]);

    useEffect(() => {
      if (businessOwners.length === 0) {
        prepareBusinessOwners();
      }
    });

    return (
      <div className="User">
        <div style={{display: "flex"}}>
        <table><caption>User</caption><tbody>
          <tr>
            <th>Username</th>
          </tr>
          {businessOwners.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
            </tr>
          ))}
          </tbody></table>
          <AddOwner />
          </div>
      </div>
    );
  }
  
  export default BusinessOwner;
  