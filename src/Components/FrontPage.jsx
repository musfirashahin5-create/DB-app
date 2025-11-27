import React from "react";

export default function FrontPage({ onNext }) {
  return (
    <section className="front-page">
      <h1 className="front-title">Happy Birthday! 🎉</h1>

      <div className="front-texts">
       <p>Wish you many more happy returns of the papa</p>
       <p>thangoo  mai nimmathiya enkuda happy ya iru ma</p>
       <p>naa una paathu kara ne ena paathuko sariya</p>
       <p>love u soo much papa</p>
       <p>nalla pillaiya senta pannama iruka. good boy ya irukanum.</p>
       <p>💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜</p>
      </div>

      <div className="center-row">
        <button className="primary" onClick={onNext}>Enter the Cake Room</button>
      </div>
    </section>
  );
}
