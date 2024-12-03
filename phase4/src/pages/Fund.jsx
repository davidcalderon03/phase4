import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import StartFunding from "../procedures/StartFunding.jsx";
function Fund() {
    const prepareFund = async () => {
      const response = await apiCaller("/fund");
      setFund(response);
    };

    const [fund, setFund] = useState([]);

    useEffect(() => {
      if (fund.length === 0) {
        prepareFund();
      }
    });

    return (
      <div className="Fund">
        <div style={{display: "flex"}}>
        <table><caption>Fund</caption><tbody>
          <tr>
            <th>Username</th>
            <th>Invested</th>
            <th>Invested Date</th>
            <th>Business</th>
          </tr>
          {fund.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.invested}</td>
              <td>{item.invested_date}</td>
              <td>{item.business}</td>
            </tr>
          ))}
          </tbody></table>
          <StartFunding />
          </div>
      </div>
    );
  }
  
  export default Fund;
  