import React from "react";
import "./Card.css";

function Card({ contributor }) {
  return (
    <div className="card">
      <div>
        <div className="card-front"></div>
        <div className="card-back">
          <img src={contributor} />
        </div>
      </div>
    </div>
  );
}

export { Card };
