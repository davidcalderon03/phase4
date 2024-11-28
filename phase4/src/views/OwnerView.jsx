import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function OwnerView() {
    const prepareOwnerView = async () => {
      const response = await apiCaller("/ownerview");
      setOwnerView(response);
    };

    const [ownerView, setOwnerView] = useState([]);

    useEffect(() => {
      if (ownerView.length === 0) {
        prepareOwnerView();
      }
    });

    return (
      <div className="OwnerView">
        <p>Owner View</p>
        <table><tbody>
          <tr>
            <th>Username</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>Number Businesses</th>
            <th>Number Places</th>
            <th>Highs</th>
            <th>Lows</th>
            <th>Debt</th>
          </tr>
          {ownerView.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.address}</td>
              <td>{item.num_businesses}</td>
              <td>{item.num_places}</td>
              <td>{item.highs}</td>
              <td>{item.lows}</td>
              <td>{item.debt}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default OwnerView;
  