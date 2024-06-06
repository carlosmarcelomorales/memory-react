import React from "react";
import "./Card.scss";

function Card({ contributor, onClick, flipped }) {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={contributor.avatar} />
        </div>
      </div>
    </div>
  );
}

export { Card };
