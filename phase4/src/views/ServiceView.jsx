import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function ServiceView() {
    const prepareServiceView = async () => {
      const response = await apiCaller("/serviceview");
      setServiceView(response);
    };

    const [serviceView, setServiceView] = useState([]);

    useEffect(() => {
      if (serviceView.length === 0) {
        prepareServiceView();
      }
    });

    return (
      <div className="ServiceView">
        <p>Service View</p>
        <table><tbody>
          <tr>
            <th>ID</th>
            <th>Long Name</th>
            <th>Home Base</th>
            <th>Manager</th>
            <th>Revenue</th>
            <th>Products Carried</th>
            <th>Cost Carried</th>
            <th>Weight Carried</th>
          </tr>
          {serviceView.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.long_name}</td>
              <td>{item.home_base}</td>
              <td>{item.manager}</td>
              <td>{item.revenue}</td>
              <td>{item.products_carried}</td>
              <td>{item.cost_carried}</td>
              <td>{item.weight_carried}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default ServiceView;
  