
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function PurchaseProduct() {
    const [longName, setLongName] = useState("business");
    const [id, setId] = useState("llc");
    const [tag, setTag] = useState(12);
    const [barcode, setBarcode] = useState("barcode");
    const [quantity, setQuantity] = useState(1);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/purchaseproduct", {
            method: "POST",
            body: JSON.stringify({
                longName: longName,
                id: id,
                tag: Number(tag),
                barcode: barcode,
                quantity: Number(quantity)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="PurchaseProduct">
        <p>PurchaseProduct</p>
        <form onSubmit={submitForm}>

            <label>Long Name:</label>
            <input type="text" value={longName} onChange={(e) => setLongName(e.target.value)} /><br />

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Barcode:</label>
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} /><br />

            <label>Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default PurchaseProduct;
  