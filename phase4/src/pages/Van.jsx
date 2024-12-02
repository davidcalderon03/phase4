import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
import DriveVan from "../procedures/DriveVan.jsx";
import RemoveVan from "../procedures/RemoveVan.jsx";
import PurchaseProduct from "../procedures/PurchaseProduct.jsx";
import AddVan from "../procedures/AddVan.jsx";
import RefuelVan from "../procedures/RefuelVan.jsx";
import LoadVan from "../procedures/LoadVan.jsx";
import TakeoverVan from "../procedures/TakeoverVan.jsx";
function Van() {
    const prepareVans = async () => {
      const response = await apiCaller("/van");
      setVans(response);
    };

    const [vans, setVans] = useState([]);

    useEffect(() => {
      if (vans.length === 0) {
        prepareVans();
      }
    });

    return (
      <div className="Vans">
        <p>Vans</p>
        <table><tbody>
          <tr>
            <th>ID</th>
            <th>Tag</th>
            <th>Fuel</th>
            <th>Capacity</th>
            <th>Sales</th>
            <th>Driven By</th>
            <th>Located At</th>
          </tr>
          {vans.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.tag}</td>
              <td>{item.fuel}</td>
              <td>{item.capacity}</td>
              <td>{item.sales}</td>
              <td>{item.driven_by}</td>
              <td>{item.located_at}</td>
            </tr>
          ))}
        </tbody></table>
        <AddVan />
        <DriveVan />
        <RemoveVan />
        <RefuelVan />
        <PurchaseProduct />
        <LoadVan />
        <TakeoverVan />
      </div>
    );
  }
  
  export default Van;
  