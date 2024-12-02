
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function LoadVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(1);
    const [barcode, setBarcode] = useState("pt_16WEF6");
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
        <p>LoadVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Barcode:</label>
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} /><br />

            <label>Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />

            <label>Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default LoadVan;
  