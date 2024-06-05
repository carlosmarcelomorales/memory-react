import React from "react";
import "./Card.scss";

function Card({ contributor }) {
  return (
    <div className="card">
      <div className="card-front"></div>
      <div className="card-back">
        <img src={contributor} />
      </div>
    </div>
  );
}

export { Card };
