import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
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
        <p>Work For</p>
        <table><tbody>
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
      </div>
    );
  }
  
  export default WorkFor;
  