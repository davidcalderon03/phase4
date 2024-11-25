import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function User() {
    const prepareUsers = async () => {
      const response = await apiCaller("/user");
      setUsers(response);
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
      if (users.length === 0) {
        prepareUsers();
      }
    });

    return (
      <div className="User">
        <p>User</p>
        <table><tbody>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Birthdate</th>
          </tr>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.address}</td>
              <td>{item.birthdate}</td>
            </tr>
          ))}
          </tbody></table>
      </div>
    );
  }
  
  export default User;
  