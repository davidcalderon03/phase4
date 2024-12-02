import React, { useState, useEffect } from "react";
import {apiCaller} from "../util.js";
function ProductView() {
    const prepareProductView = async () => {
      const response = await apiCaller("/productview");
      setProductView(response);
    };

    const [productView, setProductView] = useState([]);

    useEffect(() => {
      if (productView.length === 0) {
        prepareProductView();
      }
    });

    return (
      <div className="ProductView">
        <p>Product View</p>
        <table><tbody>
          <tr>
            <th>Product Name</th>
            <th>Location</th>
            <th>Amount Available</th>
            <th>Low Price</th>
            <th>High Price</th>
          </tr>
          {productView.map((item, index) => (
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
  
  export default ProductView; 
  