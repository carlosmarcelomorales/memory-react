import PropTypes from "prop-types";
import "./Menu.scss";

Menu.propTypes = {
  startGame: PropTypes.func.isRequired,
};

function Menu({ startGame }) {
  return (
    <div className="start-screen">
      <h1>Github Memory</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export { Menu };
