import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function DeliveryService() {
    const prepareDeliveryServices = async () => {
      const response = await apiCaller("/deliveryservice");
      setDeliveryServices(response);
    };

    const [deliveryServices, setDeliveryServices] = useState([]);

    useEffect(() => {
      if (deliveryServices.length === 0) {
        prepareDeliveryServices();
      }
    });

    return (
      <div className="DeliveryService">
        <p>Delivery Service</p>
        <table><tbody>
          <tr>
            <th>ID</th>
            <th>Long Name</th>
            <th>Home Base</th>
            <th>Manager</th>
          </tr>
          {deliveryServices.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.long_name}</td>
              <td>{item.home_base}</td>
              <td>{item.manager}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default DeliveryService;
  