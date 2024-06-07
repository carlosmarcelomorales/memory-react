import { Board } from "../../Board/Board";
import { Countdown } from "../../Countdown/Countdown";
import "./GameScreen.scss";
import { Fragment } from "react";
import PropTypes from "prop-types";

// GameScreen.propTypes = {
//     contributors: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

function GameScreen({
  contributors,
  increaseScore,
  onTimeUp,
  totalTime,
  score,
}) {
  return (
    <Fragment>
      <header>Github Memory</header>
      <div className="game-container">
        <Board contributors={contributors} onMatch={increaseScore} />
        <div className="info-bar">
          <Countdown time={totalTime} onTimeUp={onTimeUp} />
          <div className="score">Score: {score}</div>
        </div>
      </div>
    </Fragment>
  );
}

export { GameScreen };
