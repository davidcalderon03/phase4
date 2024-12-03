import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function StartFunding() {
    const [username, setUsername] = useState("gusfring");
    const [invested, setInvested] = useState("3500");
    const [business, setBusiness] = useState("Los Pollos Hermanos");
    const [investedDate, setInvestedDate] = useState("2009-17-05");
    

    const startFunding = async (event) => {
        event.preventDefault();
        console.log("FUNDING BUSINESS");
        const response = await apiCaller("/startfunding", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                invested: Number(invested),
                business: business,
                investedDate: investedDate
              })
        })
        .then(response => console.log(response));
        window.location.reload();
    };

    return (
      <div className="StartFunding">
        <p>StartFunding</p>
        <form onSubmit={startFunding}>
            <label>Username :</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <label>Amount To Invest:</label>
            <input type="text" value={invested} onChange={(e) => setInvested(e.target.value)} /><br />
            <label>Business to Invested In:</label>
            <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)} /><br />
            <label>Date of Investment:</label>
            <input type="text" value={investedDate} onChange={(e) => setInvestedDate(e.target.value)} /><br />
            <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default StartFunding;