import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import PurchaseProduct from "../procedures/PurchaseProduct.jsx";
function Contain() {
    const prepareContains = async () => {
      const response = await apiCaller("/contain");
      setContains(response);
    };

    const [contains, setContains] = useState([]);

    useEffect(() => {
      if (contains.length === 0) {
        prepareContains();
      }
    });

    return (
      <div className="Contain">
        <p>Contain</p>
        <table><tbody>
          <tr>
            <th>ID</th>
            <th>Tag</th>
            <th>Barcode</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {contains.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.tag}</td>
              <td>{item.barcode}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          </tbody></table>
          <PurchaseProduct />
      </div>
    );
  }
  
  export default Contain;
  