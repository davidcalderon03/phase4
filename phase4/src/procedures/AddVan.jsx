
import React, { useState } from "react";
import {apiCaller} from "./../util.js";
function AddVan() {
    const [id, setId] = useState("lcc");
    const [tag, setTag] = useState(3);
    const [fuel, setFuel] = useState(40);
    const [capacity, setCapacity] = useState(3);
    const [sales, setSales] = useState(20)
    const [drivenby, setDrivenby] = useState("agarcia7")

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await apiCaller("/addvan", {
            method: "POST",
            body: JSON.stringify({
                id: id,
                tag: Number(tag),
                fuel: Number(fuel),
                capacity: Number(capacity),
                sales: Number(sales),
                drivenby: drivenby
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="AddVan">
        <p>AddVan</p>
        <form onSubmit={submitForm}>

            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />

            <label>Tag:</label>
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} /><br />

            <label>Fuel:</label>
            <input type="text" value={fuel} onChange={(e) => setFuel(e.target.value)} /><br />

            <label>Capacity:</label>
            <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} /><br />

            <label>Sales:</label>
            <input type="text" value={sales} onChange={(e) => setSales(e.target.value)} /><br />

            <label>Drivenby:</label>
            <input type="text" value={drivenby} onChange={(e) => setDrivenby(e.target.value)} /><br />

            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default AddVan;
  