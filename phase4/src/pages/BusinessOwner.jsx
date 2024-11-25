import React, { useState, useEffect } from "react";
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
        <p>User</p>
        <table><tbody>
          <tr>
            <th>Username</th>
          </tr>
          {businessOwners.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default BusinessOwner;
  