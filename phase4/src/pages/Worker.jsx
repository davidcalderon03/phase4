import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import AddWorkerRole from "../procedures/AddWorkerRole.jsx";
function Worker() {
    const prepareWorkers = async () => {
      const response = await apiCaller("/worker");
      setWorkers(response);
    };

    const [workers, setWorkers] = useState([]);

    useEffect(() => {
      if (workers.length === 0) {
        prepareWorkers();
      }
    });

    return (
      <div className="Worker">
        <p>Worker</p>
        <table><tbody>
          <tr>
            <th>Username</th>
          </tr>
          {workers.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
            </tr>
          ))}
          </tbody></table>
          <AddWorkerRole />
      </div>
    );
  }
  
  export default Worker;
  