
import React, { useState } from "react";
import {apiCaller} from "../util.js";
function RemoveProduct() {
    const [barcode, setBarcode] = useState("barcode");

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/removeproduct", {
            method: "POST",
            body: JSON.stringify({
                barcode: barcode
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="RemoveProduct">
        <p>Remove Product</p>
        <form onSubmit={submitForm}>

            <label>Barcode:</label>
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default RemoveProduct;
  