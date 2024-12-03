
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function PurchaseProduct() {
    const [longName, setLongName] = useState("Jones and Associates");
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);
    const [barcode, setBarcode] = useState("pt_16WEF6");
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
        <form onSubmit={submitForm}>
          <p>PurchaseProduct</p>
          <div>
            <label>Long Name:</label>
            <input type="text" value={longName} onChange={(e) => setLongName(e.target.value)} /><br />
          </div>
          <div>
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
          </div>
          <div>
            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />
          </div>
          <div>
            <label>Barcode:</label>
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} /><br />
          </div>
          <div>
            <label>Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default PurchaseProduct;
  