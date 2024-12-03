
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function LoadVan() {
    const [id, setId] = useState("pbl");
    const [tag, setTag] = useState(8);
    const [barcode, setBarcode] = useState("hm_5E7L23M");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(10);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/loadvan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag),
                barcode: barcode,
                quantity: Number(quantity),
                price: Number(price)
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="LoadVan">
        <form onSubmit={submitForm}>
          <p>LoadVan</p>
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
          <div>
            <label>Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default LoadVan;
  