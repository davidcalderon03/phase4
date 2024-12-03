import React, { useState, useEffect } from "react";
import { apiCaller } from "../util";
import AddProduct from "../procedures/AddProduct.jsx";
import RemoveProduct from "../procedures/RemoveProduct";

function Product() {
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
        <table><tbody>
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
        </tbody></table>
        <AddProduct />
        <RemoveProduct />
      </div>
    );
  }
  
  export default Product;
  