import React, { useState, useEffect } from "react";
function Product() {
    const apiCaller = async (endpoint, options = {}) => {
      options.credentials = options.credentials || "include";
      options.headers = options.headers || {};
      options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
      const response = await fetch("http://localhost:3000/product", options)
      .then(response => response.json());
      return response;
    };
    
    const prepareProducts = async () => {
      const response = await apiCaller("/product");
      console.log(response);
      setProducts(response);
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
      if (products.length == 0) {
        prepareProducts();
      }
    });

    return (
      <div className="Product">
        <p>Products</p>
        <ul>
          <tr>
            <th>Barcode</th>
            <th>Name</th>
            <th>Weight</th>
          </tr>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.barcode}</td>
              <td>{item.iname}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Product;
  