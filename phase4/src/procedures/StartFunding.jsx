import React, { useState, useEffect } from "react";
import {apiCaller} from "./../util.js";
function StartFunding() {
    const [username, setUsername] = useState("sprince6");
    const [invested, setInvested] = useState("3500");
    const [business, setBusiness] = useState("Peak Performance Group");
    const [investedDate, setInvestedDate] = useState("2009-05-17");
    

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
        <form onSubmit={startFunding}>
          <p>StartFunding</p>
          <div>
            <label>Username :</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          </div>
          <div>
            <label>Amount To Invest:</label>
            <input type="text" value={invested} onChange={(e) => setInvested(e.target.value)} /><br />
          </div>
          <div>
            <label>Business to Invested In:</label>
            <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)} /><br />
          </div>
          <div>
            <label>Date of Investment:</label>
            <input type="text" value={investedDate} onChange={(e) => setInvestedDate(e.target.value)} /><br />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default StartFunding;