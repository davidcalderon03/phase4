import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import HireEmployee from "../procedures/HireEmployee.jsx";
import FireEmployee from "../procedures/FireEmployee.jsx";
function WorkFor() {
    const prepareWorkFor = async () => {
      const response = await apiCaller("/workfor");
      setWorkFor(response);
    };

    const [workFor, setWorkFor] = useState([]);

    useEffect(() => {
      if (workFor.length === 0) {
        prepareWorkFor();
      }
    });

    return (
      <div className="WorkFor">
        <div style={{display: "flex"}}>
        <table><caption>Work For</caption><tbody>
          <tr>
            <th>Username</th>
            <th>ID</th>
          </tr>
          {workFor.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.id}</td>
            </tr>
          ))}
          </tbody></table>
          <HireEmployee />
          <FireEmployee />
        </div>
      </div>
    );
  }
  
  export default WorkFor;
  