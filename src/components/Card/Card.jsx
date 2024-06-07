import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";

Card.propTypes = {
  contributor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  flipped: PropTypes.bool,
};

function Card({ contributor, onClick, flipped }) {
  console.log(contributor);
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
