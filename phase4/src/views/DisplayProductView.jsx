import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function DisplayproductView() {
    const prepareDisplayproductView = async () => {
      const response = await apiCaller("/displayproductview");
      setDisplayproductView(response);
    };

    const [displayproductView, setDisplayproductView] = useState([]);

    useEffect(() => {
      if (displayproductView.length === 0) {
        prepareDisplayproductView();
      }
    });

    return (
      <div className="DisplayproductView">
        <p>Displayproduct View</p>
        <table><tbody>
          <tr>
            <th>Product Name</th>
            <th>Location</th>
            <th>Amount Available</th>
            <th>Low Price</th>
            <th>High Price</th>
          </tr>
          {displayproductView.map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.location}</td>
              <td>{item.amount_available}</td>
              <td>{item.low_price}</td>
              <td>{item.high_price}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default DisplayproductView; 
  