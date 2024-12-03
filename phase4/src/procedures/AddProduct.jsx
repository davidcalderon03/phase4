import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function AddProduct() {
    const [barcode, setBarcode] = useState("ww_U478PN");
    const [iname, setIname] = useState("Crank");
    const [weight, setWeight] = useState("2");

    const addProduct = async (event) => {
        event.preventDefault();
        console.log("ADDING PRODUCT");
        const response = await apiCaller("/addproduct", {
            method: "POST",
            body: JSON.stringify({
                barcode: barcode ,
                iname: iname,
                weight: Number(weight)         
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddProduct">
        <p>AddProduct</p>
        <form onSubmit={addProduct}>
            <label>Barcode:</label>
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} /><br />
            <label>Inventory Name:</label>
            <input type="text" value={iname} onChange={(e) => setIname(e.target.value)} /><br />
            <label>Weight:</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} /><br />
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddProduct;